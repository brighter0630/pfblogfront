import Pfchart from "./components/pfchart";
import PfTable from "./components/pftable";
import { summarypf } from "./apis/pfAggregator";
import getCurrentPrice from "./apis/getCurrentPrice";
import PfDashboard from "./components/pfDashboard";

export default async function Home() {
  const summaryData = await summarypf();
  const tickers = summaryData.map((stock) => stock._id);
  const currentPrices = await getCurrentPrice(tickers);

  return (
    <div className="main-container p-5 m-4 overflow-y-visible text-opacity-90 font-semibold text-black grid gap-5 grid-flow-row font-['NanumBarunPen']">
      <div className={"m-4 p-4 border-4"}>
        <span className={"m-4 font-medium text-2xl"}>Portfolio 현황</span>
        <PfDashboard data={summaryData} currentPrices={currentPrices} />
      </div>
      <div className={"m-4 p-4 border-4"}>
        <span className={"m-4 font-medium text-2xl"}>
          보유 종목 목록 <span className="text-sm">(화폐 단위: $) </span>
        </span>
        <PfTable data={summaryData} currentPrices={currentPrices} />
      </div>
      <div className={"m-4 p-4 border-4"}>
        <span className="m-4 font-medium text-2xl">보유 종목 차트</span>
        <Pfchart data={summaryData} currentPrices={currentPrices} />
      </div>
    </div>
  );
}
