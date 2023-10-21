import React from "react";
import { AiOutlineLoading3Quarters } from "react-icons/ai";

function Loading() {
  return (
    <div className="mx-auto min-h-[100px] table">
      <AiOutlineLoading3Quarters className="text-xl animate-spin my-10" />
    </div>
  );
}

export default Loading;
