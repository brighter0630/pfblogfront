"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from 'react';
import { MdNavigateNext } from 'react-icons/md';

function TransactionPagination({ noOfData, LinesPerPage }) {
  const pathName = usePathname();
	const finalCompPosition = pathName.length - 1;
	const router = useRouter();
  const activeIndex = pathName.split("/")[pathName.split("/").length - 1];

  const pages = [
		...new Array(Math.ceil(noOfData/LinesPerPage)),
  ].map((_, i) => i + 1);

	const movePrev = () => {
		router.push(pathName.replace(/\/[^\/]*$/, '/'.concat(Math.floor(pathName.split('/')[finalCompPosition]/10-1)*10+1)));
	}
	const moveNext = () => {
		router.push(pathName.replace(/\/[^\/]*$/, '/'.concat(Math.ceil(pathName.split('/')[finalCompPosition]/10)*10+1)));
	}

  return (
		<ul className="grid grid-flow-col gap-4 max-w-[50%] text-center mx-auto my-5 justify-center">
			<MdNavigateNext className={`cursor-pointer text-lg md:text-xl my-auto rotate-180 ${pathName.split('/')[finalCompPosition] - 10 <= 0 && "hidden"}`} onClick={() => movePrev()} />
			{pages.slice(Math.floor((pathName.split('/')[finalCompPosition]-1)/10)*10, Math.ceil(pathName.split('/')[finalCompPosition]/10)*10).map((page, i) => (
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
				<MdNavigateNext className={`cursor-pointer text-lg md:text-xl my-auto ${Math.ceil(pathName.split('/')[finalCompPosition]/10)*10 >= pages.length && "hidden"}`} onClick={() => moveNext()} />
		</ul>
  );
}

export default TransactionPagination;
