import Pfchart from "../components/Pfchart";
import CurrentHoldings from "../components/CurrentHoldings";
import getCurrentPrice from "../libs/getCurrentPrice";
import PfDashboard from "../components/PfDashboard";
import getMinPrice from "../libs/getMinPrice";
import BasicFrame from "@/components/BasicFrame";

import summarisePortfolio from "@/libs/db/summarisePortfolio";
import { getNasdaqIndex, getSNPIndex } from "@/libs/getIndex";

export default async function Home() {
  const { summaryData } = await summarisePortfolio();
  const tickers = summaryData.map((stock) => stock.ticker);
  const currentPrices = await getCurrentPrice(tickers);
  const nasdaqIndex = await getNasdaqIndex(1);
  const snpIndex = await getSNPIndex(1);
  const minPrice = await getMinPrice("AAPL");

  return (
    <div className="main-container p-5 m-4 overflow-y-visible text-opacity-90 font-semibold text-black grid gap-5 grid-flow-row font-['NanumBarunPen']">
      <BasicFrame>
        <span className={"m-4 font-medium text-2xl"}>Portfolio 현황</span>
        <span>{minPrice[0].date.substring(0, 4)}년 </span>
        <span>{minPrice[0].date.substring(5, 7)}월 </span>
        <span>{minPrice[0].date.substring(8, 10)}일 </span>
        <span>{minPrice[0].date.substring(11, 13)}시 </span>
        <span>{minPrice[0].date.substring(14, 16)}분 기준 </span>
        <PfDashboard data={summaryData} currentPrices={currentPrices} />
      </BasicFrame>
      <BasicFrame>
        <span className={"m-4 font-medium text-2xl"}>
          보유 종목 목록 <span className="text-sm">(화폐 단위: $) </span>
        </span>
        <CurrentHoldings
          data={summaryData}
          currentPrices={currentPrices}
          nasdaqIndex={nasdaqIndex}
          snpIndex={snpIndex}
        />
      </BasicFrame>
      <BasicFrame>
        <span className="m-4 font-medium text-2xl">보유 종목 차트</span>
        <Pfchart data={summaryData} currentPrices={currentPrices} />
      </BasicFrame>
    </div>
  );
}
