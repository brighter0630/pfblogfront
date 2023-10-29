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

const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div className="custom-tooltip bg-white shadow-md p-2 round-sm">
        <p className="label">{`총자산: $${Number(payload[0].value).toLocaleString('en-US')}`}</p>
      </div>
    );
  }
  return null;
};

export default function PfReturnChart({ pfChartData }) {
  const [loading, setLoading] = useState(true);
	const [pfChartDataModified, setPfChartDataModified] = useState();

  return (
    <BasicFrame>
      <span className="m-4 font-medium text-2xl">포트폴리오 자산 현황</span>
      <div className="grid grid-flow-col h-96 relative my-10 min-w-[100%]">
        <ResponsiveContainer width="99%" height="99%">
          <LineChart
            width={"100%"}
            height={"99%"}
            className={"grid-cols-1"}
            data={pfChartData}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="date" />
						<YAxis tickFormatter={(tick) => tick.toLocaleString()} type="number" domain={[0, 10000]} />
						<Tooltip content={<CustomTooltip />} />
            <Line
              type="monotone"
              dataKey="total"
              stroke="#8884d8"
              activeDot={{ r: 8 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </BasicFrame>
  );
}
