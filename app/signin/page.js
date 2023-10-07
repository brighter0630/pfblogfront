"use client";

import React, { useRef } from "react";
import useNaverInit from "@/app/hooks/useNaverInit";

export default function SignInPage() {
  useNaverInit();

  const naverRef = useRef();

  const handleNaverLoginClick = () => {
    if (!naverRef || !naverRef.current || !naverRef.current.children) return;

    // 아래 코드는 개발자 도구를 통해 직접 분석해서 사용에 맞게 변경하셔도 좋을 것 같습니다.
    naverRef.current.children[1].click();
    console.log(naverRef.current);
  };

  return (
    <div>
      <script
        src="https://static.nid.naver.com/js/naveridlogin_js_sdk_2.0.2.js"
        strategy="beforeInteractive"
      />
      <button onClick={handleNaverLoginClick}>
        네이버 아이디로 로그인하기
      </button>
      <button ref={naverRef} id="naverIdLogin" className="flex" />
    </div>
  );
}
