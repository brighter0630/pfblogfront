"use client";

import React, { useEffect, useState } from "react";
import { BsSearch } from "react-icons/bs";
import { GrLogout } from "react-icons/gr";
import { usePathname, useRouter } from "next/navigation";
import { signOut, useSession } from "next-auth/react";
import LoginButtonNaver from "./LoginButtonNaver";
import LoginButtonGoogle from "./LoginButtonGoogle";
// import LoginButtonKakao from "./LoginButtonKakao";
import UserGreeting from "./UserGreeting";

export function searchPathFinder(ticker, pathName) {
  if (pathName.includes("analysis")) {
    const urlParticles = pathName.split("/");
    urlParticles[2] = ticker;
    return `${urlParticles.join("/")}`;
  } else {
    return `/analysis/${ticker}/pc/3months`;
  }
}

export function cursorToSearchBox(e, pathName) {
  if (
    e.key !== "Escape" &&
    (pathName.includes("analysis") ||
      pathName.includes("transactionhistory") ||
      pathName === "/")
  ) {
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
      window.addEventListener("keydown", (e) => cursorToSearchBox(e, pathName));
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

  return (
    <div className="flex my-3 mx-auto px-1 gap-3 h-14">
      <div className="mx-auto flex flex-row">
        <div className="flex flex-row my-auto">
          <label htmlFor="searchTicker">
            <input
              type="search"
              id="searchTicker"
              onChange={(e) => setTicker(e.target.value)}
              onClick={(e) => (e.target.value = "")}
              onKeyDown={searchHandler}
              placeholder="티커를 입력하세요. (ex: AAPL)"
              autoComplete="off"
              className="outline-0 rounded-md ml-5 w-96 h-10 opacity-80 p-4"
            />
          </label>
          <BsSearch
            className="icon my-auto cursor-pointer mx-3"
            onClick={() => searchClicked()}
          />
        </div>
        {status === "unauthenticated" ? (
          <div className="grid grid-flow-col gap-4 cursor-pointer mx-0 max-w-[200px]">
            <LoginButtonGoogle title="로그인" width="90" height="50" fontSize="15" iconSize="20" />
            <LoginButtonNaver title="로그인" width="90" height="50" fontSize="15" iconSize="20" />
            {/* <LoginButtonKakao title="카카오 로그인" /> 카카오에서 승인 거절...ㅠㅠ */}
          </div>
        ) : (
          <div className="grid grid-flow-col gap-4 cursor-pointer mx-0 max-w-[200px]">
            <UserGreeting session={session} />
            <div
              className="m-auto flex gap-2 border-4"
              onClick={() => signOut()}
            >
              <span className="text-bold  p-1 px-2 rounded-lg">Logout</span>
              <GrLogout className="text-xl m-auto" />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Header;
