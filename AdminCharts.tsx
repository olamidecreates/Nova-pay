"use client";

import {
  ResponsiveContainer,
  BarChart,
  Bar,
  LineChart,
  Line,
  PieChart,
  Pie,
  Cell,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
} from "recharts";
import { monthlyVolume, userGrowth, transactionMix } from "@/lib/mockData";

const pieColors = ["#3D5CFF", "#7C93FF", "#C9A24B", "#0F1B45"];

export function VolumeChart() {
  return (
    <ResponsiveContainer width="100%" height={260}>
      <BarChart data={monthlyVolume} margin={{ top: 8, right: 8, left: -18, bottom: 0 }}>
        <XAxis dataKey="month" axisLine={false} tickLine={false} tick={{ fontSize: 11, fill: "#0A123099" }} />
        <YAxis axisLine={false} tickLine={false} tick={{ fontSize: 11, fill: "#0A123099" }} />
        <Tooltip
          formatter={(v: number) => [`₦${v}M`, "Volume"]}
          contentStyle={{ borderRadius: 12, border: "1px solid rgba(10,18,48,0.08)", fontSize: 12 }}
        />
        <Bar dataKey="volume" radius={[6, 6, 0, 0]} fill="#3D5CFF" />
      </BarChart>
    </ResponsiveContainer>
  );
}

export function GrowthChart() {
  return (
    <ResponsiveContainer width="100%" height={260}>
      <LineChart data={userGrowth} margin={{ top: 8, right: 8, left: -18, bottom: 0 }}>
        <XAxis dataKey="month" axisLine={false} tickLine={false} tick={{ fontSize: 11, fill: "#0A123099" }} />
        <YAxis axisLine={false} tickLine={false} tick={{ fontSize: 11, fill: "#0A123099" }} />
        <Tooltip contentStyle={{ borderRadius: 12, border: "1px solid rgba(10,18,48,0.08)", fontSize: 12 }} />
        <Line type="monotone" dataKey="users" stroke="#C9A24B" strokeWidth={2.5} dot={false} />
      </LineChart>
    </ResponsiveContainer>
  );
}

export function MixChart() {
  return (
    <ResponsiveContainer width="100%" height={260}>
      <PieChart>
        <Pie
          data={transactionMix}
          dataKey="value"
          nameKey="name"
          innerRadius={55}
          outerRadius={85}
          paddingAngle={3}
        >
          {transactionMix.map((_, i) => (
            <Cell key={i} fill={pieColors[i % pieColors.length]} />
          ))}
        </Pie>
        <Legend iconType="circle" wrapperStyle={{ fontSize: 12 }} />
        <Tooltip contentStyle={{ borderRadius: 12, border: "1px solid rgba(10,18,48,0.08)", fontSize: 12 }} />
      </PieChart>
    </ResponsiveContainer>
  );
}
