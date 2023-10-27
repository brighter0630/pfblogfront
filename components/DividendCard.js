"use client";

import BasicFrame from "@/components/BasicFrame";
import { EntoKo } from "@/translation";

function DividendCard({ historical }) {
  const selectedCols = [
    "declarationDate",
    "date",
    "recordDate",
    "paymentDate",
    "adjDividend",
  ];

  return (
    <div className="my-auto">
      {historical.length !== 0 && (
        <BasicFrame>
          <h1 className="text-center text-xl font-medium">배당 정보</h1>
          <table className="mx-auto">
            <tbody>
              {selectedCols.map((col, i) => (
                <tr key={i}>
                  <th className="p-2 font-light text-sm">{EntoKo[col].ko}</th>
                  <td className="p-2 text-right mr-2">
                    <span>
                      {historical[0].hasOwnProperty(col)
                        ? historical[0][col]
                        : "-"}
                    </span>
                  </td>
                </tr>
              ))}
              <tr>
                <th className="p-2 font-light text-sm">최근 배당 증가율</th>
                <td className="p-2 text-right mr-2">
                  {historical[0].hasOwnProperty("adjDividend")
                    ? Math.round(
                        (historical[0].adjDividend / historical[4].adjDividend -
                          1) *
                          10000
                      ) / 100
                    : "-"}{" "}
                  %
                </td>
              </tr>
              <tr>
                <th className="p-2 font-light text-sm">직전 분기 배당금</th>
                <td className="p-2 text-right mr-2">
                  {historical[1].hasOwnProperty("adjDividend")
                    ? historical[1].adjDividend
                    : "-"}
                </td>
              </tr>
              <tr>
                <th className="p-2 font-light text-sm">작년 동분기 배당금</th>
                <td className="p-2 text-right mr-2">
                  {historical[4].hasOwnProperty("adjDividend")
                    ? historical[4].adjDividend
                    : "-"}
                </td>
              </tr>
            </tbody>
          </table>
        </BasicFrame>
      )}
    </div>
  );
}

export default DividendCard;
