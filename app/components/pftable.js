"use client";

export default function PfTable({ data, currentPrices }) {
  const newData = data.map((stock) => {
    return Object.assign(
      ...currentPrices.filter((price) => price.symbol === stock._id),
      stock
    );
  });

  return (
    <div className="flex overflow-auto rounded-lg shadow min-w-min max-w-4xl relative">
      <table className="w-full border-gray-100 border-b-2">
        <thead className="border-gray-200 border-b-2">
          <tr className="">
            <th className={"p-3 text-sm font-semibold tracking-wide text-left"}>
              티커
            </th>
            <th className={"p-3 text-sm font-semibold tracking-wide text-left"}>
              회사
            </th>
            <th className={"p-3 text-sm font-semibold tracking-wide text-left"}>
              보유주식수
            </th>
            <th className={"p-3 text-sm font-semibold tracking-wide text-left"}>
              평균 매수 가격
            </th>
            <th className={"p-3 text-sm font-semibold tracking-wide text-left"}>
              총 매수 금액
            </th>
            <th className={"p-3 text-sm font-semibold tracking-wide text-left"}>
              현재 주가
            </th>
            <th className={"p-3 text-sm font-semibold tracking-wide text-left"}>
              수익률
            </th>
            <th className={"p-3 text-sm font-semibold tracking-wide text-left"}>
              PER
            </th>
            <th className={"p-3 text-sm font-semibold tracking-wide text-left"}>
              EPS
            </th>
            <th className={"p-3 text-sm font-semibold tracking-wide text-left"}>
              실적발표일
            </th>
          </tr>
        </thead>
        <tbody>
          {newData.map((stock, i) => (
            <tr key={i}>
              <td className={"p-3 text-sm"}>{stock._id}</td>
              <td className={"p-3 text-sm"}>{stock.name}</td>
              <td className={"p-3 text-sm"}>{stock.totalHoldings}</td>
              <td className={"p-3 text-sm"}>
                {(
                  Math.round((stock.numerator / stock.denumerator) * 100) / 100
                ).toFixed(2)}
              </td>
              <td className={"p-3 text-sm"}>
                {(
                  Math.round(
                    ((stock.totalHoldings * stock.numerator) /
                      stock.denumerator) *
                      100
                  ) / 100
                ).toFixed(2)}
              </td>
              <td className={"p-3 text-sm"}>
                {(Math.round(stock.price * 100) / 100).toFixed(2)}
              </td>
              <td className={"p-3 text-sm"}>
                {(
                  Math.round(
                    (stock.price / (stock.numerator / stock.denumerator) - 1) *
                      10000
                  ) / 100
                ).toFixed(2)}
                %
              </td>
              <td className={"p-3 text-sm"}>{stock.pe}</td>
              <td className={"p-3 text-sm"}>{stock.eps}</td>
              <td className={"p-3 text-sm"}>
                {stock.earningsAnnouncement.substr(0, 4)}/
                {stock.earningsAnnouncement.substr(5, 2)}/
                {stock.earningsAnnouncement.substr(8, 2)}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
