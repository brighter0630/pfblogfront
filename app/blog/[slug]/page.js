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
    <section className="p-5 mx-5">
      <h1 className="font-bold text-zinc-950 text-3xl py-6">{meta.title}</h1>
      <div className="flex flex-col justify-items-end text-right pr-2">
        <span>{meta.author}</span>
        <span>{meta.date}</span>
        <ul></ul>
      </div>
      <BasicFrame>
        <h1>{meta.metaDesc}</h1>
      </BasicFrame>
      <div className="container mx-auto py-4 prose">{content}</div>
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
