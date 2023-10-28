"use client";

import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import filterChartDataByDate from "../libs/filterChartDataByDate";
import { useRouter } from "next/navigation";

function PriceChart({ symbol, historical, charttype }) {
  const chartData = filterChartDataByDate(charttype, historical);
  const router = useRouter();
  if (chartData === false) {
    router.push("/ticker-not-found");
  }

  return (
    <div className="grid grid-flow-col h-96 relative my-10 w-full">
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart
          width={1000}
          height={700}
          data={[...chartData].reverse()}
          margin={{
            top: 10,
            right: 30,
            left: 0,
            bottom: 0,
          }}
        >
          <defs>
            <linearGradient id="colorClose" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#8884d8" stopOpacity={0.2} />
            </linearGradient>
          </defs>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="date" />
          <YAxis
            type="number"
            domain={[
              (dataMin) => {
								if(dataMin > 10) {
									return Math.pow(10, (String(Math.round(dataMin)).length - 1));
								} else if(dataMin <= 10 && dataMin > 0) {
									return 0;
								}
							}, 
              (dataMax) => {
								return Math.pow(10, (String(Math.round(dataMax)).length - 1)) * (Number(String(dataMax)[0])+1);
							}
            ]}
          />
          <Tooltip />
          <Area
            type="monotone"
            dataKey="close"
            stroke="#8884d8"
            name="종가"
            fillOpacity={1}
            fill="url(#colorClose)"
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}

export default PriceChart;
