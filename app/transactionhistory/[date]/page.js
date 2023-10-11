import BasicFrame from "@/components/BasicFrame";
import getMonthTransaction from "@/libs/mariadb/getMonthTransaction";
import { printStringToDate } from "@/libs/printStringToDate";

export default async function TransactionList({ params }) {
  const { monthTransctionData } = await getMonthTransaction(
    params.date.substring(5, 7),
    params.date.substring(0, 4)
  );
  return (
    <div>
      <BasicFrame>
        <h1 className="text-center text-2xl font-bold">거래 기록</h1>
        {monthTransctionData === undefined ? (
          <div className="py-4 px-10">
            {params.date.substring(5, 7)}월의 거래 기록이 존재하지 않습니다.
          </div>
        ) : (
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
              {monthTransctionData.map((each, index) => (
                <tr
                  key={index}
                  className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-gray-500 hover:text-white duration-300"
                >
                  <td className="p-3 text-sm">{each.ticker}</td>
                  <td className="p-3 text-sm">
                    {printStringToDate(each.dateOfTransaction)}
                  </td>
                  <td className="p-3 text-sm">
                    {Number(each.price).toFixed(2)}
                  </td>
                  <td className="p-3 text-sm">{each.quantity}</td>
                  <td className="p-3 text-sm">
                    {each.typeOfTransaction === "buy" ? "매수" : "매도"}
                  </td>
                  <td className="p-3 text-sm">
                    {Number(each.snpAtTr).toFixed(2)}
                  </td>
                  <td className="p-3 text-sm">
                    {Number(each.nasdaqAtTr).toFixed(2)}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </BasicFrame>
    </div>
  );
}
