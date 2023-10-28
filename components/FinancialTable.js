"use client";

import { EntoKo } from "@/translation";
import { useState } from "react";
import CustomModal from "./CustomModal";
import FinancialBarChart from "./BlogContentsComponents/FinancialBarChart";

function FinancialTable({ yearsData, selectedCols }) {
  const [showModal, setShowModal] = useState(
    new Array(selectedCols.length).fill(false)
  );
  const [positionX, setPositionX] = useState(0);
  const [positionY, setPositionY] = useState(0);

  const setModalArray = (i, e) => {
    let tempArray = new Array(selectedCols.length).fill(false);
    tempArray[i] = true;

    setPositionX(e.pageX + 20);
    setPositionY(e.pageY - 100);
    setShowModal(tempArray);
  };
  const initModalArray = () => {
    setShowModal(new Array(selectedCols.length).fill(false));
  };

  return (
    <table className="my-8 mx-auto">
      <thead>
        <tr className="border-gray-400 border-b-2">
          <th className="p-3 text-sm font-semibold tracking-wide text-center min-w-[100px]">
            (단위: 백만)
          </th>
          {yearsData.map((yearData, i) => (
            <th
              key={i}
              className="p-3 text-sm font-semibold tracking-wide text-left min-w-[65px]"
            >
              <p className="text-base text-center">
                {" "}
                {yearData.date.substr(0, 4)}
              </p>
              <p className="text-xs text-right mr-1">
                {yearData.date.substr(5, 2)}월
              </p>
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {selectedCols.map((col, i) => (
          <tr key={i}>
            <th
              className="p-3 text-sm mx-auto text-center grid min-w-[80px]"
              onMouseEnter={(e) => setModalArray(i, e)}
              onMouseLeave={(e) => initModalArray(i)}
            >
              <span className="text-xs">{EntoKo[col].ko}</span>
              {showModal[i] && (
                <CustomModal
                  title={EntoKo[col].ko}
                  positionX={positionX}
                  positionY={positionY}
                  width={350}
                  height={180}
                >
                  <FinancialBarChart
                    chartData={yearsData.map((yearData) => {
                      return {
                        name: `${yearData["date"].substring(0, 4)} ${yearData[
                          "date"
                        ].substring(5, 7)}월`,
                        value: yearData[col],
                      };
                    })}
                    col={col}
                  />
                </CustomModal>
              )}
            </th>
            {yearsData.map((yearData, i) => (
              <td key={i} className="text-right pr-5">
                {yearData[col] === 0
                  ? "-"
                  : EntoKo[col].money === true
                  ? Math.round(yearData[col] / 1000000).toLocaleString("en-US")
                  : EntoKo[col].ratio === true
                  ? `${(yearData[col] * 100).toFixed(2)}%`
                  : EntoKo[col].perShare === true
                  ? yearData[col].toFixed(2)
                  : EntoKo[col].share === true
                  ? Math.round(yearData[col] / 1000000).toLocaleString("en-US")
                  : EntoKo[col].days === true
                  ? yearData[col].toFixed(1)
                  : ""}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default FinancialTable;
