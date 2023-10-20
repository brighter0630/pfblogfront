import { getPriceHistory } from "@/libs/getPriceHistory";
import filterChartDataByDate from "@/libs/filterChartDataByDate";

export default async function getPriceChartData(
  ticker,
  charttype,
  lastDay = new Date()
) {
  const { historical } = await getPriceHistory(ticker);
  const dataSelected = historical.filter(
    (eachDay) => new Date(eachDay.date) < new Date(lastDay)
  );
  const chartData = filterChartDataByDate(charttype, dataSelected);

  return chartData;
}
