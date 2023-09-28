"use client";

import React, { useState } from "react";
import Sidebar from "./sidebar";
import {
  BsFillBellFill,
  BsFillEnvelopeFill,
  BsPersonCircle,
  BsSearch,
  BsJustify,
} from "react-icons/bs";

function Header() {
  const [sidebarToggle, setSidebarToggle] = useState(false);
  const openSidebar = () => {
    setSidebarToggle(!sidebarToggle);
  };
  return (
    <>
      <header className="header">
        <div className="menu-icon" onClick={openSidebar}>
          <BsJustify className="icon" id="open-sidebar-icon" />
        </div>
        <div className="header-left">
          <BsSearch className="icon" />
        </div>
        <div className="header-right">
          <BsFillBellFill className="icon" />
          <BsFillEnvelopeFill className="icon" />
          <BsPersonCircle className="icon" />
        </div>
      </header>
      <Sidebar sidebarToggle={sidebarToggle} openSidebar={openSidebar} />
    </>
  );
}

export default Header;
