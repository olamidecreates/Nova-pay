"use client";

import { AreaChart, Area, ResponsiveContainer, Tooltip, XAxis } from "recharts";

const data = [
  { month: "Jan", value: 210000 },
  { month: "Feb", value: 260000 },
  { month: "Mar", value: 238000 },
  { month: "Apr", value: 320000 },
  { month: "May", value: 298000 },
  { month: "Jun", value: 410000 },
  { month: "Jul", value: 482650 },
];

export default function BalanceChart() {
  return (
    <div className="h-40 w-full">
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart data={data} margin={{ top: 8, right: 0, left: 0, bottom: 0 }}>
          <defs>
            <linearGradient id="balanceFill" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#3D5CFF" stopOpacity={0.35} />
              <stop offset="100%" stopColor="#3D5CFF" stopOpacity={0} />
            </linearGradient>
          </defs>
          <XAxis
            dataKey="month"
            axisLine={false}
            tickLine={false}
            tick={{ fontSize: 11, fill: "#0A123099" }}
          />
          <Tooltip
            formatter={(v: number) => [`₦${v.toLocaleString()}`, "Balance"]}
            contentStyle={{
              borderRadius: 12,
              border: "1px solid rgba(10,18,48,0.08)",
              fontSize: 12,
            }}
          />
          <Area
            type="monotone"
            dataKey="value"
            stroke="#3D5CFF"
            strokeWidth={2}
            fill="url(#balanceFill)"
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}
