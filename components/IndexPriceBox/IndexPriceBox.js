"use client";

import connectSocketIO from "@/libs/connectSocketIO";
import React, { useEffect, useState } from "react";

function IndexPriceBox({ indexTicker, indexTitle }) {
  const [index, setIndex] = useState();
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const socket = connectSocketIO();
    socket.on("index", ({ realtimeIndex }) => {
      const res = realtimeIndex.filter(
        (eachIndex) => eachIndex.symbol === indexTicker
      );
      if (res !== undefined) {
        setIndex(res[0]);
        setLoading(false);
      }
    });
  }, []);

  return (
    <tbody className="min-w-0">
      {!loading && (
        <tr>
          <th className="text-center text-[#31455b] text-xs min-w-[100px]">
            {indexTitle}
          </th>
          <td
            className={`${
              index?.changesPercentage > 0
                ? "text-red-700"
                : index?.changesPercentage < 0
                ? "text-blue-700"
                : "text-black"
            } text-sm`}
          >
            {index?.price.toLocaleString(undefined, {
              minimumFractionDigits: 2,
            })}
          </td>
          <td
            className={`${
              index?.changesPercentage > 0
                ? "text-red-700"
                : index?.changesPercentage < 0
                ? "text-blue-700"
                : "text-black"
            } text-xs`}
          >
            {index?.changesPercentage >= 0 && "+"}
            {index?.changesPercentage.toFixed(2)}%
          </td>
        </tr>
      )}
    </tbody>
  );
}

export default IndexPriceBox;
