import FinancialTable from "@/components/FinancialTable";
import { getRatioData, getDVData } from "@/libs/getFinancialData";
import DividendChart from "@/components/DividendChart";
import DividendCard from "@/components/DividendCard";

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
    <div className="justify-center m-auto overflow-auto min-w-min w-full grid grid-flow-row ">
      <div className="grid grid-flow-col">
        <DividendChart historical={historical} charttype={charttype} />
        <DividendCard historical={historical}></DividendCard>
      </div>
      <FinancialTable yearsData={yearsData} selectedCols={selectedCols} />
    </div>
  );
}

export default DVPage;
