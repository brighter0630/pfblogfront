"use client";

import React, { PureComponent, useEffect, useState } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import BasicFrame from "@/components/BasicFrame";
import Loading from "./Loading";
import getMonthAgo from "@/libs/getMonthAgo";

export default function PfReturnChart({ arrayOfTotalAsset }) {
  const [loading, setLoading] = useState(true);
  const [assetChartData, setAssetChartData] = useState();

  useEffect(() => {
    setAssetChartData(
      arrayOfTotalAsset.map((eachMonth) => {
        return {
          name: getMonthAgo(eachMonth.date),
          totalAsset: eachMonth.summary.reduce(
            (pre, cur) => pre + cur.totalEquityPerStock,
            0
          ),
        };
      })
    );
    setLoading(false);
  }, []);

  if (loading) {
    return <Loading />;
  }

  return (
    <BasicFrame>
      <span className="m-4 font-medium text-2xl">포트폴리오 자산 현황</span>
      <div className="grid grid-flow-col h-96 relative my-10 min-w-[100%]">
        <ResponsiveContainer width="99%" height="99%">
          <LineChart
            width={"100%"}
            height={"99%"}
            className={"grid-cols-1"}
            data={assetChartData}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis tickFormatter={(tick) => tick.toLocaleString()} />
            <Tooltip />
            {/* <Legend /> */}
            <Line
              type="monotone"
              dataKey="totalAsset"
              stroke="#8884d8"
              activeDot={{ r: 8 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </BasicFrame>
  );
}
