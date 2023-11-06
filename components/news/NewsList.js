import Link from 'next/link';
import Image from 'next/image';
import printDateYYYYMMDDhhmm from '@/libs/printDateYYYYMMDDhhmm';
import ArticleImage from '@/components/news/ArticleImage';
import { PiNewspaperClippingThin } from 'react-icons/pi';

export default function NewsList({ newsList, newsCount, showImage }) {
	return (
		<div className="w-full text-black text-opacity-80 p-2 md:py-4 text-sm md:text-base border-2 mt-4">
			<div className="flex">
				<PiNewspaperClippingThin className="text-lg lg:text-xl mx-1 md:mx-2 my-auto" /><h3 className="text-base font-bold md:text-lg p-1 lg:p-2">최신 뉴스</h3>
			</div>
			{newsList.slice(0, newsCount).map((news, i) => (
				<li key={i} className="list-none">
					<article className="flex flex-col">
						<Link href={news.url} target='_blank' rel='noopener noreferrer'>
							<ArticleImage newsUrl={news.image} width={350} height={250} className={`${showImage ? 'hidden xl:flex' : 'hidden'}`} />
							<h1 className="font-bold">{news.headline}</h1>
							<div className="text-right">
								<span className="text-xs md:text-sm">{printDateYYYYMMDDhhmm(news.datetime*1000)}</span>
							</div>
							<p className="pb-3">{news.summary}</p>
						</Link>
						<hr className="py-3" />
					</article>
				</li>
			))}
		</div>
	);
}
