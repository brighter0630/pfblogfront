import FinancialTable from "@/components/FinancialTable";
import { getBSData } from "@/lib/getFinancialData";
import { EntoKo } from "@/translation";

async function BSPage({ params }) {
  const { ticker } = params;
  const yearsData = await getBSData(ticker);
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

export default BSPage;
