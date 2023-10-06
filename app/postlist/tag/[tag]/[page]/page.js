import Pagination from "@/components/Pagination";
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

  return (
    <div>
      <div className="text-center text-xl font-extrabold underline underline-offset-4 my-5">
        <span>Tag {decodeURIComponent(tag)}</span>
      </div>
      <div>
        <PostListing postsMeta={postsMeta} />;
      </div>
      <div>
        <Pagination numOfPosts={allPostMeta.length} />
      </div>
    </div>
  );
}

export default EachPageByTag;
