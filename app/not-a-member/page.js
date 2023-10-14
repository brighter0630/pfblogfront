"use client";

import BasicFrame from "@/components/BasicFrame";
import LoginButtonGoogle from "@/components/LoginButtonGoogle";
import LoginButtonKakao from "@/components/LoginButtonKakao";
import LoginButtonNaver from "@/components/LoginButtonNaver";

export default function NotAMember() {
  return (
    <div className="w-80 grid grid-flow-row text-center">
      <BasicFrame>
        <div className="font-bold text-3xl py-5 border-b-2 mb-5">Sign Up</div>
        <div className="grid grid-flow-row gap-2 justify-center">
          <LoginButtonNaver title="네이버 아이디로 회원가입" />
          <LoginButtonGoogle title="구글 아이디로 회원가입" />
          <LoginButtonKakao title="카카오 아이디로 회원가입" />
        </div>
      </BasicFrame>
    </div>
  );
}
