"use client";

import BasicFrame from "@/components/BasicFrame";
import LoginButtonGoogle from "@/components/LoginButtonGoogle";
import LoginButtonKakao from "@/components/LoginButtonKakao";
import LoginButtonNaver from "@/components/LoginButtonNaver";
import { useState, useEffect } from 'react';

export default function NotAMember() {
	const [title, setTitle] = useState('');
	const [width, setWidth] = useState('');
	const [fontSize, setFontSize] = useState(20);

	useEffect(() => {
		const updateWindowSize = () => {
			setTitle(window.innerWidth > 640 ? '아이디로 회원가입' : '회원가입');
			setWidth(window.innerWidth > 640 ? 300 : 150);
			setFontSize(window.innerWidth > 640 ? 20 : 15);
		}
		window.addEventListener('resize', updateWindowSize);

		return () => window.removeEventListener('resize', updateWindowSize);
	}, []);

  return (
		<div className="w-full h-full text-center mx-auto">
			<BasicFrame>
				<div className="grid grid-rows-5">
					<div className="row-span-1 font-bold text-3xl py-5 border-b-2 mb-5 p-5">Sign Up</div>
					<div className="row-span-4 grid grid-flow-row gap-2 justify-center my-auto">
						<LoginButtonGoogle title={"구글 " + title} width={width} height="50" fontSize={fontSize} iconSize={fontSize*2} />
						<LoginButtonNaver title={"네이버 " + title}  width={width} height="50" fontSize={fontSize} iconSize={fontSize*2} />
						{/* <LoginButtonKakao title="카카오 아이디로 회원가입" /> 카카오에서 승인을 안해줌.. */}
					</div>
				</div>
      </BasicFrame>
    </div>
  );
}
