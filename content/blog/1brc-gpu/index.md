# Motivation 

The 1 Billion Row Challenge seems like it should be a good fit for GPU acceleration. A billion independent rows, each requiring the same operations; parse a station name, parse a temperature, update some running statistics. It's the kind of parallel workload GPUs are built for. However, when taking a look at previous approaches, GPU solutions tend to be much slower than CPU solutions[^1]. We set out to reduce the performance gap between CPU and GPU solutions.

## The Challenge

[The 1 Billion Row Challenge](https://github.com/gunnarmorling/1brc) is straightforward: read a ~13 GB text file containing one billion rows of weather data in the format `station_name;temperature`, then calculate the minimum, average, and maximum temperature for each unique station.

The fastest CPU result reported on the official repository (1.535 seconds) runs on 8 cores of an AMD EPYC 7502P, 128 GB RAM, and at least two NVMe SSDs.

## Why GPUs Have Traditionally Been Slower

The natural assumption is that GPUs should excel here. But traditional GPU approaches run into a fundamental problem: getting data to the GPU is slow.

The conventional pipeline requires the CPU to read the file from disk into system RAM, then copy that data to the GPU over PCIe. For a 13 GB file, this transfer takes several seconds before any processing can begin. The GPU ends up sitting idle, waiting for data. Since computation is extremely simple for this challenge, the data copy overhead dominates the execution time.

There's also a memory problem. Many consumer GPUs have 8-12 GB of VRAM. The previous GPU state-of-the-art attempted to load all data into GPU memory at once, which caused out-of-memory errors on anything but large datacenter GPUs.

## Our Approach

The core idea is to remove the CPU from the data path. Direct Memory Access (DMA) APIs allow storage devices to send data directly to the GPU without routing through system RAM.

We used Microsoft DirectStorage, which has a few advantages for our purposes. Unlike NVIDIA's GPUDirect Storage (which requires enterprise GPUs), DirectStorage works on consumer graphics cards. It also bypasses the filesystem and works directly with NVMe queues, which reduces overhead.

### Streaming Architecture

Rather than loading the entire file at once, we stream data in chunks. We set up 16 DirectStorage queues to read from the SSD, writing to 32 GPU buffers that get recycled as processing completes. This avoids the memory issues that affected previous GPU solutions.

### Kernel Design

On the GPU side, we made several standard optimizations: launching kernels asynchronously to overlap I/O with computation, reading in 128-byte blocks for cache alignment, parsing temperatures as integers to avoid floating-point operations, and aggregating results in shared memory before writing to global memory.

The final step is simple: we transfer three measurements per station (around 400 stations total) back to the CPU for sorting and output formatting. Since there's so little data to transfer, this step has very low overhead

## Results

| Dataset Size | CPU SOTA | Previous GPU SOTA | Ours (SSD) | Ours (RAMDisk) |
|--------------|----------|-------------------|------------|----------------|
| 100 million  | 0.572s   | unk               | 0.747s     | 0.483s         |
| 500 million  | 1.427s   | unk               | 1.520s     | 0.913s         |
| 1 billion    | 1.535s   | 16.800s           | 2.486s     | 1.515s         |

Reading from an SSD, we completed the full billion rows in 2.486 seconds—roughly 7x faster than the previous GPU state-of-the-art. Using a RAMDisk (which provides bandwidth closer to what the official CPU benchmark has with its multiple SSDs), we hit 1.515 seconds, which matches the CPU result.

These tests ran on consumer hardware: a gaming laptop with an RTX 3070 Ti and a desktop with an RTX 3060. The streaming approach also meant we didn't run into the out-of-memory errors that affected previous GPU solutions at larger dataset sizes.

## What We Learned

The most notable finding is that GPU compute isn't the bottleneck. Our performance is almost entirely limited by how fast we can read from the storage medium. This explains why the RAMDisk results are so much better and why DirectStorage provides such an impressive performance uplift.

This suggests there's room for improvement on server hardware with faster storage. But it also highlights that for I/O-bound problems like this one, optimizing compute only gets you so far.

A few other observations:

- DirectStorage and similar DMA APIs are probably underutilized for data processing workloads. They were designed for game asset loading, but the same principles apply. 
- Streaming data in chunks, rather than loading everything at once, avoids memory limits and works well with the asynchronous nature of GPU execution.
- Consumer hardware can be competitive with server-class CPU solutions for the right workloads, which is encouraging.

## Availability

The code is available on [GitHub](https://github.com/devksingh4/1brc-gpu). It requires Windows 11, an NVMe SSD, and a DirectStorage-compatible GPU.

[^1]: See [this work by Taeksang Peter Kim](https://tspeterkim.github.io/posts/cuda-1brc) or [NVIDIA's cuDF implementation](https://developer.nvidia.com/blog/processing-one-billion-rows-of-data-with-rapids-cudf-pandas-accelerator-mode/).


---

*This work was completed as part of coursework for [CS 598: Advanced Performance Engineering](https://prontolab.github.io/598APE) at the University of Illinois Urbana-Champaign.*
