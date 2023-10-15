import PriceChart from "../../components/PriceChart";
import getPriceHistory from "../../libs/getPriceHistory.js";

async function PriceChartMDX() {
  const { symbol, historical } = await getPriceHistory("AAPL");

  return (
    <PriceChart symbol={symbol} historical={historical} charttype="1year" />
  );
}

export default PriceChartMDX;
