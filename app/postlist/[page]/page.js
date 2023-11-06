import Pagination from "@/components/Pagination";
import PostListing from "@/components/PostListing";
import Head from "next/head";
import { getAllPostsMeta } from "@/libs/getPostsJS";

async function Page({ params }) {
  const { page } = params;
  const postsMeta = await getAllPostsMeta();
  const sortedPosts = postsMeta.sort(
    (a, b) => new Date(b.date) - new Date(a.date)
  );

  const postsMetaListing = sortedPosts.slice(
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
      <PostListing postsMeta={postsMetaListing} />
      <Pagination numOfPosts={postsMeta.length} />
    </div>
  );
}

export default Page;
