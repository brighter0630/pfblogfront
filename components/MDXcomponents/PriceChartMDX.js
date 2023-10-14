"use client";

import PriceChart from "../../components/PriceChart";
import getPriceHistory from "../../libs/getPriceHistory.js";

async function PriceChartTemplete({ params }) {
  const { ticker, charttype } = params;
  console.log(ticker, charttype);
  const { symbol, historical } = await getPriceHistory(ticker);

  return (
    <PriceChart symbol={symbol} historical={historical} charttype={charttype} />
  );
}

export default PriceChartTemplete;
