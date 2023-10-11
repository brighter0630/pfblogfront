"use client";

import BasicFrame from "@/components/BasicFrame";
import LoginButtonGoogle from "@/components/LoginButtonGoogle";
import LoginButtonNaver from "@/components/LoginButtonNaver";

export default function NotAMember() {
  return (
    <div className="w-80 grid grid-flow-row text-center">
      <BasicFrame>
        <div className="font-bold text-3xl py-5 border-b-2 mb-5">Sign Up</div>
        <div className="grid grid-flow-row gap-2 justify-center">
          <LoginButtonNaver buttonTitle="네이버 아이디로 회원가입" />
          <LoginButtonGoogle buttonTitle="구글 아이디로 회원가입" />
        </div>
      </BasicFrame>
    </div>
  );
}
