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

const testData = [
  {
    name: "Page A",
    hour: 222,
  },
  {
    name: "Page B",
    time: 3000,
  },
];

export default function BarChartOneOnOne({ data, firstKey, secondKey }) {
  return (
    <div className="h-96 relative min-w-[350px]">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          width={150}
          height={40}
          data={data}
          margin={{
            top: 20,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <Tooltip formatter={(value) => value.toLocaleString()} />
          <Bar dataKey={firstKey} fill="#0F4392" stackId="a" />
          <Bar dataKey={secondKey} fill="#0F4392" stackId="a" />
          <XAxis dataKey="name" />
          <YAxis tickFormatter={(tick) => tick.toLocaleString()} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
