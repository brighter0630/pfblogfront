import FinancialTable from "@/components/FinancialTable";
import { getISData } from "@/libs/getFinancialData";
import { getIS } from '@/libs/finnhub/getFinance';

async function ISPage({ params }) {
  const { ticker } = params;
	const yearsData = await getIS(ticker)
	// const yearsData = await getISData(ticker);
  const selectedCols = [
    "revenue",
    "costOfGoodsSold",
    "grossIncome",
    "sgaExpense",
    "researchDevelopment",
    "totalOperatingExpense",
		"totalOtherIncomeExpenseNet",
    "interestIncomeExpense",
    "ebit",
    "netIncome",
		"netIncomeAfterTaxes",
    "dilutedEPS",
    "dilutedAverageSharesOutstanding",
  ];
  
  return (
    <div className="justify-center m-auto w-full">
      <FinancialTable yearsData={yearsData} selectedCols={selectedCols} />
    </div>
  );
}

export default ISPage;
