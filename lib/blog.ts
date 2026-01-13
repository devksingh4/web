import fs from "fs";
import path from "path";

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  tags: string[];
  byline: string;
  published: boolean;
}

const postsDirectory = path.join(process.cwd(), "content", "blog");

function getBlogPostsData(): BlogPost[] {
  // Check if directory exists
  if (!fs.existsSync(postsDirectory)) {
    return [];
  }

  const folders = fs.readdirSync(postsDirectory, { withFileTypes: true });
  const blogFolders = folders.filter((dirent) => dirent.isDirectory());

  const allPostsData = blogFolders.map((folder) => {
    const slug = folder.name;
    const folderPath = path.join(postsDirectory, slug);

    // Check if index.ts and index.md exist
    const indexTsPath = path.join(folderPath, "index.ts");
    const indexMdPath = path.join(folderPath, "index.md");

    if (!fs.existsSync(indexTsPath) || !fs.existsSync(indexMdPath)) {
      return null;
    }

    try {
      // Use require for synchronous import
      // eslint-disable-next-line @typescript-eslint/no-require-imports
      const metadataModule = require(`@/content/blog/${slug}/index.ts`);
      const metadata = metadataModule.default;

      // Read the markdown content
      const content = fs.readFileSync(indexMdPath, "utf8");

      // Combine metadata and content
      return {
        ...metadata,
        content,
      } as BlogPost;
    } catch (error) {
      console.error(`Error loading blog post ${slug}:`, error);
      return null;
    }
  });

  return allPostsData.filter((post): post is BlogPost => post !== null);
}

export function getAllBlogPosts(): BlogPost[] {
  const posts = getBlogPostsData();
  return posts
    .filter((post) => post.published)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export function getBlogPost(slug: string): BlogPost | undefined {
  const posts = getBlogPostsData();
  return posts.find((post) => post.slug === slug && post.published);
}

export function getBlogPostSlugs(): string[] {
  const posts = getBlogPostsData();
  return posts.filter((post) => post.published).map((post) => post.slug);
}
