import PostListing from "@/components/PostListing";
import { getAllPostsMeta } from "@/lib/getPosts";
import Link from "next/link";

async function EachPage({ params }) {
  const allPostMeta = await getAllPostsMeta();
  const { page } = params;
  const postsMeta = allPostMeta.slice(
    process.env.POSTSPERPAGE * (page - 1),
    process.env.POSTSPERPAGE * page
  );
  return <PostListing postsMeta={postsMeta} />;
}

export default EachPage;
