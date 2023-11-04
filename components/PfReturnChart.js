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

	useEffect(() => {
		setPfChartDataModified(pfChartData.map(el => {
			return {
				date: el.date,
				total: ~~el.total
			}
		}))
		setLoading(false);
	}, [])

	if(loading) {
		<Loading />
	}

  return (
    <BasicFrame>
      <span className="m-2 md:m-4 font-medium text-lg md:text-2xl">포트폴리오 자산 추이</span>
      <div className="grid grid-flow-col relative h-48 md:h-96 my-4 md:my-10 text-xs md:text-base">
				<ResponsiveContainer width={"90%"} height={"99%"} className="mx-auto"> 
          <LineChart
            className={"min-w-full"}
            data={pfChartDataModified}
            margin={{
              top: 0,
              right: 5,
              left: 0,
              bottom: 0,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="date" />
						<YAxis tickFormatter={(tick) => tick.toLocaleString()} type="number" width={50}
							domain={[
              dataMin => {
								if(dataMin > 10) {
									return 0;
									// return Math.pow(10, (String(Math.round(dataMin)).length - 1));
								} else if(dataMin <= 10 && dataMin > 0) {
									return 0;
								}
							}, 
              dataMax => {
								return Math.pow(10, (String(Math.round(dataMax)).length - 1)) * (Number(String(dataMax)[0])+1);
							}
            ]}
					/>
						<Tooltip content={<CustomTooltip />} />
            <Line
              type="monotone"
							dot={false}
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
