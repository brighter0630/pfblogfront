import React from "react";

function PfDashboard({ data, currentPrices }) {
  const newData = data.map((stock) => {
    return Object.assign(
      ...currentPrices.filter((price) => price.symbol === stock._id),
      stock
    );
  });
  let totalInvestedCapital = newData.reduce(
    (prev, curr) =>
      prev + (curr.totalHoldings * curr.numerator) / curr.denumerator,
    0
  );
  let totalCurrentAsset = newData.reduce(
    (prev, curr) => prev + curr.totalHoldings * curr.price,
    0
  );
  return (
    <div className="grid grid-cols-6 grid-flow-col my-4 mx-auto justify-center">
      <div className="col-span-4 grid grid-rows-2 justify-center text-center gap-0 h-3/6">
        <span className="text-sm">현재 총 자산</span>
        <span className="text-7xl font-extralight">
          ${(Math.round(totalCurrentAsset * 100) / 100).toLocaleString("en-US")}
        </span>
      </div>
      <div className="grid grid-rows-2 text-center">
        <span className="text-sm">수익률</span>
        <span
          className={`font-medium text-xl ${
            totalCurrentAsset - totalInvestedCapital > 0
              ? " text-red-600"
              : "text-blue-600"
          }`}
        >
          {(
            Math.round((totalCurrentAsset / totalInvestedCapital - 1) * 10000) /
            100
          ).toFixed(2)}
          %
        </span>
      </div>
      <div className="grid grid-rows-2 text-center">
        <span className="text-sm">수익</span>
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
      </div>
    </div>
  );
}

export default PfDashboard;
