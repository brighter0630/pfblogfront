import Pagination from "@/components/Pagination";
import PostListing from "@/components/PostListing";
import { getAllPostsMeta } from "@/libs/getPosts";

async function EachPage({ params }) {
  const allPostMeta = await getAllPostsMeta();
  const { page } = params;
  const postsMeta = allPostMeta.slice(
    process.env.POSTSPERPAGE * (page - 1),
    process.env.POSTSPERPAGE * page
  );

  return (
    <div className="">
      <PostListing postsMeta={postsMeta} />
      <Pagination numOfPosts={allPostMeta.length} />
    </div>
  );
}

export default EachPage;
