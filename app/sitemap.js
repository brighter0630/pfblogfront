import { getAllPostsMeta } from "@/libs/getPostsJS";

export const baseURL = "https://dividendgrowthinvesting.co.kr";

export default async function sitemap() {
  const postsMeta = await getAllPostsMeta();
  const sitemapArray = postsMeta.map((post) => {
    return {
      url: `${baseURL}/post/${post.slug}`,
      lastModified: new Date(post.date),
      changeFrequency: "weekly",
      priority: 1,
    };
  });
  return [
    ...sitemapArray,
    {
      url: "https://dividendgrowthinvesting.co.kr/postlist/1",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.5,
    },
  ];

  //   return [
  //     {
  //       url: "https://acme.com",
  //       lastModified: new Date(),
  //       changeFrequency: "yearly",
  //       priority: 1,
  //     },
  //     {
  //       url: "https://acme.com/about",
  //       lastModified: new Date(),
  //       changeFrequency: "monthly",
  //       priority: 0.8,
  //     },
  //     {
  //       url: "https://acme.com/blog",
  //       lastModified: new Date(),
  //       changeFrequency: "weekly",
  //       priority: 0.5,
  //     },
  //   ];
}
