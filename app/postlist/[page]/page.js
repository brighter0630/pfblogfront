import Pagination from "@/components/Pagination";
import PostListing from "@/components/PostListing";
import { getAllPostsMeta } from "@/libs/getPosts";
import Head from "next/head";

async function EachPage({ params }) {
  const allPostMeta = await getAllPostsMeta();
  const { page } = params;
  const postsMeta = allPostMeta.slice(
    process.env.POSTSPERPAGE * (page - 1),
    process.env.POSTSPERPAGE * page
  );

  return (
    <div className="">
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
      <PostListing postsMeta={postsMeta} />
      <Pagination numOfPosts={allPostMeta.length} />
    </div>
  );
}

export default EachPage;
