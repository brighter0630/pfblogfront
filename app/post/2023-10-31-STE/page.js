import Ptag from '@/components/BlogComponents/Ptag';
import { getISForPost, getRatioForPost } from '@/components/BlogContentsComponents/libs/getFinancialDataForPost';
import PriceChart from '@/components/BlogContentsComponents/PriceChart';
import getPriceChartData from '@/components/BlogContentsComponents/libs/getPriceChartData';
import FinancialTable from '@/components/FinancialTable';
import getFinancialDataForPost from '@/components/BlogContentsComponents/libs/getFinancialDataForPost';

export const blogMeta = {
  title: "성장하는 배당성장주 STE",
  metaDesc:
    "배당만 주는 배당주는 채권투자와 같다. 반면 성장하는 배당주는 배당에 더해 주가 상승도 노려볼 수 있다. Steris plc(STE)는 과연 성장하는 배당성장주일까?",
  date: "2023-10-30",
  author: "이웃집백만장자",
  tags: ["배당성장주", "STE", "소형배당성장주"],
  published: true,
};

export default async function Page() {
	const chartData = await getPriceChartData('STE', '10years', '2023-10-30');
	//	const colsIS = ['revenue', 'ebit', 'netIncome'];
	//	const colsRatio = ['payoutRatio', 'fcf', 'roe', 'roic'];

	//	const isData1 = await getISForPost('STE', '2023', 7);
	//	const isData2 = await getISForPost('STE', '2010', 7);
	//	const ratioData1 = await getRatioForPost('STE', '2023', 7);

	return (
		<article>
			<h3>Steris, plc는 무슨 회사인가?</h3>
			<Ptag>Steris, plc(이하 STE)는 자신의 비즈니스를 다음과 같이 설명하고 있다.</Ptag>
			<blockquote>STERIS is a leading global provider of products and services that support patient care with an emphasis on infection prevention. WE HELP OUR CUSTOMERS CREATE A HEALTHIER AND SAFER WORLD by providing innovative healthcare, life sciences and dental products and services. We offer our Customers a unique mix of innovative consumable products, such as detergents, endoscopy accessories, barrier products, and other products and services.</blockquote>
			<Ptag>요약하면, 의료장비 업체로써 특히 감염 예방에 초점을 맞춘 제품 포트폴리오를 보유하고 있는 기업이다. 의료에 있어서 감염 예방은 상당히 중요하다. 기본적으로 모든 시술과 수술에는 감염에 대한 리스크가 있기 때문이다. 우리의 피부는 외부 감염원으로부터 우리 몸을 지켜주는 가장 기본적이고도 중요한 기능을 담당하는데, 대부분의 시술과 수술은 피부 절개가 필수다. 주사를 놓는 것 또한 피부를 관통하므로 감염에 대한 리스크가 있는 것.</Ptag>
			<Ptag>게다가 감염병을 예방하는 것은 사실 치료하는 것 보다 훨씬 중요하다. 개인의 <strong>well-being</strong> 측면에서도 그렇지만 <strong>사회적 의료비용</strong> 측면에서도 예방하는 것이 치료하는 것보다 훨씬 싸다. 의료가 아무리 발달하고 시간이 아무리 흐른다고 한들, 감염 예방 의료기기와 약품에 대한 수요는 앞으로도 계속해서 존재할 것이다.</Ptag>
			<h3>STE의 주가 흐름</h3>
			<Ptag>배당성장주 투자에 있어서 주가의 흐름이 중요할까? 장기적인 마인드를 가진 투자자라면 사실 크게 중요하지 않아야 한다. 단, 예외가 있다. 그건 바로 최근 주가가 급격하게 상승했는 지 여부다. 배당을 주는 주식에 투자하지만 주가도 당연히 중요하다. 내가 투자한 기업의 가치가 오르길 원치 않는 사람이 어디있을까? 기업의 가치가 상승하기 위해서는 <strong>&lsquo;시장에서 최소한으로 주목받았을 때 사야한다.&rsquo;</strong> 간접적으로 이를 확인하는 방법은 최근 3개월, 1년 사이에 주가가 급격하게 상승했는 지 유무다.</Ptag>
			<PriceChart chartData={chartData} />
			<Ptag>STE의 주가를 보면 계속해서 우상향하다가 2022년 하반기에 다른 주식들과 마찬가지로 어느 정도의 조정을 받았다. 다시 상승세를 보이다가 최근 매크로의 악화로 다소 조정 받는 모습을 보인다. 하지만 &lsquo;거의 항상&rsquo; 매크로 악화로 인한 주가 하락은 현금을 보유한 투자자들에게 기회다.&rsquo; 매크로 악화로 인한 주가 하락은 현금을 보유한 투자자들에게 기회다.&rsquo; 매크로 악화로 인한 주가 하락은 현금을 보유한 투자자들에게 기회다.&rsquo; 매크로 악화로 인한 주가 하락은 현금을 보유한 투자자들에게 기회다.</Ptag>
			{/* <FinancialTable yearsData={isData1} selectedCols={colsIS} /> */}
			<Ptag>매출과 이익은 계속해서 우상향 중이다. 당장 매출과 이익 실적이 좋다고 해서 바로 매수해야 하는 것은 아니다. 매출과 이익 실적을 볼 때는 경기 좋지 않았던 시기의 매출과 이익 성장을 살펴보며 미래의 실적을 가늠해 보아야 한다. 미래는 예측할 수 없는 것이지만, 만약 과거 어려운 시기에 비즈니스가 계속 성장해나갔다면 미래의 위기에서도 잘 성장해나갈 가능성이 높다. </Ptag>
			{/* <FinancialTable yearsData={isData2} selectedCols={colsIS} /> */}
			<Ptag>가장 가까운 위기다운 위기였던 금융위기 시기를 보자. 위의 표에서 보듯 더디지만 꾸준하게 성장했던 모습이다. 성장주보다는 다소 느리지만, 금융위기 상황에서도 매출과 이익이 꾸준하게 성장했다. 그렇게 성장할 수 있었던 건 Steris, plc.의 비즈니스 자체의 특성 덕분이다. 모든 의료 시술에는 감염에 대한 리스크가 따르고 경제가 어렵다고 해도 시술, 수술 관련 감염에 돈을 아끼는 환자와 의료진은 없기 때문이다. 위의 기록이 없다고 하더라도 이런 종류의 비즈니스는 경기를 타지 않고 계속해서 성장할 것이라 예상할 수 있다.</Ptag>
			{/* <FinancialTable yearsData={ratioData1} selectedCols={colsRatio} /> */}
			<Ptag>배당수익률은 그렇게 높지 않은 1% 정도의 수준이다. 하지만 올해에도 여전히 배당금을 인상했고, 앞으로도 배당금을 지속해서 인상할 것으로 예상된다. Pay-out Ratio도 낮아 배당금 인상의 여력이 있다. 최근 ROE의 흐름을 보면 훌륭한 편은 아니다. 다만 경영진의 자본 배분 효율화 노력의 일환으로 배당금을 지속해서 증액시킨다면, 잉여 자본의 배당으로 배당금과 배당수익률이 오르고, 자본의 효율성도 개선되어 ROE 도 차차 개선되지 않을까 기대되는 기업이다.</Ptag>
		</article>
	)
}

