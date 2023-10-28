"use client";

import React from "react";
import IndexPriceBox from "@/components/IndexPriceBox/IndexPriceBox";
import BasicFrame from "./BasicFrame";
import { EntoKo } from '@/translation.js';

function IndexPriceDiv() {
  return (
    <BasicFrame>
      <div className="mx-auto grid grid-cols-3 max-w-full min-w-0 min-h-0">
        <table className="max-w-[100px] mx-auto">
          <IndexPriceBox indexTicker="^GSPC" indexTitle={EntoKo['^GSPC'].ko} />
          <IndexPriceBox indexTicker="^IXIC" indexTitle={EntoKo['^IXIC'].ko} />
          <IndexPriceBox indexTicker="^DJI" indexTitle={EntoKo['^DJI'].ko} />
        </table>
        <table className="max-w-[100px] mx-auto">
          <IndexPriceBox indexTicker="^RUT" indexTitle={EntoKo['^RUT'].ko} />
          <IndexPriceBox indexTicker="^FTSE" indexTitle={EntoKo['^FTSE'].ko} />
          <IndexPriceBox indexTicker="^KS11" indexTitle={EntoKo['^KS11'].ko} />
        </table>
        <table className="max-w-[100px] mx-auto">
          <IndexPriceBox indexTicker="^FVX" indexTitle={EntoKo['^FVX'].ko} />
          <IndexPriceBox indexTicker="^TNX" indexTitle={EntoKo['^TNX'].ko} />
          <IndexPriceBox indexTicker="^TYX" indexTitle={EntoKo['^TYX'].ko} />
        </table>
      </div>
    </BasicFrame>
  );
}

export default IndexPriceDiv;
