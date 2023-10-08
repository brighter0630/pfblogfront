"use client";

import React, { useState } from "react";
import {
  BsFillBellFill,
  BsFillEnvelopeFill,
  BsPersonCircle,
  BsSearch,
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
    <div className="flex my-3 px-5 gap-3 justify-stretch">
      <div className="flex flex-row ">
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
          className="icon my-auto cursor-pointer mx-3"
          onClick={() => searchClicked()}
        />
      </div>
      <div className="grid grid-flow-col gap-4 cursor-pointer mx-0 max-w-[200px]">
        <BsFillBellFill className="m-auto" />
        <BsFillEnvelopeFill className="m-auto" />
        <BsPersonCircle className="m-auto" />
      </div>
    </div>
  );
}

export default Header;
