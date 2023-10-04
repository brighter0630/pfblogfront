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
function Sidebar({ sidebarToggle, openSidebar }) {
  return (
    <aside
      id="sidebar"
      className={sidebarToggle === true ? "sidebar-responsive" : ""}
    >
      <div className="sidebar-title">
        <Link href="/">
          <div className="sidebar-brand flex">
            <span>이웃집백만장자의 배당성장주 투자</span>
          </div>
        </Link>
        <span className="icon close-icon" onClick={openSidebar}>
          <AiOutlineClose className="icon" />
        </span>
      </div>
      <ul className="sidebar-list">
        <li className="sidebar-list-item">
          <Link href="/" className="flex">
            <BsPieChartFill className="icon" />
            대시보드
          </Link>
        </li>
        <li className="sidebar-list-item">
          <Link href="/blog" className="flex">
            <BsJournalText className="icon" />
            투자생각
          </Link>
        </li>
        <li className="sidebar-list-item">
          <Link href="/analysis/AAPL/pc/3months" className="flex">
            <BsFillGrid3X3GapFill className="icon" />
            기업분석
          </Link>
        </li>
        <li className="sidebar-list-item">
          <Link href="/community" className="flex">
            <BsPeopleFill className="icon" />
            커뮤니티
          </Link>
        </li>
        <li className="sidebar-list-item">
          <Link href="/record" className="flex">
            <BsBarChart className="icon" />
            거래내역
          </Link>
        </li>
        <li className="sidebar-list-item">
          <Link href="/admin" className="flex">
            <BsFillGearFill className="icon" />
            관리자
          </Link>
        </li>
      </ul>
    </aside>
  );
}

export default Sidebar;
