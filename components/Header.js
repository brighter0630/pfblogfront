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
import ModalBackground from '@/components/ModalBackground';

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
		<div className="px-1 md:px-2 my-1 md:my-3 flex mx-auto"> 
			<div onClick={() => setShowMenu(!showMenu)} className={`my-auto cursor-pointer flex float-left px-0 md:px-1`} >
				<span className="collapse md:visible md:min-w-[50px]">메뉴</span>
				<BiMenu className="text-2xl my-auto" />
			</div>
			<div className={`${showMenu ? 'visible' : 'hidden'}`} onClick={() => setShowMenu(false)} >
				<ModalBackground />
			</div>
			<aside className={`h-screen ${showMenu ? 'visible absolute left-0 top-0 z-20': 'hidden'}`} onMouseLeave={() => setShowMenu(false)} onClick={() => setTimeout(() => setShowMenu(false), 500)} >
				<Sidebar />
			</aside>
			<div className="flex-row flex my-2 md:my-4">
				<label htmlFor="searchTicker"> 
					<input
						type="search"
						onChange={(e) => setTicker(e.target.value)}
						onClick={(e) => (e.target.value = "")}
						onKeyDown={searchHandler}
						placeholder="티커를 입력하세요. (ex: AAPL)"
						autoComplete="off"
						id="searchTicker"
						className="outline-0 rounded-md ml-2 md:ml-5 text-xs md:text-base opacity-90 p-2 md:p-4 w-30 lg:w-60"
					/>
				</label>
				<BsSearch
					className="cursor-pointer mx-3 my-auto"
					onClick={() => searchClicked()}
				/>
			</div>
			<div className="my-auto">
			{status === "unauthenticated" ? (
				<div className="flex flex-row cursor-pointer mx-1" >
					<LoginButtonGoogle title="로그인" width="90" height="50" fontSize="15" iconSize="20" />
					<LoginButtonNaver title="로그인" width="90" height="50" fontSize="15" iconSize="20" />
					{/* <LoginButtonKakao title="카카오 로그인" /> 카카오에서 승인 거절...ㅠㅠ */}
				</div>
			) : (
				<div className="flex flex-row cursor-pointer collapse md:visible mx-0 max-w-0 md:max-w-none md:w-40">
					<UserGreeting session={session} />
					<div
						className="flex w-8 lg:w-24 p-1 lg:p-2 m-auto text-sm lg:text-xl transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-gray-400 hover:rounded-lg hover:opacity-50 hover:text-white"
						onClick={() => signOut()}
					>
						<div className="hidden lg:flex text-xs lg:text-sm p-1 px-2 w-20">
							<span className="w-14">로그아웃</span>
						</div>
						<GrLogout className="m-auto text-xl md:text-3xl" />
					</div>
				</div>
			)}
			</div>
		</div>
  );
}

export default Header;
