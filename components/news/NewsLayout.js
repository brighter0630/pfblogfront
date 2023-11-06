import { getStockNewsList, getGeneralNewsList } from '@/libs/finnhub/getNewsList';
import NewsList from '@/components/news/NewsList';

export default async function NewsLayout({ ticker }) {
	let data = [];
	try {
		if(ticker === undefined) {
			data = await getGeneralNewsList();
		} else {
			data = await getStockNewsList('AAPL');
		}
	} catch (error) {
		console.error('Error Fetching News Lists', error);
	}

	return (
		<div className="overflow-y-hidden">
			<NewsList newsList={data} newsCount={7} showImage={true} />
		</div>
	)
}

