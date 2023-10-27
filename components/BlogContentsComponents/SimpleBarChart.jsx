"use client";

import React, { PureComponent } from "react";
import {
  BarChart,
  Bar,
  Rectangle,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ReferenceLine,
  Cell,
  ResponsiveContainer,
} from "recharts";

export default function SimpleBarChart({ data }) {
  return (
    <div className="h-96 relative">
      <ResponsiveContainer width="99%" height="99%">
        <BarChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <ReferenceLine y={0} stroke="#000" />
          <Bar
            activeBar={<Rectangle fill="pink" stroke="blue" />}
            dataKey="수익률(%)"
          >
            {data.map((el, i) => (
              <Cell
                key={i}
                fill={el["수익률(%)"] > 0 ? "#E03C3C" : "#005599"}
              />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
