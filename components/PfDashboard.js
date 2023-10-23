"use client";

import React, { useEffect, useState } from "react";
import BasicFrame from "@/components/BasicFrame";
import printDateFull from "../libs/printDateFull";
import Loading from "./Loading";
import connectSocketIO from "@/libs/connectSocketIO";
import mergeRealTimeData from "@/libs/mergeRealTimeData";

function PfDashboard({ summaryData, currentPrices }) {
  const [newData, setNewData] = useState([{}]);
  const [totalInvestedCapital, setTotalInvestedCapital] = useState();
  const [totalCurrentAsset, setTotalCurrentAsset] = useState();
  const [clock, setClock] = useState(printDateFull(new Date()));
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setInterval(() => setClock(printDateFull(new Date())), 1000);
  }, []);

  useEffect(() => {
    const socket = connectSocketIO();
    socket.on("price", ({ realtimeData }) => {
      const mergedData = mergeRealTimeData(
        summaryData,
        { realtimeData },
        currentPrices
      );
      setTotalInvestedCapital(
        mergedData.reduce((prev, curr) => prev + curr.totalEquityPerStock, 0)
      );
      setTotalCurrentAsset(
        mergedData.reduce(
          (prev, curr) =>
            prev + curr.totalQuantityPerStock * curr.realtimePrice,
          0
        )
      );
      setNewData(mergedData);
      setLoading(false);
    });
  }, []);

  if (loading) {
    return (
      <div className="my-4 mx-auto justify-center text-center min-h-[100px] max-h-[100px]">
        <Loading />
      </div>
    );
  }

  return (
    <BasicFrame>
      <span className={"m-4 font-medium text-2xl"}>Portfolio 현황</span>
      <span>{printDateFull(new Date())}</span>
      <span> 기준 </span>
      <div className="grid grid-cols-6 grid-flow-col my-4 mx-auto justify-center min-h-[100px] max-h-[100px]">
        <div className="col-span-4 grid grid-rows-2 justify-center text-center gap-0 h-3/6 transition duration-150 ease-in-out">
          <span className="text-sm">현재 총 자산</span>
          {isNaN(totalCurrentAsset) ? (
            <span></span>
          ) : (
            <span className="text-7xl font-extralight">
              $
              {(Math.round(totalCurrentAsset * 100) / 100).toLocaleString(
                undefined,
                { minimumFractionDigits: 2 }
              )}
            </span>
          )}
        </div>
        <div className="grid grid-rows-2 text-center">
          <span className="text-sm">수익률</span>
          {isNaN(totalCurrentAsset) || isNaN(totalInvestedCapital) ? (
            <span></span>
          ) : (
            <span
              className={`font-medium text-xl ${
                totalCurrentAsset - totalInvestedCapital > 0
                  ? " text-red-600"
                  : "text-blue-600"
              }`}
            >
              {(
                Math.round(
                  (totalCurrentAsset / totalInvestedCapital - 1) * 10000
                ) / 100
              ).toLocaleString(undefined, { minimumFractionDigits: 2 })}
              %
            </span>
          )}
        </div>
        <div className="grid grid-rows-2 text-center">
          <span className="text-sm">수익</span>
          {isNaN(totalCurrentAsset - totalInvestedCapital) ? (
            <span></span>
          ) : (
            <span
              className={`font-medium text-xl ${
                totalCurrentAsset - totalInvestedCapital > 0
                  ? " text-red-600"
                  : "text-blue-600"
              }`}
            >
              $
              {(totalCurrentAsset - totalInvestedCapital).toLocaleString(
                undefined,
                { minimumFractionDigits: 2 }
              )}
            </span>
          )}
        </div>
      </div>
    </BasicFrame>
  );
}

export default PfDashboard;
