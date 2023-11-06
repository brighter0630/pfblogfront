import PriceChart from '@/components/PriceChart';
import PriceChartNavbar from '@/components/PriceChartNavbar';
import { getPriceHistory } from '@/libs/getPriceHistory';
import { getStockNewsList } from '@/libs/finnhub/getNewsList';
import ArticleImage from '@/components/news/ArticleImage';
import printDate from '@/libs/printDate';
import { EntoKo } from '@/translation.js';
import GoBackButton from '@/components/GoBackButton';
import printDateYYYYMMDDhhmm from '@/libs/printDateYYYYMMDDhhmm';
import Link from 'next/link';

export default async function IndexChart({params}) {
	const { ticker, charttype } = params;
	const decodedTicker = decodeURIComponent(ticker);
	const { historical } = await getPriceHistory(ticker)
	const today = printDate(new Date());
	const fromDate = printDate(new Date((new Date()).setMonth((new Date()).getMonth() - 3)));
	const newsData = await getStockNewsList(ticker, fromDate, today);

	return (
			<div className="w-full text-gray-800 p-3 md:p-6">
				<h2 className="text-2xl font-bold p-4">{EntoKo[decodedTicker].ko} 지수</h2>
				<div className="">
					<PriceChartNavbar />
					<PriceChart historical={historical} charttype={charttype} />
				</div>
				<h2 className = "text-base md:text-lg font-bold p-2 md:p-4">{EntoKo[decodedTicker].ko} 관련 뉴스</h2>
				<div>
					{newsData.slice(0, 6).map((news, i) => (
						<li key={i} className="list-none">
							<Link href={news.url} target='_blank' rel='noopener noreferrer'>
								<section className="my-2 md:my-4 lg:my-6">
									<h3 className="text-base lg:text-lg font-bold">{news.headline}</h3>
									<h5 className="text-right text-xs lg:text-sm my-1 md:my-2">{printDateYYYYMMDDhhmm(news.datetime*1000)}</h5>
									<div className="float-left mx-1 lg:mx-2">
										<ArticleImage newsUrl={news.image} width={100} height={100} />	
									</div>
									<p className="mt-1 md:my-2">&nbsp;&nbsp;{news.summary}</p>
								</section>
							</Link>
							<hr />
						</li>
					))}
				</div>
			</div>
			)
}
