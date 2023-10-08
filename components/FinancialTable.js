"use client";

import { useState } from "react";
import { EntoKo } from "@/translation";
import CustomModal from "./CustomModal";
import { BiLineChart } from "react-icons/bi";

function FinancialTable({ yearsData, selectedCols }) {
  const [modalOpen, setModalOpen] = useState(false);
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);

  const toggleModalOpen = (i) => {
    let newArray = [...new Array(selectedCols.length)].map((_) => false);
    newArray[i] = true;
    setHover(newArray);
  };
  const setModalClose = () => {
    setHover([...new Array(selectedCols.length)].map((_) => false));
  };

  const [hover, setHover] = useState(
    [...new Array(selectedCols.length)].map((_) => false)
  );

  return (
    <div>
      <table className="my-8 mx-auto">
        <thead>
          <tr className="border-gray-400 border-b-2">
            <th className="p-3 text-sm font-semibold tracking-wide text-center min-w-[100px]">
              (단위: 백만)
            </th>
            {yearsData.map((yearData, i) => (
              <th
                key={i}
                className="p-3 text-sm font-semibold tracking-wide text-left min-w-[80px]"
              >
                <p className="text-base text-center">
                  {" "}
                  {yearData.date.substr(0, 4)}년
                </p>
                <p className="text-xs text-right mr-4">
                  {yearData.date.substr(5, 2)}월
                </p>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {selectedCols.map((col, i) => (
            <tr key={i}>
              <td className="p-3 text-sm mx-auto text-center grid min-w-[80px]">
                <span className="text-xs">{EntoKo[col].ko}</span>
              </td>
              {yearsData.map((yearData, i) => (
                <td key={i} className="text-right pr-5">
                  {yearData[col] === 0
                    ? "-"
                    : EntoKo[col].money === true
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
