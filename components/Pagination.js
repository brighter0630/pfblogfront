"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

function Pagination({ numOfPosts }) {
  const pathName = usePathname();
  const activeIndex = pathName.split("/")[pathName.split("/").length - 1];

  const pages = [
    ...new Array(Math.ceil(numOfPosts / process.env.POSTSPERPAGE)),
  ].map((_, i) => i + 1);

  return (
    <ul className="grid grid-flow-col gap-4 max-w-[50%] text-center mx-auto my-5 justify-center">
      {pages.map((page, i) => (
        <Link key={i} href={`${page}`} replace={true}>
          <li
            className={`rounded p-1 max-w-[40px] ${
              activeIndex - 1 === i ? "bg-slate-400 text-white" : ""
            }`}
          >
            {page}
          </li>
        </Link>
      ))}
    </ul>
  );
}

export default Pagination;
