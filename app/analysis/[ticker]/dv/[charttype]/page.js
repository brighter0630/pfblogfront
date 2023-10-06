import FinancialTable from "@/components/FinancialTable";
import { getRatioData, getDVData } from "@/lib/getFinancialData";
import DividendChart from "@/components/DividendChart";
import DividendCard from "@/components/DividendCard";
import BasicFrame from "@/components/BasicFrame";

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
      <div className="grid grid-flow-col">
        <div className="min-w-[700px]">
          <DividendChart historical={historical} charttype={charttype} />
        </div>
        <div className="min-w-[300px]">
          <h1 className="text-center text-xl font-medium">배당 정보</h1>
          <BasicFrame>
            <DividendCard historical={historical}></DividendCard>
          </BasicFrame>
        </div>
      </div>
      <div>
        <FinancialTable yearsData={yearsData} selectedCols={selectedCols} />
      </div>
    </div>
  );
}

export default DVPage;
