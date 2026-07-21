"use client";

import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from "recharts";

const data = [
  { day: "Mon", appointments: 18 },
  { day: "Tue", appointments: 24 },
  { day: "Wed", appointments: 20 },
  { day: "Thu", appointments: 30 },
  { day: "Fri", appointments: 28 },
  { day: "Sat", appointments: 35 },
  { day: "Sun", appointments: 22 },
];

export default function AppointmentChart() {
  return (
    <div className="w-full">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-xl font-bold text-slate-900 tracking-tight">
            Weekly Appointment Trends
          </h2>
          <p className="text-sm text-slate-500 mt-0.5">
            Total visit volume per day
          </p>
        </div>
        <span className="text-sm font-semibold px-3 py-1 rounded-full bg-emerald-50 text-[#2E7D5B] border border-emerald-200/50">
          +14% vs last week
        </span>
      </div>

      <div className="h-72 w-full pt-2 min-w-0">
        <ResponsiveContainer width="100%" height="100%" minWidth={0}>
          <LineChart data={data} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
            <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e2e8f0" />
            <XAxis
              dataKey="day"
              axisLine={false}
              tickLine={false}
              tick={{ fill: "#64748b", fontSize: 13 }}
            />
            <YAxis
              axisLine={false}
              tickLine={false}
              tick={{ fill: "#64748b", fontSize: 13 }}
            />
            <Tooltip
              contentStyle={{
                backgroundColor: "#ffffff",
                borderRadius: "12px",
                borderColor: "#cbd5e1",
                boxShadow: "0 4px 12px rgba(0, 0, 0, 0.05)",
                fontSize: "13px",
                fontWeight: "600",
                color: "#0f172a",
              }}
            />
            <Line
              type="monotone"
              dataKey="appointments"
              stroke="#2E7D5B"
              strokeWidth={3}
              dot={{ fill: "#2E7D5B", r: 4, strokeWidth: 2, stroke: "#ffffff" }}
              activeDot={{ r: 6, fill: "#2E7D5B" }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}