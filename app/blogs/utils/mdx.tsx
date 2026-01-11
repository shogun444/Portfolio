import { promises as fs } from "fs";
import { compileMDX } from "next-mdx-remote/rsc";
import path from "path";
export default async function singleBlog(slug: string) {
  try {
    const blogs = await fs.readFile(
      path.join(process.cwd(), `data`, `${slug}.mdx`),
      "utf-8",
    );
    const { content, frontmatter } = await compileMDX<{ title: string }>({
      source: blogs,
      options: { parseFrontmatter: true },
    });
    return { content, frontmatter };
  } catch (error) {
    return null;
  }
}

export const GetBlogs = async () => {
  const files = await fs.readdir(path.join(process.cwd(), "data"));
  const allblogs = await Promise.all(
    files
      .filter((file) => file.endsWith(".mdx"))
      .map(async (file) => {
        const slug = file.replace(/\.mdx$/, "");
        const meta = await GetFrontMatter(slug);
        return { slug, ...(meta ?? {}) };
      }),
  );
  return allblogs;
};

async function GetFrontMatter(slug: string) {
  const singleBlog = await fs.readFile(
    path.join(process.cwd(), "data", `${slug}.mdx`),
    "utf-8",
  );
  if (!singleBlog) return null;
  const { frontmatter } = await compileMDX<{ title: string , description : string , image : string , date: string }>({
    source: singleBlog,
    options: { parseFrontmatter: true },
  });
  return frontmatter;
}
