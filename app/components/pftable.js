export default function PfTable({ data, currentPrices }) {
  const newData = data.map((stock) => {
    return Object.assign(
      ...currentPrices.filter((price) => price.symbol === stock._id),
      stock
    );
  });

  return (
    <div className=" justify-center m-auto overflow-auto min-w-min max-w-4xl ">
      <table className=" m-8">
        <thead>
          <tr className="border-gray-400 border-b-2">
            <th
              className={
                "p-3 text-sm font-semibold tracking-wide text-left min-w-[75px]"
              }
            >
              <span>티커</span>
            </th>
            <th
              className={
                "p-3 text-sm font-semibold tracking-wide text-left min-w-[75px]"
              }
            >
              회사
            </th>
            <th
              className={
                "p-3 text-sm font-semibold tracking-wide text-left min-w-[100px]"
              }
            >
              보유주식수
            </th>
            <th
              className={
                "p-3 text-sm font-semibold tracking-wide text-left min-w-[125px]"
              }
            >
              평균 매수 가격
            </th>
            <th
              className={
                "p-3 text-sm font-semibold tracking-wide text-left min-w-[125px]"
              }
            >
              총 매수 금액
            </th>
            <th
              className={
                "p-3 text-sm font-semibold tracking-wide text-left min-w-[100px]"
              }
            >
              현재 주가
            </th>
            <th
              className={
                "p-3 text-sm font-semibold tracking-wide text-left min-w-[75px]"
              }
            >
              수익률
            </th>
            <th
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
            </th>
            <th
              className={
                "p-3 text-sm font-semibold tracking-wide text-left min-w-[75px]"
              }
            >
              실적발표일
            </th>
          </tr>
        </thead>
        <tbody>
          {newData?.map((stock, i) => (
            <tr key={i}>
              <td className={"p-3 text-sm"}>{stock._id}</td>
              <td className={"p-3 text-sm"}>{stock.name}</td>
              <td className={"p-3 text-sm"}>{stock.totalHoldings}</td>
              <td className={"p-3 text-sm"}>
                {(
                  Math.round((stock.numerator / stock.denumerator) * 100) / 100
                ).toLocaleString(undefined, { minimumFractionDigits: 2 })}
              </td>

              <td className={"p-3 text-sm"}>
                {/* 총 매수 금액 */}
                {(
                  Math.round(
                    ((stock.totalHoldings * stock.numerator) /
                      stock.denumerator) *
                      100
                  ) / 100
                ).toLocaleString(undefined, { minimumFractionDigits: 2 })}
              </td>
              <td className={"p-3 text-sm"}>
                {(Math.round(stock.price * 100) / 100)
                  .toFixed(2)
                  .toLocaleString("en-US")}
              </td>
              <td className={"p-3 text-sm"}>
                {(
                  Math.round(
                    (stock.price / (stock.numerator / stock.denumerator) - 1) *
                      10000
                  ) / 100
                ).toLocaleString(undefined, { minimumFractionDigits: 2 })}
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
