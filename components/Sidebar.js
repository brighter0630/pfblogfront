"use client";

import Link from "next/link";
import printDateMonth from "@/libs/printDateMonth";
import {
  BsBarChart,
  BsJournalText,
  BsFillGrid3X3GapFill,
  BsPeopleFill,
  BsPieChartFill,
  BsFillGearFill,
} from "react-icons/bs";
import { usePathname } from "next/navigation";

function Sidebar() {
  const pathName = usePathname();

  return (
		<div className={`flex flex-col min-h-full bg-[#AED6F1] text-black min-w-[250px] fixed bottom-0 left-0 `}>
      <div className={`flex py-5 pl-3 pr-0 mb-5 max-h-[300px]`}>
        <Link href="/">
          <div className={`mt-2 p-2 text-base md:text-xl font-bold`}>
            <span>이웃집백만장자의 배당성장주 투자</span>
          </div>
        </Link>
      </div>
      <ul className={`grid grid-flow-row mt-0 pl-5`}>
        <li
          className={`py-4 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-[--hover-menu] duration-300 ${
            pathName === "/" && "bg-[--active-menu] scale-105"
          }`}
        >
          <Link href="/" className="flex text-xl">
            <BsPieChartFill className="mx-5 text-lg my-auto" />
            <span>모델 포트폴리오</span>
          </Link>
        </li>
        <li
          className={`py-4 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-[--hover-menu] duration-300 ${
            pathName.includes("postlist") && "bg-[--active-menu] scale-105"
          }`}
        >
          <Link href="/postlist/1" className="flex text-xl">
            <BsJournalText className="mx-5 text-lg my-auto" />
						<span>투자레터</span>
          </Link>
        </li>
        <li
          className={`py-4 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-[--hover-menu] duration-300 ${
            pathName.includes("analysis") && "bg-[--active-menu] scale-105"
          }`}
        >
          <Link href="/analysis/AAPL/pc/3months" className="flex text-xl">
            <BsFillGrid3X3GapFill className="mx-5 text-lg my-auto" />
						<span>기업분석</span>
          </Link>
        </li>
        {/* <li className="py-4 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-[#596a8b] duration-300">
          <Link href="/community" className="flex text-xl">
            <BsPeopleFill className="mx-5 text-lg my-auto" />
            커뮤니티
          </Link>
        </li> */}
        <li
          className={`py-4 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-[--hover-menu] duration-300 ${
            pathName.includes("transactionhistory") && "bg-[--active-menu] scale-105"
          }`}
        >
          <Link
            href={`/transactionhistory/bydate/${printDateMonth(
              new Date(new Date().getFullYear(), new Date().getMonth(), 1)
            )}`}
            className="flex text-xl"
          >
            <BsBarChart className="mx-5 text-lg my-auto" />
						<span>거래내역</span>
          </Link>
        </li>
        <li
          className={`py-4 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-[--hover-menu] duration-300 ${
            pathName.includes("admin") && "bg-[--active-menu] scale-105"
          }`}
        >
          <Link href="/admin" className="flex text-xl">
            <BsFillGearFill className="mx-5 text-lg my-auto" />
						<span>관리자</span>
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;
