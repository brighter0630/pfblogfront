import Pagination from "@/components/Pagination";
import { countAllPosts } from "@/lib/getPosts";

async function BlogLayout({ children }) {
  const numOfPosts = await countAllPosts();
  return <div>{children}</div>;
}

export default BlogLayout;
