"use client";

import { usePathname } from "next/navigation";
import Title from "@/components/BlogComponents/Title";
import TagList from "@/components/BlogComponents/TagList";
import Footer from "@/components/BlogComponents/Footer";
import BasicFrame from "@/components/BasicFrame";
import Script from "next/script";

function PostLayout({ children }) {
  const pathName = usePathname();
  const { blogMeta } = require(`../post/${pathName.split("/")[2]}/page`);

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=G-NHT517M9G5`}
      />
      <Script id="google-analytics">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
 
          gtag('config', 'G-NHT517M9G5');
        `}
      </Script>
      <div className=" text-gray-800 text-opacity-85 prose p-3 md:p-5 max-w-[640px] mx-auto">
        <Title text={blogMeta.title} />
        <div className="grid grid-flow-col justify-between">
          <TagList list={blogMeta.tags} />
          <span className="my-auto">{blogMeta.author}</span>
        </div>
        <BasicFrame>{blogMeta.metaDesc}</BasicFrame>
        {children}
        <Footer list={blogMeta.tags} />
      </div>
    </>
  );
}

export default PostLayout;
