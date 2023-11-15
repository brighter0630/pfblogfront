"use client";

import { useEffect, useState } from 'react';
import { finnhubClient } from '@/libs/finnhub/connect';
import Loading from '@/components/Loading';
import TransactionPagination from '@/components/Insider/TransactionPagination';
import { printTimesAgo } from '@/libs/printTimesAgo';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export const changeSearchWord = (baseUrl, toWhat) => {
	const baseUrlArray = baseUrl.split('/');
	baseUrlArray[5] = String(toWhat).replace(/\s+|\.+/g, "");
	return baseUrlArray.join('/');
}

export default function Page({ params }) { 
	const { ticker, searchWord, page } = params;
	const LinesPerPage = 10;
	const [loading, setLoading] = useState(true);
	const [analystOpinions, setAnalystOpinions] = useState();
	const pathName = usePathname();

	useEffect(() => {
		async function getData () {
			const res = await fetch(`https://financialmodelingprep.com/api/v4/price-target?symbol=${ticker}&apikey=${process.env.stockAPIKEY}`, { method: 'GET'});
			const data = await res.json();
			const filtered = searchWord === 'byticker' ? data : data.filter(el => el.analystName && el.analystCompany && el.analystName.replace(/\s+|\.+/g, "") === searchWord || el.analystCompany.replace(/\s+|\.+/g, "") === searchWord);

			setAnalystOpinions(filtered);
			setLoading(false);
		}
		getData();
	}, [searchWord])

	if(loading) {
		return (
			<Loading />
		)
	}

	return (
		<div>
			<div className="overflow-x-scroll">
				<table className="my-4 md:my-8 mx-auto w-11/12">
					<thead>
						<tr className="border-gray-400 border-b-2 p-1 md:p-3 text-xs md:text-sm font-semibold text-center min-w-[75px] md:min-w-[100px]">
							<th className="min-w-[75px]">티커</th>
							<th className="min-w-[75px]">제출일</th>
							<th className="min-w-[50px]">목표가</th>
							<th className="min-w-[50px]">거래가격</th>
							<th className="min-w-[100px]">애널리스트 기업</th>
							<th className="min-w-[100px]">애널리스트 이름</th>
						</tr>
					</thead>
					<tbody>
						{analystOpinions.slice(LinesPerPage * (page - 1), LinesPerPage * page).map((el, index) => (
							<tr key={index} className={`text-xs md:text-sm ${new Date() - new Date(el.publishedDate) < 24 * 10 * 60 * 60 * 1000 ? "font-bold" : "font-light"}`}>	
								<td className="text-center py-1 md:py-2"><Link href={changeSearchWord(pathName, 'byticker')}>{el.symbol}</Link></td>
								<td className="text-center"><Link target='_blank' rel='noopener noreferrer' href={el.newsURL}>{printTimesAgo(el.publishedDate)}</Link></td>
								<td className="text-center"><Link target='_blank' rel='noopener noreferrer' href={el.newsURL}>{el.adjPriceTarget.toLocaleString('en-US')}</Link></td>
								<td className="text-center"><Link target='_blank' rel='noopener noreferrer' href={el.newsURL}>{el.priceWhenPosted.toLocaleString('en-US', { maximumFractionDigits: 2, minimumFractionDigits: 2 })}</Link></td>
								<td className="text-left pl-1 md:pl-3"><Link href={changeSearchWord(pathName, el.analystCompany)}>{el.analystCompany}</Link></td>
								<td className="text-left pl-1 md:pl-3"><Link href={changeSearchWord(pathName, el.analystName)}>{el.analystName}</Link></td>
							</tr>
						))}
						</tbody>
					</table>
				</div>
				<TransactionPagination noOfData={analystOpinions.length} LinesPerPage={LinesPerPage} />
			</div>
	)
}
