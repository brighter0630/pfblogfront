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
} from "recharts";
import { getDeltaDays } from "../lib/filterChartDataByDate";

function DividendChart({ charttype, historical }) {
  if (historical.length !== 0) {
    const endDate = historical[0].date;
    const deltaDays = getDeltaDays(charttype);
    const startDate = new Date(
      new Date(endDate) - new Date(deltaDays * 24 * 60 * 60 * 1000)
    )
      .toISOString()
      .substring(0, 10);
    const chartData = historical.filter(
      (datePrice) => new Date(datePrice.date) > new Date(startDate)
    );

    return (
      <div className="grid overflow-x-hidden overflow-y-auto grid-flow-col h-96 relative my-10">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            width={500}
            height={300}
            data={[...chartData].reverse()}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="date" />
            <YAxis type="number" domain={[0, (dataMax) => dataMax * 1.25]} />
            <Tooltip />
            <Bar dataKey="adjDividend" fill="#82ca9d" name="배당금" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    );
  } else {
    return (
      <div className="text-center text-3xl opacity-50 min-h-[150px] flex items-center justify-center">
        <span className="">아직 배당을 지급한 기록이 없는 회사입니다.</span>
      </div>
    );
  }
}

export default DividendChart;
