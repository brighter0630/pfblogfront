import PostListing from "@/components/PostListing";
import { getPostsByTag } from "@/lib/getPosts";

async function EachPageByTag({ params }) {
  const { tag, page } = params;
  const deCodedTag = decodeURIComponent(tag);
  const allPostMeta = await getPostsByTag(deCodedTag);
  const postsMeta = allPostMeta.slice(
    process.env.POSTSPERPAGE * (page - 1),
    process.env.POSTSPERPAGE * page
  );

  return <PostListing postsMeta={postsMeta} />;
}

export default EachPageByTag;
