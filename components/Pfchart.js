"use client";

import React, { PureComponent } from "react";
import { PieChart, Pie, Legend, Cell, ResponsiveContainer } from "recharts";

export default function Pfchart({ data, currentPrices }) {
  const newData = data.map((stock) => {
    return Object.assign(
      ...currentPrices.filter((price) => price.symbol === stock.ticker),
      stock
    );
  });

  const chartData = newData.map((stock) => {
    return {
      name: stock.symbol,
      value: stock.denumerator * stock.price,
    };
  });

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

  return (
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
            {chartData.map((entry, index) => (
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
  );
}
