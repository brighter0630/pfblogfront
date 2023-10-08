"use client";

import Link from "next/link";
import React, { useState } from "react";
import {
  BsBarChart,
  BsJournalText,
  BsFillGrid3X3GapFill,
  BsPeopleFill,
  BsPieChartFill,
  BsFillGearFill,
  BsJustify,
} from "react-icons/bs";
import { AiOutlineClose } from "react-icons/ai";
function Sidebar() {
  const [sidebar, setSidebar] = useState(true);
  return (
    <div
      className={`md:flex flex-col h-full overflow-y-auto min-w-[150px] bg-[--sidebar-color] ${
        !sidebar && "min-w-[50px]"
      }`}
    >
      <div className={`flex py-5 pl-3 pr-0 mb-5 max-h-[300px]`}>
        <Link href="/">
          <div className={`mt-2 p-2 text-xl font-bold ${!sidebar && "hidden"}`}>
            <span>이웃집백만장자의 배당성장주 투자</span>
          </div>
        </Link>
        <span className={`my-auto cursor-pointer mx-3 ${!sidebar && "hidden"}`}>
          <AiOutlineClose
            className="text-xl"
            onClick={() => setSidebar(!sidebar)}
          />
        </span>
        <div
          className="p-1 cursor-pointer"
          onClick={() => setSidebar(!sidebar)}
        >
          <BsJustify className={`my-auto text-lg ${sidebar && "hidden"}`} />
        </div>
      </div>
      <ul className={`grid grid-flow-row mt-0 ${!sidebar && "hidden"}`}>
        <li className="py-4 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-[#596a8b] duration-300">
          <Link href="/" className="flex text-xl">
            <BsPieChartFill className="mx-5 text-lg my-auto" />
            <span>대시보드</span>
          </Link>
        </li>
        <li className="py-4 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-[#596a8b] duration-300">
          <Link href="/postlist/1" className="flex text-xl">
            <BsJournalText className="mx-5 text-lg my-auto" />
            투자생각
          </Link>
        </li>
        <li className="py-4 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-[#596a8b] duration-300">
          <Link href="/analysis/AAPL/pc/3months" className="flex text-xl">
            <BsFillGrid3X3GapFill className="mx-5 text-lg my-auto" />
            기업분석
          </Link>
        </li>
        <li className="py-4 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-[#596a8b] duration-300">
          <Link href="/community" className="flex text-xl">
            <BsPeopleFill className="mx-5 text-lg my-auto" />
            커뮤니티
          </Link>
        </li>
        <li className="py-4 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-[#596a8b] duration-300">
          <Link href="/record" className="flex text-xl">
            <BsBarChart className="mx-5 text-lg my-auto" />
            거래내역
          </Link>
        </li>
        <li className="py-4 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-[#596a8b] duration-300">
          <Link href="/admin" className="flex text-xl">
            <BsFillGearFill className="mx-5 text-lg my-auto" />
            관리자
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;
