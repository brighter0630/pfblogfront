function mergeRealTimeData(summaryData, { realtimeData }, currentPrices) {
  const mergedData = summaryData.map((stock) => {
    try {
      const dataAssigned = Object.assign(
        ...currentPrices.filter((price) => price.symbol === stock.ticker),
        stock,
        {
          realtimePrice: realtimeData.filter(
            (el) => el.symbol === stock.ticker
          )[0].price,
        }
      );

      return dataAssigned;
    } catch (error) {
      console.error("Error occured, merging realtime data", error);
      return [];
    }
  });

  return mergedData;
}

export default mergeRealTimeData;
