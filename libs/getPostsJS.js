import fs from "fs";
import path from "path";

const rootDirectory = path.join(process.cwd(), "app", "post");

export const getPostBySlug = (slug) => {
  const realSlug = decodeURIComponent(slug);
  const { blogMeta } = require(`../app/post/${realSlug}/page`);

  return { blogMeta };
};

export const getAllPostsMeta = async () => {
  try {
    const files = fs
      .readdirSync(rootDirectory)
      .filter((file) => !file.includes("layout.js"));

    let posts = [];
    for (const file of files) {
      try {
        const { blogMeta } = getPostBySlug(file);
        if (blogMeta.published) {
          posts.push({ ...blogMeta, slug: file });
        }
      } catch (error) {
        console.error("Error in Pushing blogMeta In", error);
      }
    }
    return posts;
  } catch (error) {
    console.error("Failed Fetching Post Data", error);
  }
};
