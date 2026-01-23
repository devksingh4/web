*[Code is available on GitHub](https://github.com/devksingh4/pycora)*

Deep learning frameworks love uniformity. GPUs are optimized for dense, rectangular tensor operations where every dimension is predictable. But real-world data rarely cooperates. Sentences have different lengths. Audio clips vary in duration. Sequences in a batch almost never line up.

The standard workaround is padding: stuff shorter sequences with zeros until everything matches the longest one in the batch. It works, but it's wasteful. You end up processing a lot of zeros that get thrown away, and those zeros still take up GPU memory. As batch sizes grow, the problem gets worse since a single long outlier forces every other sequence to be padded to match. 

The CoRa compiler, proposed by Fegade et al.[^1], introduced a better approach: a storage format and set of scheduling primitives designed specifically for ragged tensors. Our project reimplements these ideas within PyTorch and Triton that handles variable-length data without excessive padding.

## The Problem with Existing Approaches

There are a few ways people currently handle variable-length data, and none of them are great.

**Padding** is simple but inefficient. For large batches with high variance in sequence length, you can end up computing on more padding than actual data.

**Hand-optimized kernels** (like NVIDIA's FasterTransformer) solve the performance problem but create new ones. They're monolithic, hard to extend, and don't port well across hardware.

**Sparse tensor compilers** seem like they might work since padded regions are just zeros. But sparse formats like CSR are designed for genuinely sparse data with scattered non-zeros. They introduce unnecessary indexing overhead when applied to ragged structures where the non-zeros are actually contiguous within each sequence.


## How PyCoRa Works

### The Data Structure

A PyCoRa `RaggedTensor` stores variable-length sequences in a flattened format with metadata for efficient access:

- **data**: All sequences concatenated into a single tensor
- **offsets**: Starting position of each sequence (enables O(1) random access)
- **lengths**: Actual length of each sequence
- **padded_lengths**: Lengths after alignment to 64-element boundaries

The alignment to 64 elements ensures cache-friendly memory access patterns. We do pad, but only to alignment boundaries rather than to the maximum sequence length.

### CoRa Metadata

Following the original CoRa design, we precompute auxiliary structures that map GPU thread blocks onto the ragged data:

- **grid_mapping**: Maps each thread block ID to its corresponding batch index
- **block_offsets**: Cumulative thread block counts, so each block knows its position within a sequence

These are computed once per tensor and cached. They let thread blocks independently figure out which sequence they're processing without any coordination.

### Ragged Flash Attention

Our flash attention implementation adapts the algorithm from Dao et al. to work with ragged sequences. The key modification: instead of assuming fixed sequence length across the batch, each thread block looks up its batch assignment from the grid mapping, retrieves the appropriate sequence bounds, and processes only the actual tokens for that sequence.

The tiled, online softmax computation stays the same. We just route each tile to the right data.

### Ragged Matrix Multiplication

For feed-forward layers, we implement a custom kernel where each sequence gets multiplied by its corresponding weight matrix. The kernel uses 64x64x64 tiling, with each thread block determining its batch assignment from the metadata before loading the appropriate slices.

## Results

We evaluated against PyTorch's native TransformerEncoder with padding masks on an RTX 3060. Both implementations used `torch.compile` with `mode="reduce-overhead"` for fair comparison.

| Dataset | Batch Size | PyTorch (ms) | PyCoRa (ms) | Speedup |
|---------|------------|--------------|-------------|---------|
| SQuAD | 128 | 345.40 | 211.69 | 1.63x |
| RACE | 128 | 543.43 | 411.81 | 1.32x |
| MNLI | 64 | 45.99 | 31.50 | 1.46x |
| CoLA | 128 | 25.98 | 55.73 | 0.47x |

The pattern is clear: PyCoRa helps when sequences are long and variable, but hurts when sequences are short. On SQuAD we see 1.63x speedup. On CoLA (short sequences), we're actually slower than padding.

This makes sense. Our custom kernels and metadata management have overhead. For short sequences, that overhead exceeds what we save by avoiding padding. PyTorch's standard operations are highly optimized for small-scale problems.

## What We Learned

**PyTorch has gotten really good.** The original CoRa paper showed larger speedups, but that was 2021. Since then, PyTorch has integrated FlashAttention, added the torch.compile infrastructure, and generally improved baseline performance. The gap between padded and ragged approaches has shrunk.

**Ragged tensors aren't always the answer.** They're most beneficial when sequences have substantial length variance, average length is moderate to long, and batch sizes are large enough to amortize metadata computation. For short, uniform sequences, just use padding.

**The CoRa approach ports well to modern tooling.** TorchDynamo, TorchInductor, and Triton made it possible to implement these ideas without diving into TVM. The PyTorch ecosystem is mature enough to support this kind of custom tensor work.

[^1]: Pratik Fegade, Tianqi Chen, Phillip B. Gibbons, and Todd C. Mowry. 2022. The CoRa Tensor Compiler: Compilation for Ragged Tensors with Minimal Padding. arXiv:2110.10221 [cs.LG] https://arxiv.org/abs/2110.10221

---

*This work was completed as part of coursework for CS 521 ML Compilers at the University of Illinois Urbana-Champaign.*
