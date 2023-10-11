const aggregateSummaryPipeline = [
  {
    $group: {
      _id: "$ticker",
      totalHoldings: {
        $sum: {
          $cond: [
            {
              $eq: ["$typeofTransaction", "buy"],
            },
            "$quantity",
            {
              $multiply: ["$quantity", -1],
            },
          ],
        },
      },
      numerator: {
        $sum: {
          $cond: [
            {
              $eq: ["$typeofTransaction", "buy"],
            },
            {
              $multiply: ["$quantity", "$price"],
            },
            {},
          ],
        },
      },
      denumerator: {
        $sum: {
          $cond: [
            {
              $eq: ["$typeofTransaction", "buy"],
            },
            "$quantity",
            {},
          ],
        },
      },
    },
  },
];

module.exports = aggregateSummaryPipeline;
