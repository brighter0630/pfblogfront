import IndexPriceDiv from "@/components/IndexPriceDiv";
import Pfchart from "@/components/Pfchart";
import CurrentHoldings from "@/components/CurrentHoldings";
import getCurrentPrice from "@/libs/getCurrentPrice";
import PfDashboard from "@/components/PfDashboard";
import PfReturnChart from "@/components/PfReturnChart";
import Script from "next/script";
import summarisePortfolio from "@/libs/mariadb/summarisePortfolio";
import getMonthlySummary from "@/libs/getMonthlySummary";
import { getNasdaqIndex, getSNPIndex } from "@/libs/getIndex";

export const metadata = {
  title: "이웃집백만장자의 배당성장주 투자",
  content: "배당성장주 투자의 실제 현황",
};

export default async function Home() {
  const { summaryData } = await summarisePortfolio();
	const pfChartData = await getMonthlySummary();
  const tickers = summaryData.map((stock) => stock.ticker);
  const currentPrices = await getCurrentPrice(tickers);
  const nasdaqIndex = await getNasdaqIndex(1);
  const snpIndex = await getSNPIndex(1);

  return (
    <div
      className={`my-4 mx-auto text-opacity-90 font-semibold text-black grid gap-5 grid-flow-row max-w-3xl`}
    >
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
      <IndexPriceDiv />
      <PfDashboard summaryData={summaryData} currentPrices={currentPrices} />
			<PfReturnChart pfChartData={pfChartData} />
      <CurrentHoldings
        data={summaryData}
        currentPrices={currentPrices}
        nasdaqIndex={nasdaqIndex}
        snpIndex={snpIndex}
      />
      <Pfchart data={summaryData} currentPrices={currentPrices} />
    </div>
  );
}
