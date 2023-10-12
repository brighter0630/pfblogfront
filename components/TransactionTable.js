"use client";

import { printStringToDate } from "@/libs/printStringToDate";
import Link from "next/link";

function TransactionTable({ data }) {
  return (
    <table className="my-8 mx-auto">
      <thead>
        <tr className="border-gray-400 border-b-2">
          <th className="p-3 text-sm font-semibold tracking-wide text-left min-w-[80px]">
            Ticker
          </th>
          <th className="p-3 text-sm font-semibold tracking-wide text-left min-w-[80px]">
            거래일
          </th>
          <th className="p-3 text-sm font-semibold tracking-wide text-left min-w-[80px]">
            거래 가격
          </th>
          <th className="p-3 text-sm font-semibold tracking-wide text-left min-w-[80px]">
            거래 수량
          </th>
          <th className="p-3 text-sm font-semibold tracking-wide text-left min-w-[80px]">
            거래 타입
          </th>
          <th className="p-3 text-sm font-semibold tracking-wide text-left min-w-[80px]">
            당시 S&P500
          </th>
          <th className="p-3 text-sm font-semibold tracking-wide text-left min-w-[80px]">
            당시 NASDAQ
          </th>
        </tr>
      </thead>
      <tbody className="text-center">
        {data.map((each, index) => (
          <tr
            key={index}
            className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-105 hover:bg-gray-500 hover:text-white duration-300"
          >
            <td className="p-3 text-sm">
              <Link
                href={`/transactionhistory/byticker/${each.ticker}`}
                as={`/transactionhistory/byticker/${each.ticker}`}
              >
                {each.ticker}
              </Link>
            </td>

            <td className="p-3 text-sm">
              {printStringToDate(each.dateOfTransaction)}
            </td>
            <td className="p-3 text-sm">{Number(each.price).toFixed(2)}</td>
            <td className="p-3 text-sm">{each.quantity}</td>
            <td className="p-3 text-sm">
              {each.typeOfTransaction === "buy" ? "매수" : "매도"}
            </td>
            <td className="p-3 text-sm">{Number(each.snpAtTr).toFixed(2)}</td>
            <td className="p-3 text-sm">
              {Number(each.nasdaqAtTr).toFixed(2)}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default TransactionTable;
