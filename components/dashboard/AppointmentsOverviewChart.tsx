"use client";

import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

const weeklyAppointmentsData = [
  { day: "Mon", Completed: 14, Upcoming: 4, Cancelled: 1 },
  { day: "Tue", Completed: 18, Upcoming: 5, Cancelled: 2 },
  { day: "Wed", Completed: 15, Upcoming: 4, Cancelled: 1 },
  { day: "Thu", Completed: 22, Upcoming: 6, Cancelled: 2 },
  { day: "Fri", Completed: 20, Upcoming: 7, Cancelled: 1 },
  { day: "Sat", Completed: 25, Upcoming: 8, Cancelled: 3 },
  { day: "Sun", Completed: 12, Upcoming: 3, Cancelled: 0 },
];

export default function AppointmentsOverviewChart() {
  return (
    <div className="w-full flex flex-col justify-between h-full">
      <div className="flex items-center justify-between mb-5">
        <div>
          <h2 className="text-lg sm:text-xl font-bold text-slate-900 tracking-tight">
            Appointments Overview
          </h2>
          <p className="text-xs sm:text-sm text-slate-500 mt-0.5">
            Weekly breakdown by status
          </p>
        </div>
        <span className="text-xs font-semibold px-2.5 py-1 rounded-lg bg-[#F8FCFA] text-slate-700 border border-[#D2E7DC]">
          This Week
        </span>
      </div>

      <div className="h-64 sm:h-72 w-full pt-1 min-w-0">
        <ResponsiveContainer width="100%" height="100%" minWidth={0}>
          <BarChart
            data={weeklyAppointmentsData}
            margin={{ top: 10, right: 10, left: -20, bottom: 0 }}
          >
            <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#E2E8F0" />
            <XAxis
              dataKey="day"
              axisLine={false}
              tickLine={false}
              tick={{ fill: "#64748B", fontSize: 11, fontWeight: 500 }}
            />
            <YAxis
              axisLine={false}
              tickLine={false}
              tick={{ fill: "#64748B", fontSize: 11 }}
            />
            <Tooltip
              contentStyle={{
                backgroundColor: "#FFFFFF",
                borderRadius: "12px",
                borderColor: "#CBD5E1",
                boxShadow: "0 4px 14px rgba(0, 0, 0, 0.08)",
                fontSize: "12px",
                fontWeight: "600",
                color: "#0F172A",
              }}
            />
            <Legend
              verticalAlign="top"
              align="right"
              wrapperStyle={{ fontSize: "11px", fontWeight: 600, paddingBottom: "10px" }}
            />
            <Bar dataKey="Completed" fill="#2E7D5B" radius={[4, 4, 0, 0]} />
            <Bar dataKey="Upcoming" fill="#3B82F6" radius={[4, 4, 0, 0]} />
            <Bar dataKey="Cancelled" fill="#EF4444" radius={[4, 4, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>

      <div className="mt-3 pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
        <span>Total visits logged: 135</span>
        <span className="font-semibold text-emerald-700">92.6% Completion Rate</span>
      </div>
    </div>
  );
}
