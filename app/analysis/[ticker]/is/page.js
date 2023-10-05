import FinancialTable from "@/components/FinancialTable";
import { getISData } from "@/lib/getFinancialData";

async function ISPage({ params }) {
  const { ticker } = params;
  const yearsData = await getISData(ticker);
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
    <div className="justify-center m-auto overflow-auto min-w-min max-w-4xl ">
      <FinancialTable yearsData={yearsData} selectedCols={selectedCols} />
    </div>
  );
}

export default ISPage;
