"use client";

import { useState } from "react";
import { EntoKo } from "@/translation";
import CustomModal from "./CustomModal";

function FinancialTable({ yearsData, selectedCols }) {
  const [modalOpen, setModalOpen] = useState(false);
  const [x, setX] = useState("left-[0px]");
  const [y, setY] = useState("top-[0px]");

  const toggleModalOpen = (e) => {
    setModalOpen(true);
    setX(`left-[${e.clientX}px]`);
    setY(`top-[${e.clientY}px]`);
    console.log(`${x} and ${y}`);
  };

  const [hover, setHover] = useState(
    [...new Array(selectedCols.length)].map((_) => false)
  );

  return (
    <div>
      <CustomModal
        open={modalOpen}
        onClose={(e) => setModalOpen(false)}
        title="타이틀"
        x={x}
        y={y}
      >
        내용들
      </CustomModal>
      <div
        className={`max-w-[60%] ${
          hover.every((e) => e === false) ? "hidden" : "text-blue-600"
        }`}
      ></div>
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
              <td
                className="p-3 text-sm text-center"
                onMouseEnter={(e) => toggleModalOpen(e)}
              >
                {EntoKo[col].ko}
              </td>
              {yearsData.map((yearData, i) => (
                <td key={i} className="text-right pr-5">
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
