import FinancialTable from "@/components/FinancialTable";
import { getBSData } from "@/libs/getFinancialData";

async function BSPage({ params }) {
  const { ticker } = params;
  const yearsData = await getBSData(ticker);
  const selectedCols = [
    "cashAndCashEquivalents",
    "cashAndShortTermInvestments",
    "netReceivables",
    "inventory",
    "propertyPlantEquipmentNet",
    "longTermInvestments",
    "accountPayables",
    "shortTermDebt",
    "longTermDebt",
    "netDebt",
    "totalLiabilities",
    "totalEquity",
    "totalAssets",
  ];
  return (
    <div className="justify-center m-auto overflow-auto min-w-min w-full">
      <FinancialTable yearsData={yearsData} selectedCols={selectedCols} />
    </div>
  );
}

export default BSPage;
