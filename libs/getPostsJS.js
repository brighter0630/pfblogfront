import fs from "fs";
import path from "path";

const rootDirectory = path.join(process.cwd(), "app", "post");

export const getPostBySlug = (slug) => {
  const realSlug = decodeURIComponent(slug);
  const { metaData } = require(`../app/post/${realSlug}/page`);

  return { metaData };
};

export const getAllPostsMeta = async () => {
  const files = fs
    .readdirSync(rootDirectory)
    .filter((file) => !file.includes("layout.js"));

  let posts = [];
  for (const file of files) {
    const { metaData } = getPostBySlug(file);
    posts.push({ ...metaData, slug: file });
  }
  return posts;
};
