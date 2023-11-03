import FinancialTable from "@/components/FinancialTable";
// import { getBSData } from "@/libs/getFinancialData";
import { getBS } from '@/libs/finnhub/getFinance';

async function BSPage({ params }) {
  const { ticker } = params;
// const yearsData = await getBSData(ticker);
	const yearsData = await getBS(ticker);
  const selectedCols = [
    "cashEquivalents",
    "cashShortTermInvestments",
    "totalReceivables",
    "accountsPayable",
    "inventory",
    "propertyPlantEquipment",
    "longTermInvestments",
    "shortTermDebt",
    "longTermDebt",
    "netDebt",
    "totalLiabilities",
    "totalEquity",
    "totalAssets",
  ];
  return (
    <div className="justify-center m-auto w-full">
      <FinancialTable yearsData={yearsData} selectedCols={selectedCols} />
    </div>
  );
}

export default BSPage;
