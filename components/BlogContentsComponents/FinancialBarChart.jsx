"use client";

import React, { PureComponent } from "react";
import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  Label,
} from "recharts";
import divider from "../../libs/divider";

export function yAxisFormatter(value, unit) {
  if (unit == "") {
    return value.toLocaleString("en-US");
  }
  return `${value} ${unit}`;
}

function FinancialBarChart({ chartData, col }) {
  const modifiedChartData = divider(chartData, col);
  const unit = modifiedChartData[0].unit;
  return (
    <div className="h-40 p-1 mx-auto">
      <ResponsiveContainer height={"100%"} width="100%">
        <BarChart
          width={"250px"}
          height={20}
          data={modifiedChartData.reverse()}
          margin={{
            top: 5,
            right: 5,
            left: 5,
            bottom: 50,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis tickFormatter={(value) => yAxisFormatter(value, unit)}></YAxis>
          <Bar dataKey="value" fill="#8884d8" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

export default FinancialBarChart;
