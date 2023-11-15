"use client";

import { useState, useEffect } from 'react';
import { finnhubClient } from '@/libs/finnhub/connect'
import Loading from '@/components/Loading';
import { getInsiderTransactions } from '@/libs/finnhub/getInsider';
import TransactionPagination from '@/components/Insider/TransactionPagination';
import BasicFrame from '@/components/BasicFrame';

export default function Page({ params }) {
	const { ticker, page } = params
	const [insiderTransactionData, setInsiderTransactionData] = useState([]);
	const [loading, setLoading] = useState(true);
	const LinesPerPage = 20;

	useEffect(() => {
		async function getData(ticker) {
			const data = await getInsiderTransactions(ticker, 1000000);
			setInsiderTransactionData(data);
			setLoading(false);
		}
		getData(ticker);
	}, [])

	if(loading) {
		return <Loading />
	} else if(insiderTransactionData.length === 0) {
		return (
			<div><span className="text-base md:text-lg text-center">내부자 거래 정보가 없습니다.</span></div>
		)
	}

	return (
		<div className="">
			<BasicFrame>
				<table className="mx-auto my-2 md:my-4 text-xs md:text-sm lg:text-base">
					<thead>
						<tr className="border-gray-400 border-b-2 p-1 md:p-3 text-xs md:text-sm font-semibold">
							<th className="min-w-[25px]">거래코드</th>
							<th className="min-w-[50px]">의미</th>
							<th className="min-w-[25px]">거래코드</th>
							<th className="min-w-[50px]">의미</th>
						</tr>
					</thead>
					<tbody className="gap-1 md:gap-2">
						<tr>
							<td className="py1 md:py-2 text-center">A</td><td className="pl-1 md:pl-2">기업으로부터의 상여</td>
							<td className="text-center">K</td><td className="pl-1 md:pl-2">스왑 거래</td>
						</tr>
						<tr>
							<td className="text-center">P</td><td className="pl-1 md:pl-2">주식시장 또는 타인으로부터의 매수</td>
							<td className="text-center">S</td><td className="pl-1 md:pl-2">주식시장 또는 타인에게로의 매도</td>
						</tr>
						<tr>
							<td className="text-center">D</td><td className="pl-1 md:pl-2">기업으로의 매도 또는 이전</td>
							<td className="text-center">F</td><td className="pl-1 md:pl-2">옵션 행사 비용 또는 세금 납부</td>
						</tr>
						<tr>
							<td className="text-center">M</td><td className="pl-1 md:pl-2">옵션의 행사 또는 전환</td>
							<td className="text-center">G</td><td className="pl-1 md:pl-2">증여</td>
						</tr>
						<tr>
							<td className="text-center">V</td><td className="pl-1 md:pl-2">Form 4에 보고된 자발적 거래</td>
							<td className="text-center">J</td><td className="pl-1 md:pl-2">기타</td>
						</tr>
					</tbody>
				</table>
			</BasicFrame>
			<div className="overflow-x-scroll">
				<table className="my-4 md:my-8 mx-auto w-11/12">
					<thead>
						<tr className="border-gray-400 border-b-2 p-1 md:p-3 text-xs md:text-sm font-semibold text-center min-w-[75px] md:min-w-[100px]">
							<th className="min-w-[75px]">제출일</th>
							<th className="min-w-[75px]">거래일</th>
							<th>이름</th>
							<th className="min-w-[50px]">거래코드</th>
							<th className="min-w-[50px]">주식여부</th>
							<th className="min-w-[50px]">거래가격</th>
							<th className="min-w-[50px]">거래량</th>
							<th className="min-w-[75px]">거래 후 보유량</th>
						</tr>
					</thead>
					<tbody>
						{insiderTransactionData.slice(LinesPerPage * (page - 1), LinesPerPage * page).map((el, index) => (
							<tr key={index} className="text-xs md:text-sm">
								<td className="text-center">{el.filingDate}</td>
								<td className="text-center">{el.transactionDate}</td>
								<td>{el.name}</td>
								<td className="text-center">{el.transactionCode}</td>
								<td className="">{el.isDerivative === true ? '스톡옵션' : '주식'}</td>
								<td className="text-right pr-2 md:pr-4">{el.transactionPrice === 0 ? "-" : el.transactionPrice.toLocaleString('en-US')}</td>
								<td className="text-right pr-1 md:pr-3">{el.change.toLocaleString('en-US')}</td>
								<td className="text-right pr-1 md:pr-3">{el.share.toLocaleString('en-US')}</td>
							</tr>
						))}
						</tbody>
					</table>
				</div>
				<TransactionPagination noOfData={insiderTransactionData.length} LinesPerPage={LinesPerPage} />
			</div>
	)
}
