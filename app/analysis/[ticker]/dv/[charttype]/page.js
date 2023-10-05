import FinancialTable from "@/components/FinancialTable";
import { getRatioData, getDVData } from "@/lib/getFinancialData";
import DividendChart from "@/components/DividendChart";

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
        <FinancialTable yearsData={yearsData} selectedCols={selectedCols} />
      </div>
    </div>
  );
}

export default DVPage;
