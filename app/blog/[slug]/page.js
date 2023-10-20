import { allPosts } from "contentlayer/generated";
import { MdxTemplete } from "@/components/MdxTemplete";
import Head from "next/head";
import BasicFrame from "@/components/BasicFrame";
import Link from "next/link";
import { notFound } from "next/navigation";

async function getDocFromParams(slug) {
  const doc = allPosts.find(
    (doc) => doc.slugAsParams === decodeURIComponent(slug)
  );

  if (!doc) {
    notFound();
  }

  return doc;
}

const Page = async ({ params }) => {
  const doc = await getDocFromParams(params.slug);
  return (
    <>
      <Head>
        <title>{doc.title}</title>
        <meta http-equiv="Title" content={doc.title} />
        <meta name="description" content={doc.metaDesc} />
        <meta name="keywords" content={[...doc.tags]} />
        <meta name="robots" content="index, follow" />
        <meta charset="UTF-8" />
        <meta http-equiv="Copyright" content="배당성장주" />
        <meta http-equiv="Author" content="이웃집백만장자" />
        <meta property="og:title" content={doc.title} />
        <meta property="og:description" content={doc.metaDesc} />
      </Head>
      <article className="my-4 p-4 mx-auto max-w-screen-sm">
        <h1 className="font-bold text-zinc-950 text-3xl pl-10 py-6 mx-auto ">
          {doc.title}
        </h1>
        <div className="flex flex-col justify-items-end text-right pr-2 mx-auto text-gray-800">
          <span>{doc.author}</span>
          <span>{doc.date.substring(0, 10)}</span>
          <ul></ul>
        </div>
        <div className="mx-auto">
          <BasicFrame>
            <h1 className="text-gray-700">{doc.metaDesc}</h1>
          </BasicFrame>
        </div>
        <div className="mx-auto py-4">
          <MdxTemplete code={doc.body.code} />
        </div>
        <div className="flex flex-row mb-1">
          {doc.tags.map((tag, i) => (
            <Link key={i} href={`/postlist/tag/${tag}/1`} replace={true}>
              <span className="p-1 text-sm text-gray-300 bg-slate-900 rounded-md m-1">
                #{tag}
              </span>
            </Link>
          ))}
        </div>
      </article>
    </>
  );
};

export default Page;
