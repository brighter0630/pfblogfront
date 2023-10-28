import PriceChart from '@/components/PriceChart';
import PriceChartNavbar from '@/components/PriceChartNavbar';
import { getPriceHistory } from '@/libs/getPriceHistory';
import { EntoKo } from '@/translation.js';
import GoBackButton from '@/components/GoBackButton';

export default async function IndexChart({params}) {
	const { ticker, charttype } = params;
	const decodedTicker = decodeURIComponent(ticker);
	const { historical } = await getPriceHistory(ticker)
	return (
			<div className="min-w-full">
				<div className="grid grid-flow-col justify-between">
					<h2 className="text-2xl text-gray-800 font-bold p-4">{EntoKo[decodedTicker].ko} 지수</h2>
					<GoBackButton />
				</div>
				<div className="">
					<PriceChartNavbar />
					<PriceChart historical={historical} charttype={charttype} />
				</div>
			</div>
			)
}
