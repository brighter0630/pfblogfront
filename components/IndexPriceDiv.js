"use client";

import React from "react";
import IndexPriceBox from "@/components/IndexPriceBox/IndexPriceBox";
import BasicFrame from "./BasicFrame";
import { EntoKo } from '@/translation.js';

function IndexPriceDiv() {
  return (
    <BasicFrame>
      <div className="flex m-2 mx-4 justify-center content-center">
        <table className="">
          <IndexPriceBox indexTicker="^GSPC" indexTitle={EntoKo['^GSPC'].ko} />
          <IndexPriceBox indexTicker="^IXIC" indexTitle={EntoKo['^IXIC'].ko} />
          <IndexPriceBox indexTicker="^DJI" indexTitle={EntoKo['^DJI'].ko} />
        </table>
				<table className="">
					<IndexPriceBox indexTicker="^RUT" indexTitle={EntoKo['^RUT'].ko} />
					<IndexPriceBox indexTicker="^FTSE" indexTitle={EntoKo['^FTSE'].ko} />
					<IndexPriceBox indexTicker="^KS11" indexTitle={EntoKo['^KS11'].ko} />
				</table>
				<div className="max-w-0 collapse invisible md:max-w-none md:visible">
					<table >
						<IndexPriceBox indexTicker="^FVX" indexTitle={EntoKo['^FVX'].ko} />
						<IndexPriceBox indexTicker="^TNX" indexTitle={EntoKo['^TNX'].ko} />
						<IndexPriceBox indexTicker="^TYX" indexTitle={EntoKo['^TYX'].ko} />
					</table>
				</div>
      </div>
    </BasicFrame>
  );
}

export default IndexPriceDiv;
