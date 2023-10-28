import PriceChart from "./PriceChart";

export default async function PriceChartTemplete({ ticker }) {
  const res = await fetch(
    `${process.env.stockPHURL}/${ticker}?apikey=${process.env.stockAPIKEY}`,
    {
      method: "GET",
      cache: "no-cache",
    }
  );
  const { historical } = await res.json();
  return <PriceChart historical={historical} charttype={"year"} />;
}
