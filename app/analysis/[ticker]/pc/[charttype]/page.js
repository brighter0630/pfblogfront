import React from "react";
import PriceChart from "@/components/PriceChart";
import { getPriceHistory } from "@/lib/getPriceHistory";

async function PriceChartTemplete({ params }) {
  const { ticker, charttype } = params;
  const { symbol, historical } = await getPriceHistory(ticker);

  return (
    <PriceChart symbol={symbol} historical={historical} charttype={charttype} />
  );
}

export default PriceChartTemplete;
