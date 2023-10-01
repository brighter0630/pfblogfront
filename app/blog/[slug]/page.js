import fs from "fs";
import matter from "gray-matter";
import md from "markdown-it";

export async function getStaticPaths() {
  const files = fs.readdirSync("app/posts").filter((file) => file !== "images");
  const paths = files.map((fileName) => ({
    params: {
      slug: fileName.replace(".md", ""),
    },
  }));

  return {
    paths,
    fallback: false,
  };
}

export default function page({ params }) {
  const { slug } = params;
  const decodedSlug = decodeURI(decodeURIComponent(slug));
  const fileName = fs.readFileSync(`app/posts/${decodedSlug}.md`, "utf-8");
  const { data: frontmatter, content } = matter(fileName);

  return (
    <div className="prose my-12 mx-auto">
      <h1>{frontmatter.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: md().render(content) }}></div>
    </div>
  );
}
