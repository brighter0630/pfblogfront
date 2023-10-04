import { getCSData } from "@/app/apis/getFinancialData";
import { EntoKo } from "@/translation";

async function CSPage({ params }) {
  const { ticker } = params;
  const yearsData = await getCSData(ticker);
  const selectedCols = [
    "netIncome",
    "depreciationAndAmortization",
    "stockBasedCompensation",
    "changeInWorkingCapital",
    "investmentsInPropertyPlantAndEquipment",
    "acquisitionsNet",
    "commonStockRepurchased",
    "dividendsPaid",
    "netCashProvidedByOperatingActivities",
    "netCashUsedForInvestingActivites",
    "netCashUsedProvidedByFinancingActivities",
    "capitalExpenditure",
    "freeCashFlow",
  ];
  return (
    <div className="justify-center m-auto overflow-auto min-w-min max-w-4xl ">
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

export default CSPage;
