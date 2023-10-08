"use client";

import React, { useState } from "react";
import {
  BsFillBellFill,
  BsFillEnvelopeFill,
  BsPersonCircle,
  BsSearch,
  BsJustify,
} from "react-icons/bs";
import { usePathname, useRouter } from "next/navigation";

function Header() {
  const [ticker, setTicker] = useState("");
  const router = useRouter();
  const pathName = usePathname();
  const searchHandler = (e) => {
    if (e.key === "Enter") {
      const urlParticles = pathName.split("/");
      urlParticles[2] = ticker;
      router.push(`${urlParticles.join("/")}`);
    }
  };
  const searchClicked = () => {
    if (ticker) {
      // 나중에 REGEX로 바꿔야하는데....
      const urlParticles = pathName.split("/");
      urlParticles[2] = ticker;
      router.push(`${urlParticles.join("/")}`);
    }
  };
  const moveToX0 = () => {
    document.documentElement.scrollTop = 0;
    document.documentElement.scrollLeft = 0;
  };

  return (
    <div className="grid grid-flow-col w-auto my-3">
      <div className="hidden">
        <BsJustify className="icon" id="open-sidebar-icon" />
      </div>
      <div className="header-left flex flex-row gap-3">
        <label htmlFor="searchTicker">
          <input
            type="search"
            id="searchTicker"
            onChange={(e) => setTicker(e.target.value)}
            onKeyDown={searchHandler}
            placeholder="티커를 입력하세요. (ex: AAPL)"
            autoComplete="off"
            onFocus={moveToX0}
            className="outline-0 rounded-md ml-5 w-96 h-10 opacity-80 p-4"
          />
        </label>
        <BsSearch
          className="icon my-auto cursor-pointer"
          onClick={() => searchClicked()}
        />
      </div>
      <div className="grid grid-flow-col gap-0 justify-items-end cursor-pointer">
        <BsFillBellFill className="my-auto" />
        <BsFillEnvelopeFill className="my-auto" />
        <BsPersonCircle className="my-auto" />
      </div>
    </div>
  );
}

export default Header;
