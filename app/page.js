import Pfchart from "./components/pfchart";
import PfTable from "./components/pftable";
import { summarypf } from "./apis/pfAggregator";
import axios from "axios";
const https = require("https");

export default async function Home() {
  const summaryData = await summarypf();
  const tickers = summaryData.map((stock) => stock._id);
  const currentPrices = (
    await axios.get(
      `${process.env.stockAPIURL_quote}${tickers.toString()}?apikey=${
        process.env.stockAPIKEY
      }`,
      {
        httpsAgent: new https.Agent({
          rejectUnauthorized: false, //허가되지 않은 인증을 reject하지 않겠다!
        }),
      }
    )
  ).data;

  return (
    <div className="main-container p-5 overflow-y-auto text-opacity-90 text-white grid gap-5 grid-flow-row">
      <div className={"m-4"}>
        <span className={"m-4 font-extrabold underline underline-offset-4"}>
          보유 종목 목록
        </span>
        <PfTable data={summaryData} currentPrices={currentPrices} />
      </div>
      <div className={"m-4 h-96"}>
        <span className="m-4 font-extrabold underline underline-offset-4">
          보유 종목 차트
        </span>
        <Pfchart data={summaryData} currentPrices={currentPrices} />
      </div>
    </div>
  );
}
