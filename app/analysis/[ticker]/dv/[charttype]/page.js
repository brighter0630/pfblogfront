import FinancialTableRatio from "@/components/FinancialTableRatio";
import { getRatioData, getDVData } from "@/libs/getFinancialData";
import DividendChart from "@/components/DividendChart";
import DividendCard from "@/components/DividendCard";
import { getRatio } from '@/libs/finnhub/getFinance';

async function DVPage({ params }) {
  const { ticker, charttype } = params;
	const yearsData = await getRatio(ticker);
  const { symbol, historical } = await getDVData(ticker);
	const selectedCols = [
		'receivablesTurnover',
		'inventoryTurnover',
		'longtermDebtTotalAsset',
		'payoutRatio',
		'grossMargin',
		'operatingMargin',
		'pretaxMargin',
		'netMargin',
		'fcfMargin',
		'salesPerShare',
		'ebitPerShare',
		'eps',
		'pb',
		'pe',
		'ps',
		'roe',
		'roa',
		'roic',
	];

  return (
    <div className="justify-center m-auto w-full grid grid-flow-row ">
      <div className="flex flex-col md:flex-row">
				<DividendChart historical={historical} charttype={charttype} />
				<DividendCard historical={historical}></DividendCard>
      </div>
			<FinancialTableRatio yearsData={yearsData} selectedCols={selectedCols} />
    </div>
  );
}

export default DVPage;
