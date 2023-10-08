import BasicFrame from "@/components/BasicFrame";
import { getPostBySlug } from "@/libs/getPosts";
import Link from "next/link";

const getPageContent = async (slug) => {
  const { meta, content } = await getPostBySlug(decodeURIComponent(slug));
  return { meta, content };
};

export async function generateMetadata({ params }) {
  const { meta } = await getPageContent(decodeURIComponent(params.slug));

  return { title: meta.title };
}

async function Page({ params }) {
  const { meta, content } = await getPageContent(
    decodeURIComponent(params.slug)
  );

  return (
    <section className="my-4 p-4 mx-auto max-w-screen-sm">
      <h1 className="font-bold text-zinc-950 text-3xl pl-10 py-6 mx-auto ">
        {meta.title}
      </h1>
      <div className="flex flex-col justify-items-end text-right pr-2 mx-auto">
        <span>{meta.author}</span>
        <span>{meta.date}</span>
        <ul></ul>
      </div>
      <div className="mx-auto">
        <BasicFrame>
          <h1>{meta.metaDesc}</h1>
        </BasicFrame>
      </div>
      <div className="mx-auto py-4 prose">{content}</div>
      <div className="flex flex-row mb-1">
        {meta.tags.map((tag, i) => (
          <Link key={i} href={`/postlist/tag/${tag}/1`} replace={true}>
            <span className="p-1 text-sm text-gray-300 bg-slate-900 rounded-md m-1">
              #{tag}
            </span>
          </Link>
        ))}
      </div>
    </section>
  );
}

export default Page;
