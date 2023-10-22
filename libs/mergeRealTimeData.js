function mergeRealTimeData(summaryData, { realtimeData }, currentPrices) {
  const mergedData = summaryData.map((stock) => {
    return Object.assign(
      ...currentPrices.filter((price) => price.symbol === stock.ticker),
      stock,
      {
        realtimePrice: realtimeData.filter(
          (el) => el.symbol === stock.ticker
        )[0].price,
      }
    );
  });

  return mergedData;
}

export default mergeRealTimeData;
