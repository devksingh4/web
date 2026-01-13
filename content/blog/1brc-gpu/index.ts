import { BlogPost } from "@/lib/blog";

const post: Omit<BlogPost, "content"> = {
  slug: "1brc-gpu",
  title: "GPU-accelerating the 1 Billion Row Challenge",
  excerpt:
    "How DirectStorage and DMA APIs helped us achieve a 7x speedup over previous GPU approaches, matching CPU state-of-the-art on the 1 Billion Row Challenge.",
  date: "January 13, 2026",
  tags: ["GPU", "Performance Engineering", "DirectStorage"],
  byline: "Dev Singh, Amol Shah, Yanni Zhuang",
  published: true,
};

export default post;
