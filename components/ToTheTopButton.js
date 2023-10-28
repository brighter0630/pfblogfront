"use client";

import { useEffect, useState } from "react";
import { GoMoveToTop } from "react-icons/go";

function ToTheTopButton() {
  const [toggleBtn, setToggleBtn] = useState(true);

  const handleScroll = () => {
    const { scrollY } = window;

    scrollY > 200 ? setToggleBtn(true) : setToggleBtn(false);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // 버튼 클릭 시 스크롤을 맨 위로 올려주는 함수
  const goToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // 토글 여부 state에 따라 버튼을 보여주거나 감추게 만듦
  return toggleBtn ? (
    <div onClick={goToTop} className="my-auto flex cursor-pointer text-gray-800">
      <span className="text-base mr-1">맨위로</span>
      <GoMoveToTop className="text-xl my-auto mr-5" />
    </div>
  ) : null;
}

export default ToTheTopButton;
