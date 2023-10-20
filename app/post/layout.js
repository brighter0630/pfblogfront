"use client";

import { usePathname } from "next/navigation";
import Title from "@/components/BlogComponents/Title";
import TagList from "@/components/BlogComponents/TagList";
import Footer from "@/components/BlogComponents/Footer";
import BasicFrame from "@/components/BasicFrame";
import Head from "next/head";
import Script from "next/script";

function PostLayout({ children }) {
  const pathName = usePathname();
  const { metaData } = require(`../post/${pathName.split("/")[2]}/page`);

  return (
    <>
      <Head>
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://dividendgrowthinvesting.co.kr"
        />
        <meta property="og:title" content={metaData.title} />
        <meta property="og:description" content={metaData.metaDesc} />
      </Head>
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
      <div className=" text-gray-800 text-opacity-75 prose p-5 max-w-[640px]">
        <Title text={metaData.title} />
        <TagList list={metaData.tags} />
        <BasicFrame>{metaData.metaDesc}</BasicFrame>
        {children}
        <Footer list={metaData.tags} />
      </div>
    </>
  );
}

export default PostLayout;
