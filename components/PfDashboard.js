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
      if (mergedData) {
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
      }
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
      {!loading && (
        <div>
					<div className="flex h-12">
						<div className="my=auto">
							<span className={"font-medium m-2 md:m-4 text-lg md:text-2xl"}>Portfolio 현황</span>
						</div>
						<div className="my-auto max-w-0 md:max-w-none md:mx-5 collapse md:visible">
							<span>{printDateFull(new Date())}</span>
							<span> 기준 </span>
						</div>
					</div>
					<table className="mx-auto my-2 md:my-5 justify-center text-center gap-0 h-3/6 w-full">
						<thead className="">
							<tr>
								<th className="text-sm md:text-base">현재 총 자산</th>
								<th className="text-xs md:text-sm">수익률</th>
								<th className="text-xs md:text-sm">수익</th>
							</tr>
						</thead>
						<tbody>
							<tr>
							{isNaN(totalCurrentAsset) ? (
								<td><Loading /></td>
							) : (
								<td className="my-auto text-2xl sm:text-3xl md:text-7xl font-extralight mx-3 px-3 md:mx-8 md:px-8 lg:mx-10 lg:px-10">
									$
									{(Math.round(totalCurrentAsset * 100) / 100).toLocaleString(
										undefined,
										{ minimumFractionDigits: 2 }
									)}
								</td>
							)}
							{isNaN(totalCurrentAsset) || isNaN(totalInvestedCapital) ? (
								<td><Loading /></td>
								) : (
									<td
										className={`font-medium text-base sm:text-xl md:text-2xl px-1 mx-1 md:m-3 md:px-3 lg:mx-5 lg:px-5 ${
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
									</td>
								)}
							{isNaN(totalCurrentAsset - totalInvestedCapital) ? (
								<td><Loading /></td>
								) : (
									<td
										className={`font-medium text-base sm:text-xl md:text-2xl px-1 mx-1 md:m-3 md:px-3 lg:mx-5 lg:px-5 ${
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
									</td>
								)}
							</tr>
						</tbody>
					</table>
        </div>
      )}
    </BasicFrame>
  );
}

export default PfDashboard;
