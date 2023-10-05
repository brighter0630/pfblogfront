import FinancialTable from "@/components/FinancialTable";
import { getCSData } from "@/lib/getFinancialData";

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
      <FinancialTable yearsData={yearsData} selectedCols={selectedCols} />
    </div>
  );
}

export default CSPage;
