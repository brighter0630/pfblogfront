"use client";

import PriceChart from "@/components/PriceChart";
import { getPriceHistory } from "@/libs/getPriceHistory";
import { useEffect, useState } from "react";
import Loading from "@/components/Loading";

function PriceChartTemplete({ params }) {
  const { ticker, charttype } = params;
  const [priceHistory, setPriceHistory] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function getData() {
      const { symbol, historical } = await getPriceHistory(ticker);
      setPriceHistory(historical);
      setLoading(false);
    }
    getData();
  }, []);

  if (loading) {
    return <Loading />;
  }

  return (
    <PriceChart
      symbol={ticker}
      historical={priceHistory}
      charttype={charttype}
    />
  );
}

export default PriceChartTemplete;
