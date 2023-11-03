"use client";

import React, { useEffect, useState } from "react";
import { BsSearch } from "react-icons/bs";
import { GrLogout } from "react-icons/gr";
import { BiMenu } from 'react-icons/bi';
import { usePathname, useRouter } from "next/navigation";
import { signOut, useSession } from "next-auth/react";
import LoginButtonNaver from "./LoginButtonNaver";
import LoginButtonGoogle from "./LoginButtonGoogle";
import UserGreeting from "./UserGreeting";
import Sidebar from '@/components/Sidebar';

export function searchPathFinder(ticker, pathName) {
  if (pathName.includes("analysis")) {
    const urlParticles = pathName.split("/");
    urlParticles[2] = ticker;
    return `${urlParticles.join("/")}`;
  } else {
    return `/analysis/${ticker}/pc/3months`;
  }
}

export function cursorToSearchBox(e) {
  if (e.key !== "Escape") {
    document.getElementById("searchTicker").focus();
  } else if (e.key === "Escape") {
    document.getElementById("searchTicker").blur();
  }
}

function Header() {
  const [ticker, setTicker] = useState("");
  const pathName = usePathname();
  const { data: session, status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (window !== undefined) {
			if(pathName.includes('analysis') || pathName.includes('transactionHistory') || pathName === '/') {
				window.addEventListener("keydown", cursorToSearchBox);
			} else {
				window.removeEventListener('keydown', cursorToSearchBox);
			}
    }
  }, [pathName]);

  const searchHandler = (e) => {
    if (e.key === "Enter") {
      document.getElementById("searchTicker").blur();
      router.push(searchPathFinder(ticker, pathName));
      e.target.value = "";
    }
  };
  const searchClicked = () => {
    if (ticker) {
      router.push(searchPathFinder(ticker, pathName));
      setTicker(""); // 효과가 있는 지는 모름.
    }
  };
	const [showMenu, setShowMenu] = useState(false);

  return (
    <div className="flex my-3 mx-auto px-1 min-w-full">
      <div className="mx-auto flex flex-row">
				<div onClick={() => setShowMenu(!showMenu)} className={`m-auto justify-center cursor-pointer flex min-w-[35px] md:min-w-[75px] px-0 md:px-1`} >
					<span className="collapse max-w-0 md:max-w-none md:visible">메뉴</span>
					<BiMenu className="text-2xl my-auto" />
				</div>
				<aside className={`h-screen ${showMenu ? 'visible absolute left-0 top-0 z-10': 'hidden'}`} onMouseLeave={() => setShowMenu(false)} onClick={() => setTimeout(() => setShowMenu(false), 500)} >
					<Sidebar />
				</aside>
        <div className="flex flex-row my-auto min-w-[125px] md:min-w-[200px] lg:min-w-[300px] w-fit">
          <label htmlFor="searchTicker">
            <input
              type="search"
              id="searchTicker"
              onChange={(e) => setTicker(e.target.value)}
              onClick={(e) => (e.target.value = "")}
              onKeyDown={searchHandler}
              placeholder="티커를 입력하세요. (ex: AAPL)"
              autoComplete="off"
              className="outline-0 rounded-md ml-2 md:ml-5 opacity-80 p-2 md:p-4"
            />
          </label>
          <BsSearch
            className="icon my-auto cursor-pointer mx-3"
            onClick={() => searchClicked()}
          />
        </div>
        {status === "unauthenticated" ? (
          <div className="flex flex-row cursor-pointer mx-1 collapse invisible max-w-0 md:max-w-none md:visible">
            <LoginButtonGoogle title="로그인" width="90" height="50" fontSize="15" iconSize="20" />
            <LoginButtonNaver title="로그인" width="90" height="50" fontSize="15" iconSize="20" />
            {/* <LoginButtonKakao title="카카오 로그인" /> 카카오에서 승인 거절...ㅠㅠ */}
          </div>
        ) : (
          <div className="grid grid-flow-col gap-4 cursor-pointer mx-0 w-24 md:w-32">
            <UserGreeting session={session} />
            <div
              className="collapse invisible max-w-0 md:max-w-none md:visible m-auto flex gap-2 border-4 text-sm md:text-xl"
              onClick={() => signOut()}
            >
              <span className="collapse md:visible text-bold p-1 px-2 rounded-lg">Logout</span>
              <GrLogout className="m-auto" />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Header;
