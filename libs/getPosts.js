import fs from "fs";
import path from "path";
import { compileMDX } from "next-mdx-remote/rsc";

const rootDirectory = path.join(process.cwd(), "posts");

export const getPostBySlug = async (slug) => {
  const realSlug = decodeURIComponent(slug).replace(/\.mdx$/, "");
  const filePath = path.join(rootDirectory, `${realSlug}.mdx`);

  const fileContent = fs.readFileSync(filePath, { encoding: "utf8" });

  const { frontmatter, content } = await compileMDX({
    source: fileContent,
    options: { parseFrontmatter: true },
  });
  return { meta: { ...frontmatter, slug: realSlug }, content };
};

export const countAllPosts = async () => {
  const files = fs.readdirSync(rootDirectory);
  return files.length;
};

export const getAllPostsMeta = async () => {
  const files = fs.readdirSync(rootDirectory);
  let posts = [];
  for (const file of files) {
    const { meta } = await getPostBySlug(file);
    posts.push(meta);
  }

  return getPostsSortedByDate(posts);
};

export const getPostsSortedByDate = (posts) => {
  return posts.sort((a, b) => {
    return new Date(b.date) - new Date(a.date);
  });
};

export const getPostsByTag = async (tag) => {
  const files = fs.readdirSync(rootDirectory);
  let posts = [];
  const deCodedTag = decodeURIComponent(tag);
  for (const file of files) {
    const { meta } = await getPostBySlug(file);
    if (meta.tags.includes(deCodedTag)) {
      posts.push(meta);
    }
  }

  return getPostsSortedByDate(posts);
};
