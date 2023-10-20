"use client";

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

function BiaxialBarChart({ data }) {
  const keys = Object.keys(data[0]);
  return (
    <div className="h-96 relative min-w-[350px]">
      <ResponsiveContainer width="99%" height="99%">
        <BarChart
          data={[...data].reverse()}
          margin={{
            top: 20,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis
            yAxisId="left"
            orientation="left"
            stroke="#8884d8"
            domain={[
              0,
              (dataMax) =>
                10 ** (String(Math.round(dataMax)).length - 1) *
                (Number(String(dataMax)[0]) + 2),
            ]}
          />
          <YAxis
            yAxisId="right"
            orientation="right"
            stroke="#82ca9d"
            domain={[
              0,
              (dataMax) =>
                10 ** (String(Math.round(dataMax)).length - 1) *
                (Number(String(dataMax)[0]) + 2),
            ]}
          />
          <Tooltip />
          <Legend />
          <Bar yAxisId="left" dataKey={keys[1]} fill="#8884d8" />
          <Bar yAxisId="right" dataKey={keys[2]} fill="#82ca9d" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

export default BiaxialBarChart;
