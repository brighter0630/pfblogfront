"use client";

import connectSocketIO from "@/libs/connectSocketIO";
import React, { useEffect, useState } from "react";
import CustomModal from "../CustomModal";
import PriceChartTemplete from "../PriceChartTemplete";

function IndexPriceBox({ indexTicker, indexTitle }) {
  const [index, setIndex] = useState();
  const [loading, setLoading] = useState(true);
  const [showModal, setShowModal] = useState(false);

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
    <tbody
      className="min-w-0"
      onMouseEnter={() => setShowModal(true)}
      onMouseLeave={() => setShowModal(false)}
    >
      {/* {showModal && (
        <CustomModal width={500} height={300}>
          <PriceChartTemplete ticker={indexTicker} />
        </CustomModal>
      )} */}
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
            } text-sm text-right pr-1`}
          >
            {index?.price.toLocaleString(undefined, {
              minimumFractionDigits: 2,
              maximumFractionDigits: 2,
            })}
          </td>
          <td
            className={`${
              index?.changesPercentage > 0
                ? "text-red-700"
                : index?.changesPercentage < 0
                ? "text-blue-700"
                : "text-black"
            } text-xs text-right pr-1`}
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
