import { BlogPost } from "@/lib/blog";

const post: Omit<BlogPost, "content"> = {
  slug: "pycora",
  title: "PyCoRa: A PyTorch implementation of CoRa Ragged Tensors",
  excerpt:
    "A PyTorch implementation of ragged tensors that reduces memory and bandwidth usage for variable-length data, avoiding the waste of traditional padding approaches.",
  date: "January 23, 2026",
  tags: ["GPU", "PyTorch", "ML Compilers"],
  byline: "Dev Singh, Yanni Zhuang",
  published: true,
};

export default post;
