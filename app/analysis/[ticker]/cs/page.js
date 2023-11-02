import FinancialTable from "@/components/FinancialTable";
// import { getCSData } from "@/libs/getFinancialData";
import { getCS } from '@/libs/finnhub/getFinance';

async function CSPage({ params }) {
  const { ticker } = params;
  const yearsData = await getCS(ticker);
  const selectedCols = [
    "netIncomeStartingLine",
    "depreciationAmortization",
    "stockBasedCompensation",
    "changesinWorkingCapital",
		"issuanceReductionCapitalStock",
		"issuanceReductionDebtNet",
    "cashDividendsPaid",
    "netOperatingCashFlow",
    "netInvestingCashFlow",
    "netCashFinancingActivities",
    "capex",
    "fcf",
  ];
  return (
    <div className="justify-center m-auto overflow-auto min-w-min w-full">
      <FinancialTable yearsData={yearsData} selectedCols={selectedCols} />
    </div>
  );
}

export default CSPage;
