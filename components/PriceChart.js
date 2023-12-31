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
	const dataLength = chartData.length;

  return (
		<div className="h-48 md:h-96 relative py-5 my-1 md:my-10 w-11/12 text-xs md:text-base">
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart
          data={[...chartData].reverse()}
          margin={{
            top: 0,
            right: 0,
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
					<XAxis dataKey="date" className="text-xs md:text-sm" tickFormatter={item => { 
						if(charttype === 'week' || charttype == '3months') {
							return item;
						} else if(charttype === '10years') {
							return `${item.substring(0, 4)}년`;
						} else {
							return `${item.substring(0,4)}년 ${item.substring(5, 7)}월`
						}
					}} />
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
						width={50}
						tickFormatter={tick => tick.toLocaleString('en-US')}
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
