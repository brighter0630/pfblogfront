"use client";

import React, { PureComponent, useEffect, useState } from "react";
import { PieChart, Pie, Legend, Cell, ResponsiveContainer } from "recharts";
import BasicFrame from "@/components/BasicFrame";
import mergeRealTimeData from "@/libs/mergeRealTimeData";
import connectSocketIO from "@/libs/connectSocketIO";
import Loading from "./Loading";

export default function Pfchart({ data, currentPrices }) {
  const [loading, setLoading] = useState(true);
  const [chartData, setChartData] = useState();

  const COLORS = [
    "#0088FE",
    "#00C49F",
    "#FFBB28",
    "#FF8042",
    "#a83285",
    "#120d29",
    "#73402c",
    "#e5ff00",
  ];
  const RADIAN = Math.PI / 180;
  const renderCustomizedLabel = ({
    cx,
    cy,
    midAngle,
    innerRadius,
    outerRadius,
    percent,
    index,
  }) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    return (
      <text
        x={x}
        y={y}
        fill="white"
        textAnchor={x > cx ? "start" : "end"}
        dominantBaseline="central"
      >
        {`${(percent * 100).toFixed(0)}%`}
      </text>
    );
  };

  useEffect(() => {
    const socket = connectSocketIO();
    socket.on("price", ({ realtimeData }) => {
      const mergedData = mergeRealTimeData(
        data,
        { realtimeData },
        currentPrices
      );
      const dataforChart = mergedData.map((stock) => {
        return {
          name: stock.ticker,
          value: stock.realtimePrice * stock.totalQuantityPerStock,
        };
      });
      setChartData(dataforChart);
      setLoading(false);
    });
  }, []);

  if (loading) {
    return <Loading />;
  }

  return (
    <BasicFrame>
      {!loading && (
        <div>
          <span className="m-4 font-medium text-2xl">보유 종목 차트</span>
          <div className="grid overflow-x-hidden overflow-y-auto grid-flow-col h-96 relative my-10">
            <ResponsiveContainer
              width={"100%"}
              height={"99%"}
              className={"grid-cols-1"}
            >
              <PieChart width={400} height={800} className="min-w-full">
                <Pie
                  data={chartData}
                  cx="50%"
                  cy="50%"
                  label={renderCustomizedLabel}
                  labelLine={false}
                  outerRadius={160}
                  dataKey="value"
                >
                  {chartData?.map((entry, index) => (
                    <Cell
                      key={`cell-${index}`}
                      fill={COLORS[index % COLORS.length]}
                    />
                  ))}
                </Pie>
                <Legend />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>
      )}
    </BasicFrame>
  );
}
