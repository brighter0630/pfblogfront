import FinancialTable from "@/components/FinancialTable";
import { getISData } from "@/libs/getFinancialData";

async function ISPage({ params }) {
  const { ticker } = params;
  const yearsData = await getISData(ticker);
  const selectedCols = [
    "revenue",
    "costOfRevenue",
    "grossProfit",
    "sellingGeneralAndAdministrativeExpenses",
    "interestIncome",
    "interestExpense",
    "depreciationAndAmortization",
    "ebitda",
    "operatingIncome",
    "operatingIncomeRatio",
    "netIncome",
    "eps",
    "weightedAverageShsOutDil",
  ];
  return (
    <div className="justify-center m-auto overflow-auto min-w-min max-w-4xl ">
      <FinancialTable yearsData={yearsData} selectedCols={selectedCols} />
    </div>
  );
}

export default ISPage;
