"use client";

import Link from "next/link";
import mergeRealTimeData from "@/libs/mergeRealTimeData";
import connectSocketIO from "@/libs/connectSocketIO";
import { useEffect, useState } from "react";
import BasicFrame from "@/components/BasicFrame";
import Loading from "./Loading";

export default function PfTable({
  data,
  currentPrices,
  nasdaqIndex,
  snpIndex,
}) {
  const [newData, setNewData] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const socket = connectSocketIO();
    socket.on("price", ({ realtimeData }) => {
      const mergedData = mergeRealTimeData(
        data,
        { realtimeData },
        currentPrices
      );
      if (mergedData) {
        setNewData(mergedData);
        setLoading(false);
      }
    });
  }, []);

  if (loading) {
    return <Loading />;
  }

  return (
    <BasicFrame>
      {!loading && (
        <div className="w-full">
          <span className={"m-2 md:m-4 font-medium text-lg md:text-2xl"}>
            보유 종목 목록 <span className="text-sm">(화폐 단위: $) </span>
          </span>
          <div className="flex justify-center m-auto max-w-3xl">
            <table className="m-2 md:m-8">
              <thead>
                <tr className="border-gray-400 border-b-2">
                  <th
                    className={
                      "p-1 md:p-3 text-xs md:text-sm font-semibold text-center md:min-w-[75px]"
                    }
                  >
                    <span>티커</span>
                  </th>
                  <th
                    className={
                      "max-w-0 p-0 m-0 md:p-3 text-sm font-semibold text-center collapse md:visible md:min-w-[75px]"
                    }
                  >
                    회사
                  </th>
                  <th
                    className={
                      "p-1 md:p-3 text-xs md:text-sm font-semibold text-center min-w-[100px]"
                    }
                  >
                    보유주식수
                  </th>
                  {/* <th
        className={
          "p-3 text-sm font-semibold tracking-wide text-center min-w-[125px]"
        }
      >
        평균 매수 가격
      </th> */}
                  <th
                    className={
                      "p-0 max-w-0 md:p-3 text-sm font-semibold text-center collapse md:visible md:min-w-[75px]"
                    }
                  >
                    총 매수 원금
                  </th>
                  <th
                    className={
                      "p-0 max-w-0 md:p-3 text-sm font-semibold tracking-wide text-center collapse md:visible md:min-w-[75px]"
                    }
                  >
                    현재 주가
                  </th>
                  <th
                    className={
                      "p-1 md:p-3 text-xs md:text-sm font-semibold text-center min-w-[75px]"
                    }
                  >
                    수익률
                  </th>
                  {/* <th
        className={
          "p-3 text-sm font-semibold tracking-wide text-left min-w-[75px]"
        }
      >
        NASDAQ대비
      </th> */}
                  <th
                    className={
                      "p-0 md:p-3 text-xs md:text-sm font-semibold text-left md:min-w-[75px]"
                    }
                  >
                    S&P500대비
                  </th>
                  {/* <th
        className={
          "p-3 text-sm font-semibold tracking-wide text-left min-w-[75px]"
        }
      >
        PER
      </th>
      <th
        className={
          "p-3 text-sm font-semibold tracking-wide text-left min-w-[75px]"
        }
      >
        EPS
      </th> */}
                </tr>
              </thead>
              <tbody>
                {newData?.map((stock, i) => (
                  <tr key={i} className="text-center">
                    <td className={"p-3 text-sm text-left"}>
                      <Link href={`/analysis/${stock.ticker}/pc/year`}>
                        {stock.ticker}
                      </Link>
                    </td>

                    <td className={"max-w-0 md:p-3 text-sm text-left collapse md:visible md:min-w-[75px]"}>
                      <Link href={`/analysis/${stock.ticker}/pc/year`}>
                        {stock.name}
                      </Link>
                    </td>
                    <td className={"p-3 text-sm"}>
                      {stock.totalQuantityPerStock}
                    </td>
                    {/* 평균매수가격 */}
                    {/* <td className={"p-3 text-sm"}>
          {(
            Math.round((stock.totalEquityPerStock / stock.totalQuantityPerStock) * 100) / 100
          ).toLocaleString(undefined, { minimumFractionDigits: 2 })}
        </td> */}

                    <td className={"p-0 max-w-0 md:p-3 md:text-sm collapse md:visible"}>
                      {/* 총 매수 금액 */}
                      {(
                        Math.round(stock.totalEquityPerStock * 100) / 100
                      ).toLocaleString(undefined, { minimumFractionDigits: 2 })}
                    </td>
                    {/* 현재 주가 */}
                    <td className={"p-0 max-w-0 md:p-3 text-xs md:text-sm collapse md:visible"}>
                      {(Math.round(stock.realtimePrice * 100) / 100)
                        .toFixed(2)
                        .toLocaleString("en-US")}
                    </td>
                    <td
                      className={`p-3 text-sm ${
                        stock.realtimePrice /
                          (stock.totalEquityPerStock /
                            stock.totalQuantityPerStock) -
                          1 >=
                        0
                          ? "text-red-700"
                          : "text-blue-700"
                      }`}
                    >
                      {(
                        Math.round(
                          (stock.realtimePrice /
                            (stock.totalEquityPerStock /
                              stock.totalQuantityPerStock) -
                            1) *
                            10000
                        ) / 100
                      ).toLocaleString(undefined, { minimumFractionDigits: 2 })}
                      %
                    </td>
                    {/* 나스닥과 비교한 수익률 */}
                    {/* <td
          className={`p-3 text-sm ${
            stock.totalEquityPerStock /
              (stock.totalQuantityOfNASDAQ * nasdaqIndex[0].close) -
              1 >=
            0
              ? "text-red-700"
              : "text-blue-700"
          }`}
        >
          {(
            Math.round(
              (stock.totalEquityPerStock /
                (stock.totalQuantityOfNASDAQ * nasdaqIndex[0].close) -
                1) *
                10000
            ) / 100
          ).toLocaleString(undefined, { minimumFractionDigits: 2 })}
          %
        </td> */}
                    <td
                      className={`p-1 md:p-3 text-xs md:text-sm ${
                        (stock.realtimePrice * stock.totalQuantityPerStock) /
                          (stock.totalQuantityOfSNP * snpIndex[0].close) -
                          1 >=
                        0
                          ? "text-red-700"
                          : "text-blue-700"
                      }`}
                    >
                      {(
                        Math.round(
                          ((stock.realtimePrice * stock.totalQuantityPerStock) /
                            (stock.totalQuantityOfSNP * snpIndex[0].close) -
                            1) *
                            10000
                        ) / 100
                      ).toLocaleString(undefined, { minimumFractionDigits: 2 })}
                      %
                    </td>
                    {/* <td className={"p-3 text-sm"}>{stock.pe}</td>
        <td className={"p-3 text-sm"}>{stock.eps}</td> */}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </BasicFrame>
  );
}
