import { getRatioData, getDVData } from "@/app/apis/getFinancialData";
import DividendChart from "@/app/components/dividendChart";
import { EntoKo } from "@/translation";

async function DVPage({ params }) {
  const { ticker, charttype } = params;
  const { symbol, historical } = await getDVData(ticker);
  const yearsData = await getRatioData(ticker);
  const selectedCols = [
    "payoutRatio",
    "dividendYield",
    "cashRatio",
    "cashPerShare",
    "freeCashFlowPerShare",
    "returnOnCapitalEmployed",
    "returnOnEquity",
    "returnOnAssets",
    "debtEquityRatio",
    "interestCoverage",
  ];
  return (
    <div className="justify-center m-auto overflow-auto min-w-min max-w-4xl grid grid-flow-row ">
      <div>
        <DividendChart historical={historical} charttype={charttype} />
      </div>
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
                  <span className="text-xs">
                    {yearData.date.substr(5, 2)}월
                  </span>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {selectedCols.map((col, i) => (
              <tr key={i}>
                <td className="p-3 text-sm text-center">{EntoKo[col].ko}</td>
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
    </div>
  );
}

export default DVPage;
