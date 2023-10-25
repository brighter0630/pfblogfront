function mergeRealTimeData(summaryData, { realtimeData }, currentPrices) {
  const mergedData = summaryData.map((stock) => {
    try {
      const realtimePrice = realtimeData.filter(
        (el) => el.symbol === stock.ticker
      )[0].price;

      const dataAssigned = Object.assign(
        ...currentPrices.filter((price) => price.symbol === stock.ticker),
        stock,
        {
          realtimePrice: realtimePrice,
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
