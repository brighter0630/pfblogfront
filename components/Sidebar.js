import Link from "next/link";
import React from "react";
import {
  BsBarChart,
  BsJournalText,
  BsFillGrid3X3GapFill,
  BsPeopleFill,
  BsPieChartFill,
  BsFillGearFill,
} from "react-icons/bs";
import { AiOutlineClose } from "react-icons/ai";
function Sidebar() {
  return (
    <div className="flex flex-col h-full overflow-y-auto min-w-[300px] bg-[#263043]">
      <div className="flex py-5 pl-3 pr-0 mb-5 max-h-[300px]">
        <Link href="/">
          <div className="mt-2 p-2 text-xl font-bold">
            <span>이웃집백만장자의 배당성장주 투자</span>
          </div>
        </Link>
        <span className="icon close-icon">
          <AiOutlineClose className="icon" />
        </span>
      </div>
      <ul className="grid grid-flow-row gap-10 mt-0 ml-5">
        <li className="">
          <Link href="/" className="flex text-xl">
            <BsPieChartFill className="mx-5 text-lg my-auto" />
            <span>대시보드</span>
          </Link>
        </li>
        <li className="">
          <Link href="/postlist/1" className="flex text-xl">
            <BsJournalText className="mx-5 text-lg my-auto" />
            투자생각
          </Link>
        </li>
        <li className="">
          <Link href="/analysis/AAPL/pc/3months" className="flex text-xl">
            <BsFillGrid3X3GapFill className="mx-5 text-lg my-auto" />
            기업분석
          </Link>
        </li>
        <li className="">
          <Link href="/community" className="flex text-xl">
            <BsPeopleFill className="mx-5 text-lg my-auto" />
            커뮤니티
          </Link>
        </li>
        <li className="">
          <Link href="/record" className="flex text-xl">
            <BsBarChart className="mx-5 text-lg my-auto" />
            거래내역
          </Link>
        </li>
        <li className="">
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
