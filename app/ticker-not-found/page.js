import React from "react";
import Image from "next/image";
import tickerNotFound from "./ticker-not-found.jpg";

function TickerNotFound() {
  return (
    <div className="text-center p-5 m-10">
      <h1 className="text-5xl m-10">앗! 이런...</h1>
      <p className="">
        입력하신 티커를 찾지 못했습니다. 잘못된 티커이거나 아직 추가되지 못한
        상장주식, ETF, 인덱스 등일 수도 있습니다.
      </p>
      <p className="m-5">입력하신 내용을 다시 한 번 확인해주세요.</p>
      <Image
        className="mx-auto my-10 rounded-2xl"
        priority
        src={tickerNotFound}
        width={640}
        height={399}
        alt="ticker-not-found"
      />
    </div>
  );
}

export default TickerNotFound;
