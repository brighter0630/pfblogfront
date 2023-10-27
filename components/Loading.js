import React from "react";
import { AiOutlineLoading3Quarters } from "react-icons/ai";

function Loading() {
  return (
    <div className="mx-auto table">
      <AiOutlineLoading3Quarters className="text-xl animate-spin my-1" />
    </div>
  );
}

export default Loading;
