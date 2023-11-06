"use client";

import { GoMoveToTop } from "react-icons/go";

function ToTheTopButton() {
  const handleScroll = () => {
    const { scrollY } = window;
  };

  // 버튼 클릭 시 스크롤을 맨 위로 올려주는 함수
  const goToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div onClick={goToTop} className="my-auto mx-5 flex cursor-pointer text-gray-800">
      <span className="text-xs md:text-base mr-1">맨위로</span>
      <GoMoveToTop className="text-sm md:text-xl my-auto mr-5" />
    </div>
  );
}

export default ToTheTopButton;
