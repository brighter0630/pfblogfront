"use client";

import BasicFrame from "@/components/BasicFrame";
import LoginButtonGoogle from "@/components/LoginButtonGoogle";
import LoginButtonKakao from "@/components/LoginButtonKakao";
import LoginButtonNaver from "@/components/LoginButtonNaver";

export default function NotAMember() {
  return (
		<div className="w-full h-full text-center mx-auto">
			<BasicFrame>
				<div className="grid grid-rows-5">
					<div className="row-span-1 font-bold text-3xl py-5 border-b-2 mb-5 p-5">Sign Up</div>
					<div className="row-span-4 grid grid-flow-row gap-2 justify-center my-auto">
						<LoginButtonGoogle title="구글 아이디로 회원가입" width="300" height="50" fontSize="20" iconSize="40" />
						<LoginButtonNaver title="네이버 아이디로 회원가입" width="300" height="50" fontSize="20" iconSize="40" />
						{/* <LoginButtonKakao title="카카오 아이디로 회원가입" /> 카카오에서 승인을 안해줌.. */}
					</div>
				</div>
      </BasicFrame>
    </div>
  );
}
