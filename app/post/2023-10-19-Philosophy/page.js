import FinancialTable from "@/components/FinancialTable";
import { getISData } from "@/libs/getFinancialData";
import PriceChart from "@/components/BlogContentsComponents/PriceChart";
import getPriceChartData from "@/components/BlogContentsComponents/libs/getPriceChartData";
import Link from "next/link";
import Ptag from "@/components/BlogComponents/Ptag";

export const metaData = {
  title: "배당성장주 투자는 배당주 투자가 아니다.",
  metaDesc:
    "배당성장주는 흔히 배당주와 쉽게 혼동되며 오해받는다. 배당성장주와 배당주는 명확히 다르다. 그 차이점에 대해 정리해보자.",
  date: "2023-10-19",
  author: "이웃집백만장자",
  tags: ["투자철학", "배당성장주", "배당주", "ADP", "AWK"],
  published: true,
};

async function Page() {
  const yearsDataT = await getISData("T");
  const yearsDataADP = await getISData("ADP");
  const selectedCols = ["revenue", "operatingIncome", "netIncome"];
  const chartDataT = await getPriceChartData("T", "10years", "2023-10-19");
  const chartDataADP = await getPriceChartData("ADP", "10years", "2023-10-19");

  return (
    <div>
      <h2>배당주란 무엇인가?</h2>
      <Ptag>
        흔히 말하는 배당주는 배당을 꾸준히 주는 주식이다. 보다 구체적으로
        정의하자면,
        <strong>
          배당주란 평균 이상의 배당수익률의 배당금을 꾸준하게 지급하는 주식
        </strong>
        이다. 기업이 배당금을 꾸준하게 지급하기 위해서는 안정적인 비즈니스
        모델이 필요하다. 예를 들면, 수도나 전기와 같은 유틸리티 산업의 기업을
        생각해 볼 수 있다. 물과 전기는 인간이 삶을 영위하는 데 있어서 필수적인
        요소로써 매우 안정적인 매출과 이익을 보인다.
      </Ptag>
      <Ptag>
        이런 기업은 안정적인 대신 이익의 성장성이 낮다. 따라서 이런 기업들은
        자본을 가장 효율적으로 사용하기 위해 잉여현금을 항상 배당으로 주주들에게
        나누어준다. 비즈니스를 유지하는데 필요한 <strong>최소한의 자산</strong>
        을 보유하기 위함이다. 배당을 받은 주주들은 배당금으로 성장하는 기업의
        지분에 투자하는 등 자본을 더욱 효율적으로 사용할 수 있다.
      </Ptag>
      <h2>배당주의 전형적인 예(AT&T: T)</h2>
      <FinancialTable
        yearsData={yearsDataT.slice(0, 5)}
        selectedCols={selectedCols}
      />
      <Ptag>
        위에서 보듯, {"  "}
        <Link href={"/analysis/T/pc/3months"}>AT&T(T)</Link>과 같은 유틸리티
        기업은 이익 안정성이 매우 뛰어나다. 하지만 이는 곧 이익 성장성이 낮다는
        것을 의미한다. 그 결과 배당금과 배당수익률은 훌륭하지만, 이익이 크게
        성장하지 않으므로 주가도 크게 오르지 않는 경향이 있다.
      </Ptag>
      <PriceChart chartData={chartDataT} />
      <Ptag>
        T의 주가를 보면, 10년 간 오히려 주가가 하락했다. 2022년 및 최근의 실적이
        좋지 않게 나온 것도 부진한 주가에 영향을 줬다. 하지만 그게 아니었다
        하더라도 최근 1년을 제외한 지난 9년 간 주가는 횡보를 면치 못했다.
        나스닥과 S&P500이 크게 상승한 것과 대비되는 주가 흐름이다.
      </Ptag>
      <h2>배당성장주는 배당주와 다르다.</h2>
      <Ptag>
        배당성장주는 AT&T와 같은 배당주와 분명하게 다르다. 단지, 배당이 매년
        증가한다는 이유에서만은 아니다. 배당주와 배당성장주 사이에는 조금 더
        근본적인 차이가 있다. 그건 바로, 이익의 성장성이다.
      </Ptag>
      <Ptag>
        배당성장주는 배당을 꾸준히 증가시켜가는 기업이다. 배당을 꾸준하게
        증가시키는 기업은, 어느정도 미래의 이익을 예측할 수 있다. 특히 경영진이
        배당을 매년 증가시키고 있다면 더욱 그렇다. 경영진은 그 배당금이 미래에
        불어닥칠 위기를 고려하더라도 배당금 만큼의 현금을 잉여 자본으로 판단한
        것이다. 배당금을 그만큼 늘렸다는 건, 미래의 이익도 비슷한 속도로 상승할
        것이라 가정할 수 있다.
      </Ptag>
      <h2>배당성장주의 흔한 예(Automatic Data Processing, Inc.(ADP)</h2>
      <Ptag>
        <Link href={"/analysis/ADP/pc/3months"}>
          Automatic Data Processing, Inc.(ADP)
        </Link>
        의 경우를 보자. 이 기업은 24년 간 꾸준하게 배당금을 증액시켜온{" "}
        <strong>Dividend Aristocrats</strong>이다. 물론 배당금 증액과 비슷한
        속도로 이익도 장기적으로 꾸준히 증가해왔다.
      </Ptag>
      <FinancialTable
        yearsData={yearsDataADP.slice(0, 5)}
        selectedCols={selectedCols}
      />
      <Ptag>
        ADP의 매출과 이익은 꾸준히 상승하고 있다. 지난 5년만 보더라도, 심지어
        최근 금리 인상으로 인해 대부분의 기업의 실적이 부진했음에도 불구하고
        ADP의 매출은 지난 5년 간 무려 50% 가깝게 상승했다.
      </Ptag>
      <PriceChart chartData={chartDataADP} />
      <Ptag>
        그에 발맞춰 주가도 최근 10년 간 거의 3배 가깝게 올랐다. 기업의 이익 즉,
        주당 순이익(EPS)가 상승하는 만큼, 주가도 상승한 것이다. 배당성장주
        이야기를 하면서 자꾸 이익 성장에 대한 이야기를 하는 이유는 배당의 성장과
        이익의 성장 사이에는 뗄레야 뗄 수 없는 관계가 있기 때문이다. 어느
        정도는, 과거의 배당금 증액이 미래의 이익 상승을 대변한다.
      </Ptag>
      <h2>배당의 상승 이외의 중요한 것들</h2>
      <Ptag>
        미래 이익을 예측하는 데 있어 배당의 상승이 가장 중요하다면, 과거의 배당
        증액만 놓고 투자를 해도 되는 셈이다.{" "}
        <strong>하지만 실제 투자는 그렇게 간단하지 않다.</strong> 미래의 이익,
        그러니까 미래 실적의 향상을 보완하기 위해 기업에 대한 질적 분석을
        시행해야 한다.
      </Ptag>
      <Ptag>
        여기서 &apos;질적분석&apos;이란 산업과 기업의 장기적인 성장성을 확인하는
        작업이다. 이 작업은 95%의 상식과 5%의 조사로 이루어진다. 10년 이상의
        장기적 관점에서 볼 때 투자 대상 기업이 여전히 성장할 수 있는 산업에 속해
        있고, 어떤 형태로든 <strong>경제적 해자</strong>를 보유하고 있다면,
        과거와 현재를 종합해 볼 때, 투자자는 어렵지 않게 그 기업이 앞으로도
        배당금과 이익을 증가시켜줄 수 있으리라 예측할 수 있을 것이다.
      </Ptag>
    </div>
  );
}

export default Page;
