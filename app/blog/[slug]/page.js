import { getPostBySlug } from "@/app/apis/getPosts";

const getPageContent = async (slug) => {
  const { meta, content } = await getPostBySlug(decodeURIComponent(slug));
  return { meta, content };
};

export async function generateMetadata({ params }) {
  const { meta } = await getPageContent(decodeURIComponent(params.slug));

  return { title: meta.title };
}

async function Page({ params }) {
  // const { title } = await generateMetadata(decodeURIComponent(params));
  const { content } = await getPageContent(decodeURIComponent(params.slug));

  return (
    <section className="p-24 mx-52">
      <div className="container py-4 prose">{content}</div>
    </section>
  );
}

export default Page;
