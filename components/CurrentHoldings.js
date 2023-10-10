import Link from "next/link";

export default function PfTable({
  data,
  currentPrices,
  nasdaqIndex,
  snpIndex,
}) {
  const newData = data.map((stock) => {
    return Object.assign(
      ...currentPrices.filter((price) => price.symbol === stock.ticker),
      stock
    );
  });

  return (
    <div className="justify-center m-auto overflow-auto min-w-min max-w-4xl">
      <table className="m-8">
        <thead>
          <tr className="border-gray-400 border-b-2">
            <th
              className={
                "p-3 text-sm font-semibold tracking-wide text-center min-w-[75px]"
              }
            >
              <span>티커</span>
            </th>
            <th
              className={
                "p-3 text-sm font-semibold tracking-wide text-center min-w-[75px]"
              }
            >
              회사
            </th>
            <th
              className={
                "p-3 text-sm font-semibold tracking-wide text-center min-w-[100px]"
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
                "p-3 text-sm font-semibold tracking-wide text-center min-w-[125px]"
              }
            >
              총 매수 원금
            </th>
            {/* <th
              className={
                "p-3 text-sm font-semibold tracking-wide text-center min-w-[100px]"
              }
            >
              현재 주가
            </th> */}
            <th
              className={
                "p-3 text-sm font-semibold tracking-wide text-left min-w-[75px]"
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
                "p-3 text-sm font-semibold tracking-wide text-left min-w-[75px]"
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
            <th
              className={
                "p-3 text-sm font-semibold tracking-wide text-left min-w-[100px]"
              }
            >
              실적발표일
            </th>
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

              <td className={"p-3 text-sm text-left"}>
                <Link href={`/analysis/${stock.ticker}/pc/year`}>
                  {stock.name}
                </Link>
              </td>
              <td className={"p-3 text-sm"}>{stock.denumerator}</td>
              {/* 평균매수가격 */}
              {/* <td className={"p-3 text-sm"}>
                {(
                  Math.round((stock.numerator / stock.denumerator) * 100) / 100
                ).toLocaleString(undefined, { minimumFractionDigits: 2 })}
              </td> */}

              <td className={"p-3 text-sm"}>
                {/* 총 매수 금액 */}
                {(Math.round(stock.numerator * 100) / 100).toLocaleString(
                  undefined,
                  { minimumFractionDigits: 2 }
                )}
              </td>
              {/* 현재 주가 */}
              {/* <td className={"p-3 text-sm"}>
                {(Math.round(stock.price * 100) / 100)
                  .toFixed(2)
                  .toLocaleString("en-US")}
              </td> */}
              <td
                className={`p-3 text-sm ${
                  stock.price / (stock.numerator / stock.denumerator) - 1 >= 0
                    ? "text-red-700"
                    : "text-blue-700"
                }`}
              >
                {(
                  Math.round(
                    (stock.price / (stock.numerator / stock.denumerator) - 1) *
                      10000
                  ) / 100
                ).toLocaleString(undefined, { minimumFractionDigits: 2 })}
                %
              </td>
              {/* 나스닥과 비교한 수익률 */}
              {/* <td
                className={`p-3 text-sm ${
                  stock.numerator /
                    (stock.denumeratorOfNASDAQ * nasdaqIndex[0].close) -
                    1 >=
                  0
                    ? "text-red-700"
                    : "text-blue-700"
                }`}
              >
                {(
                  Math.round(
                    (stock.numerator /
                      (stock.denumeratorOfNASDAQ * nasdaqIndex[0].close) -
                      1) *
                      10000
                  ) / 100
                ).toLocaleString(undefined, { minimumFractionDigits: 2 })}
                %
              </td> */}
              <td
                className={`p-3 text-sm ${
                  (stock.price * stock.denumerator) /
                    (stock.denumeratorOfSNP * snpIndex[0].close) -
                    1 >=
                  0
                    ? "text-red-700"
                    : "text-blue-700"
                }`}
              >
                {(
                  Math.round(
                    ((stock.price * stock.denumerator) /
                      (stock.denumeratorOfSNP * snpIndex[0].close) -
                      1) *
                      10000
                  ) / 100
                ).toLocaleString(undefined, { minimumFractionDigits: 2 })}
                %
              </td>
              {/* <td className={"p-3 text-sm"}>{stock.pe}</td>
              <td className={"p-3 text-sm"}>{stock.eps}</td> */}
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
