import FinancialTable from "@/components/FinancialTable";
import { getISData } from "@/libs/getFinancialData";
import { useRouter } from "next/router";

async function BSPage({ params }) {
  const route = useRouter();
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

export default BSPage;
