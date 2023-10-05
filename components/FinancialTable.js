"use client";

import { EntoKo } from "@/translation";
import HoverChart from "./HoverChart";
import { useState } from "react";

function FinancialTable({ yearsData, selectedCols }) {
  const [hover, setHover] = useState(
    [...new Array(selectedCols.length)].map((_) => false)
  );

  const toggleMouseEnter = (array, i) => {
    array[i] = true;
    setHover(array);
  };
  const toggleMouseLeave = (array, i) => {
    array[i] = false;
    setHover(array);
  };
  return (
    <div>
      <table className="my-8 mx-auto">
        <thead>
          <tr className="border-gray-400 border-b-2">
            <th className="p-3 text-sm font-semibold tracking-wide text-center min-w-[150px]">
              (단위: 백만)
            </th>
            {yearsData.map((yearData, i) => (
              <th
                key={i}
                className="p-3 text-sm font-semibold tracking-wide text-left min-w-[110px]"
              >
                <span className="text-lg">
                  {" "}
                  {yearData.date.substr(0, 4)}년{" "}
                </span>
                <span className="text-xs">{yearData.date.substr(5, 2)}월</span>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {selectedCols.map((col, i) => (
            <tr key={i}>
              <div className="">
                {/* 작업중 */}
                {/* <HoverChart /> */}
              </div>
              <td
                className="p-3 text-sm text-center"
                onMouseEnter={() => toggleMouseEnter(hover, i)}
                onMouseLeave={() => toggleMouseLeave(hover, i)}
              >
                {EntoKo[col].ko}
              </td>
              {yearsData.map((yearData, i) => (
                <td key={i} className="text-right pr-4">
                  {EntoKo[col].money === true
                    ? Math.round(yearData[col] / 1000000).toLocaleString(
                        "en-US"
                      )
                    : EntoKo[col].ratio === true
                    ? `${(yearData[col] * 100).toFixed(2)}%`
                    : EntoKo[col].perShare === true
                    ? yearData[col].toFixed(2)
                    : EntoKo[col].share === true
                    ? Math.round(yearData[col] / 1000000).toLocaleString(
                        "en-US"
                      )
                    : EntoKo[col].days === true
                    ? yearData[col].toFixed(1)
                    : ""}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default FinancialTable;
