"use client";

import React, { PureComponent } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { getDeltaDays } from "../libs/filterChartDataByDate";

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
      <div className="flex h-48 md:h-96 relative my-1 md:my-10 w-full mx-auto text-xs md:text-base">
        <ResponsiveContainer width="99%" height="99%">
          <BarChart
            width={500}
            height={300}
            data={[...chartData].reverse()}
            margin={{
              top: 2,
              right: 0,
              left: 0,
              bottom: 2,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="date" />
            <YAxis type="number" domain={[0, (dataMax) => dataMax * 1.25]} width={50} />
            <Tooltip />
            <Bar dataKey="adjDividend" fill="#82ca9d" name="배당금" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    );
  } else {
    return (
      <div className="text-center text-lg md:text-3xl opacity-50 min-h-[100px] md:min-h-[150px] flex items-center justify-center">
        <span className="">아직 배당을 지급한 기록이 없는 회사입니다.</span>
      </div>
    );
  }
}

export default DividendChart;
