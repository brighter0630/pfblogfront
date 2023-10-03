import fs from "fs";
import matter from "gray-matter";
import Link from "next/link";

export const getPostsData = () => {
  const files = fs
    .readdirSync("./app/posts")
    .filter((file) => file !== "images");
  const posts = files.map((fileName) => {
    const slug = fileName.replace(".md", "");
    const readFile = fs.readFileSync(`./app/posts/${fileName}`, "utf-8");
    const { data: frontmatter } = matter(readFile);

    return {
      slug,
      frontmatter,
    };
  });

  return {
    posts,
  };
};

function Blog() {
  const { posts } = getPostsData();
  return (
    <div className="grid grid-cols-1 mx-auto max-w-3xl p-4 md:p-0 min-w-[720px]">
      {posts.map(({ slug, frontmatter }) => (
        <div
          key={slug}
          className="m-4 rounded-sm border-b-2 border-b-stone-300"
        >
          <Link href={`/blog/${encodeURIComponent(slug)}`}>
            <h1 className="p-4 font-bold text-lg text-gray-900">
              {frontmatter.title} <span className="text-sm"></span>
            </h1>
            <div className="grid grid-rows-2">
              <span className="text-right mr-10  md:mr-10 font-light text-xs text-gray-400">
                {frontmatter.date.substring(0, 4)}년{" "}
                {frontmatter.date.substring(5, 7)}월{" "}
                {frontmatter.date.substring(8, 10)}일
              </span>
              <span className="font-light text-xs text-gray-400 text-right mr-10 md:mr-10">
                by {frontmatter.author}
              </span>
            </div>
            <h3 className="p-6 font-sm text-sm">{frontmatter.metaDesc}</h3>
          </Link>
          <div className="flex flex-row">
            {frontmatter.tags.map((tag, i) => (
              <span
                key={i}
                className="p-1 text-sm text-gray-300 bg-slate-900 rounded-md m-1"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default Blog;
