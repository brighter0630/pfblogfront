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
    try {
      const { metaData } = getPostBySlug(file);
      if (metaData.published) {
        posts.push({ ...metaData, slug: file });
      }
    } catch (error) {
      console.error("Error in Pushing MetaData In", error);
    }
  }
  return posts;
};
