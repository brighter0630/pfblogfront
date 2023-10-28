"use client";

import React from "react";
import IndexPriceBox from "@/components/IndexPriceBox/IndexPriceBox";
import BasicFrame from "./BasicFrame";

function IndexPriceDiv() {
  return (
    <BasicFrame>
      <div className="mx-auto grid grid-cols-3 max-w-full min-w-0 min-h-0">
        <table className="max-w-[100px] mx-auto">
          <IndexPriceBox indexTicker="^GSPC" indexTitle={"S&P500"} />
          <IndexPriceBox indexTicker="^IXIC" indexTitle={"나스닥"} />
          <IndexPriceBox indexTicker="^DJI" indexTitle={"다우존스"} />
        </table>
        <table className="max-w-[100px] mx-auto">
          <IndexPriceBox indexTicker="^RUT" indexTitle={"러셀2000"} />
          <IndexPriceBox indexTicker="^FTSE" indexTitle={"FTSE100"} />
          <IndexPriceBox indexTicker="^KS11" indexTitle={"코스피"} />
        </table>
        <table className="max-w-[100px] mx-auto">
          <IndexPriceBox indexTicker="^FVX" indexTitle={"미국국채(5년)"} />
          <IndexPriceBox indexTicker="^TNX" indexTitle={"미국국채(10년)"} />
          <IndexPriceBox indexTicker="^TYX" indexTitle={"미국국채(30년)"} />
        </table>
      </div>
    </BasicFrame>
  );
}

export default IndexPriceDiv;
