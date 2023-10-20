import React from "react";
import BiaxialBarChart from "@/components/BlogContentsComponents/BiaxialBarChart";
import PriceChart from "../../../components/BlogContentsComponents/PriceChart";
import getPriceChartData from "../../../components/BlogContentsComponents/libs/getPriceChartData";
import { elderlyPopulation } from "./age";
import SimpleLineChart from "../../../components/BlogContentsComponents/SimpleLineChart";
export const data = [
  {
    name: "Jun 2023",
    매출: 4878,
    영업이익: 407,
  },
  {
    name: "Mar 2023",
    매출: 4821,
    영업이익: 460,
  },
  {
    name: "Dec 2022",
    매출: 4586,
    영업이익: 509,
  },
  {
    name: "Sep 2022",
    매출: 4761,
    영업이익: 288,
  },
  {
    name: "Jun 2022",
    매출: 4641,
    영업이익: 390,
  },
  {
    name: "Mar 2022",
    매출: 4750,
    영업이익: 390,
  },
  {
    name: "Dec 2021",
    매출: 4718,
    영업이익: 568,
  },
  {
    name: "Sep 2021",
    매출: 4849,
    영업이익: 155,
  },
  {
    name: "Jun 2021",
    매출: 4607,
    영업이익: 407,
  },
];

export const metaData = {
  title: "배당성장주 BDX의 기업 분석",
  metaDesc:
    "Dividend Achievers 중 하나인 BDX에 대해 알아보자. 배당성장주 투자의 철학에 알맞는가? 배당을 꾸준히 늘려 왔는가? 매출과 이익은 꾸준히 늘어나는가? 자본배분은 잘 이루어지고 있는가? 배당은 안전한가?",
  date: "2023-10-20",
  author: "이웃집백만장자",
  tags: ["BDX", "배당성장주", "기업분석"],
};

async function Page() {
  const chartData = await getPriceChartData("BDX", "10years", "2023-10-20");
  return (
    <article>
      <h2>Becton Dickinson & Co.에 대해 알아보자.</h2>
      <p>
        이 기업은 <strong>'Dividend Achievers'</strong> 리스트에서 찾은
        기업이다. Dividend Achievers는 배당을 최소 10년 이상 꾸준히 늘려온
        기업을 일컫는 표현이다. 하지만 BDX는 무려 <strong>50년</strong> 동안이나
        배당을 꾸준하게 증액시켜왔다. 50년이라는 숫자가 우습게 느껴질 지
        모르겠으나 미국 기업 중 25년 이상 배당을 지급하고 증액한{" "}
        <strong>Dividend Aristocrats</strong>은 65개 기업에 불과하고 50년 이상
        배당을 지급하고 증액한 <strong>Dividend Kings</strong>는 그것보다 더
        적은 48개의 기업 뿐이다.
      </p>
      <h3>사업 부문</h3>
      <p>
        BDX는 IV 카테터, 펌프 등을 생산, 판매하는 BD Medical과 검사, 진단기기를
        생산, 판매하는 BD Life Sciences 부문으로 나뉘고, 수술과 시술에 필요한
        제품을 판매하는 BD Interventional 이 있다. 2022년 4월에는 당뇨 사업
        부문을 분사하였다.
      </p>
      <BiaxialBarChart data={data} />
      <p>
        이후 투자자들의 관심은 BDX이 <strong>Embecta</strong>를 분사한 이후
        실적이 둔화되지 않는 지 여부였다. 위의 분기별 실적에서 보듯, 다행히
        BDX의 실적은 완만한 상승세를 유지하고 있다. 영업이익은 QoQ 기준으로 보면
        금리 인상으로 인해 경기가 어려웠던 2022년 2023년에도 상승 중이다. YoY
        기준 감소하는 모습이나 BDX는 10-K 에서 다음과 같이 말하고 있다.
      </p>
      <blockquote>
        BD’s worldwide sales are not generally seasonal, with the exception of
        certain medical devices in the Medication Delivery Solutions business
        unit, and flu diagnostic products in the Integrated Diagnostic Systems
        business unit, both of which relate to seasonal diseases such as
        influenza.
      </blockquote>
      <p>
        즉, 일반적으로 보면 BDX의 실적에 계절성은 없으나 인플루엔자의 영향으로
        진단키트 등이 더 많이 팔리는 시기가 있다는 설명이다. 이 이야기를
        감안하여 실적 추세를 보면, 실제로 10월부터 12월까지가 포함된 분기의
        영업이익이 가장 높은 것을 확인할 수 있다.
      </p>
      <h2>주가와 실적</h2>
      <PriceChart chartData={chartData} />
      <p>
        주가는 실적만큼이나 횡보 중이다. 최근 10년 간 매출은 두배, 영업이익은
        50% 가량 증가했지만, 최근 3년 간의 실적만 보면 변화가 미미하다. 그에
        맞게 주가도 최근 4년 간 횡보 중이다.
      </p>
      <p>
        다만 긍정적으로 생각해 볼 것은 산업의 전망이다. 제약, 헬스케어 산업은
        앞으로의 성장 가치가 매우 뛰어난 분야다. 노인 인구는 계속해서 증가
        중이고, 앞으로도 고령화는 20년 이상 지속될 메가 트렌드이기 때문이다.
      </p>
      <SimpleLineChart data={elderlyPopulation} />
      <h2>결론</h2>
      <p>
        고령화라는 메가 트렌드에 부합하며, 50년 간 <strong>매년</strong> 꾸준히
        배당을 증액시켜온 기업, BDX는 배당성장주 포트폴리오에 편입시킬만한
        가치가 있다. 성장성은 다소 낮아보이지만, 그건 지금의 기업의 상황이 그런
        것일 뿐이다.
      </p>
      <p>
        다만 낮은 ROE가 지속되고 있는 모습이 자본배분의 효율성에 대해 다소
        의심하게 한다. 만약 기업의 성장성이 둔화될 것이라 판단된다면 경영진은
        더욱 더 공격적인 배당 증액을 통해 자본이 더 효율적으로 사용되도록 해야
        할 것이다. 또한 수익성이 낮은 사업부를 효율화 또는 정리하여 자본구조를
        더욱 효율적으로 배치해 볼 수도 있을 것이다.
      </p>
    </article>
  );
}

export default Page;
