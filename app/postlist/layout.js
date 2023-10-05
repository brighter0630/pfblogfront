import Pagination from "@/components/Pagination";
import { countAllPosts } from "@/lib/getPosts";

async function BlogLayout({ children }) {
  const numOfPosts = await countAllPosts();
  return (
    <div>
      {children}
      <Pagination numOfPosts={numOfPosts} />
    </div>
  );
}

export default BlogLayout;
