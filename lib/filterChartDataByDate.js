export function getDeltaDays(charttype) {
  let deltaDays = 0;
  switch (charttype) {
    case "week":
      deltaDays = 7;
      break;
    case "3months":
      deltaDays = 30;
      break;
    case "year":
      deltaDays = 365;
      break;
    case "3years":
      deltaDays = 365 * 3;
      break;
    case "5years":
      deltaDays = 365 * 5 + 1;
      break;
    case "10years":
      deltaDays = 365 * 10 + 2;
      break;
    case "20years":
      deltaDays = 365 * 20 + 5;
      break;
    case "max":
      deltaDays = 365 * 30;
      break;
  }

  return deltaDays;
}

export function reduceDataByChartType(charttype, data) {
  let chartRawData = [];
  if (data) {
    switch (charttype) {
      case "week":
        chartRawData = data;
        break;
      case "3months":
        chartRawData = data;
        break;
      case "year":
        chartRawData = data;
        break;
      case "3years":
        chartRawData = data.filter((el, i) => i % 3 === 0);
        break;
      case "10years":
        chartRawData = data.filter((el, i) => i % 5 === 0);
        break;
      case "max":
        chartRawData = data.filter((el, i) => i % 5 === 0);
        break;
    }
  }

  return chartRawData;
}

export default function filterChartDataByDate(charttype, data) {
  if (data) {
    const deltaDays = getDeltaDays(charttype);
    const chartRawData = reduceDataByChartType(charttype, data);

    const endDate = data[0].date;
    const startDate = new Date(
      new Date(endDate) - new Date(deltaDays * 24 * 60 * 60 * 1000)
    )
      .toISOString()
      .substring(0, 10);

    const chartData = chartRawData.filter(
      (datePrice) => new Date(datePrice.date) > new Date(startDate)
    );

    return chartData;
  }

  return false;
}
