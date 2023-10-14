"use client";

import React, { useState } from "react";
import { BsFillBellFill, BsFillEnvelopeFill, BsSearch } from "react-icons/bs";
import { GrLogout } from "react-icons/gr";
import { usePathname, useRouter } from "next/navigation";
import { signOut, useSession } from "next-auth/react";
import LoginButtonNaver from "./LoginButtonNaver";
import LoginButtonGoogle from "./LoginButtonGoogle";
import LoginButtonKakao from "./LoginButtonKakao";
import UserGreeting from "./UserGreeting";

function Header() {
  const [ticker, setTicker] = useState("");
  const router = useRouter();
  const pathName = usePathname();
  const { data: session, status } = useSession();

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
    <div className="flex my-3 mx-auto px-1 gap-3 h-14">
      <div className="mx-auto flex flex-row">
        <div className="flex flex-row my-auto">
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
        {status === "unauthenticated" ? (
          <div className="grid grid-flow-col gap-4 cursor-pointer mx-0 max-w-[200px]">
            <LoginButtonGoogle title="구글 로그인" />
            <LoginButtonNaver title="네이버 로그인" />
            <LoginButtonKakao title="카카오 로그인" />
          </div>
        ) : (
          <div className="grid grid-flow-col gap-4 cursor-pointer mx-0 max-w-[200px]">
            {/* <BsFillBellFill className="m-auto" />
            <BsFillEnvelopeFill className="m-auto" /> */}
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
