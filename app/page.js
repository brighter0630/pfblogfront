import Pfchart from "../components/Pfchart";
import CurrentHoldings from "../components/CurrentHoldings";
import getCurrentPrice from "../libs/getCurrentPrice";
import PfDashboard from "../components/PfDashboard";
import BasicFrame from "@/components/BasicFrame";
import Script from "next/script";
import summarisePortfolio from "@/libs/mariadb/summarisePortfolio";
import { getNasdaqIndex, getSNPIndex } from "@/libs/getIndex";
import Head from "next/head";
import printDateFull from "../libs/printDateFull";

export default async function Home() {
  const { summaryData } = await summarisePortfolio();
  const tickers = summaryData.map((stock) => stock.ticker);
  const currentPrices = await getCurrentPrice(tickers);
  const nasdaqIndex = await getNasdaqIndex(1);
  const snpIndex = await getSNPIndex(1);

  return (
    <div className="p-5 my-4 mx-auto text-opacity-90 font-semibold text-black grid gap-5 grid-flow-row max-w-3xl">
      <Head>
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://dividendgrowthinvesting.co.kr"
        />
        <meta property="og:title" content="이웃집백만장자의 배당성장주 투자" />
        <meta property="og:description" content="배당성장주 투자의 실제 현황" />
      </Head>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=G-NHT517M9G5`}
      />
      <Script id="google-analytics">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
 
          gtag('config', 'G-NHT517M9G5');
        `}
      </Script>
      <PfDashboard data={summaryData} currentPrices={currentPrices} />
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
