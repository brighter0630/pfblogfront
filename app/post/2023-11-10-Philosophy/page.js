import Ptag from '@/components/BlogComponents/Ptag';

export const blogMeta = {
  title: "배당성장주 편입의 기본적인 조건",
  metaDesc:
    "배당 성장주 포트폴리오에 편입되기 위한 조건을 정리해본다.",
  date: "2023-11-10",
  author: "이웃집백만장자",
  tags: ["투자철학", "배당성장주", "편입조건"],
  published: true,
};

export default function Page () {
	return (
		<article>
			<h3>배당성장주의 기본적인 조건</h3>
			<Ptag>
				배당성장주 포트폴리오에 편입되기 위해서는 간단하지만 의미있는 조건을 만족해야 한다. 이 조건은 겉으로 보기엔 단순해 보일 지 모르겠지만, 사실 이 조건을 모두 만족하는 기업은 그렇게 많지 않다. 이 조건에 만족한다 해도 최종적으로 포트폴리오에 편입되기 위해서는 <strong>최소한의 질적 분석을 통해 기업 선별 과정을 통과해야</strong> 한다.
			</Ptag>
			<Ptag>
				배당성장주 포트폴리오에 편입되기 위한 조건은 다음과 같다.
			</Ptag>
			<Ptag>
					<li>주당 매출(PSR)과 주당 이익(EPS)이 <strong>전반적으로 상승 추세</strong>여야 한다.</li>
					<li>&ldquo;지속가능한&rdquo; 배당금이 매년 증가해야 한다.</li>
					<li>배당은 10년 간 2배 이상 증가해야 한다.</li>
					<li>Pay out Ratio 가 50% 보다 작아야 한다.</li>
					<li>이익도 10년 간 최소 2배 이상 증가해야 한다.</li>
					<li>높은 ROE 또는 ROIC를 유지해야 한다.</li>
					<li>산업의 장기적 전망이 좋아야 한다.</li>
			</Ptag>
			<h3>배당성장주 탐색 과정</h3>
			<Ptag>
				위의 조건을 만족하는 기업은 그렇게 많지 않다. 내가 배당성장주 포트폴리오를 구성하는 과정은 이렇다. 우선 &ldquo;Dividend Achievers&rdquo; 또는 &ldquo;Dividend Aristocrats&rdquo;에서 기업 탐색을 시작한다. 그리고 재무상태표와 손익계산서, 그리고 여러가지 재무 비율을 살펴보고 스크리닝 통과 여부를 결정한다. 그 다음 주가가 적절한 가격에 거래되고 있는 지 확인한 뒤, 10-K나 기업보고서를 읽고 비즈니스의 특성을 파악한다.
			</Ptag>
			<Ptag>
				여기서 비즈니스의 특성이 중요하다. 그 기업의 비즈니스가 경기변동형인지, 그렇다면 지금의 경기 사이클은 어디인지, 주가는 경기 사이클을 반영했는 지를 확인해야 한다. 경기를 전혀 타지 않는 사업은 거의 없는데, 그런 경우엔 주가가 싸게 거래되는 때가 흔치 않다. 따라서 2022년 9월과 같이 거시 경제의 전망이 매우 좋지 않은 경우에 한하여 주식 매수를 고려해야 한다. 
			</Ptag>
			<h3>매수 버튼을 누르기 전에</h3>
			<Ptag>
				이 과정이 모두 끝난다고 바로 주식을 매수하는 건 아니다. 마지막으로 주가 차트를 확인해야 한다. 배당성장주 투자가 주가 차트라니? 라고 생각할 수 있겠지만, 주가 차트는 누구나 확인해야 한다. 주가 차트에 선을 긋고 기술적 분석을 하자는 건 아니다. 단, 시장 참여자들의 관심이 이 기업, 이 산업에 몰려 있는 지 아닌 지를 판단해야 하는 것이다. 투자자들의 관심이 너무 크면, 주가는 제 가치보다 높을 수 밖에 없다. 꼭 그렇지 않더라도, 적어도 언젠가는 높은 수준의 관심이 낮아질 수 밖에 없을 것이다.
			</Ptag>
			<Ptag>
				매수 시점에서는 주가는 싸면 쌀수록 좋다. 문제는 이것을 PER로 판단하면 안된다. PER가 높은 건 그만큼 그 기업의 성장성을 시장에서 높게 평가하고 있는 것일 뿐이다. 개인적으로 PER보다는 역사적인 관점에서의 주가 수준이 현재 가격이 싼지 비싼지를 판단하는 중요한 지표라고 생각한다. 만약 최근 6개월 간 주가가 3배 오른 기업이 PER 15에 거래되고 있다면, 최근 6년 간 3배 오른 기업보다 고평가 되고 있을 가능성이 높을 것이다. 항상 그런 것은 아니지만, 단기간 주가가 급등한 기업은 주의해야 한다.
			</Ptag>
		</article>
	)
}
