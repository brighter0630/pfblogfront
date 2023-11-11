import BasicFrame from '@/components/BasicFrame';

export default function FinancialInfoFooter () {
	return (
		<BasicFrame>
			<footer>
				<h3 className="m-2 md:m-4 text-base md:text-lg">&#8251;주의사항</h3>
				<p className="p-2 md:p-4 break-all text-justify text-xs md:text-sm lg:text-base">귀사가 제공하는 재무정보는 <strong>&quot;institutional grade&quot;</strong>의 재무 데이터로써 기존의 10-K, 10-Q 에 공시된 정보를 표준화한 데이터 입니다. 실제 미국의 핀테크 및 투자회사들이 소정의 금액을 지불하며 이용하고 있습니다. 다만 기업 보고서의 데이터를 추가 가공한 데이터로써 실제 보고서의 수치와 다소 다를 수 있습니다. 투자 의사 결정 시 참고 바랍니다. </p>
			</footer>
		</BasicFrame>
	)
}
