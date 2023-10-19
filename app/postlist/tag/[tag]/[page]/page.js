import Pagination from "@/components/Pagination";
import PostListing from "@/components/PostListing";
import { getPostsByTag } from "@/libs/getPosts";
import { allPosts } from "contentlayer/generated";
import Head from "next/head";

async function EachPageByTag({ params }) {
  const { tag, page } = params;
  const deCodedTag = decodeURIComponent(tag);
  const allPostMeta = allPosts.filter((post) => post.tags.includes(deCodedTag));
  const postsMeta = allPostMeta.slice(
    process.env.POSTSPERPAGE * (page - 1),
    process.env.POSTSPERPAGE * page
  );

  return (
    <div>
      <Head>
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://dividendgrowthinvesting.co.kr"
        />
        <meta property="og:title" content="이웃집백만장자 투자 이야기" />
        <meta
          property="og:description"
          content="배당성장주 투자에 대한 철학과 기업 이야기."
        />
      </Head>
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
