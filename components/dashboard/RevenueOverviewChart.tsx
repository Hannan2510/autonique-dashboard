"use client";

import { useState } from "react";
import {
  ResponsiveContainer,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from "recharts";
import { TrendingUp } from "lucide-react";
import { useTheme } from "@/components/theme-provider";

const monthlyData = [
  { label: "Jan", revenue: 3.2 },
  { label: "Feb", revenue: 3.6 },
  { label: "Mar", revenue: 4.1 },
  { label: "Apr", revenue: 3.9 },
  { label: "May", revenue: 4.4 },
  { label: "Jun", revenue: 4.8 },
  { label: "Jul", revenue: 5.2 },
  { label: "Aug", revenue: 5.0 },
  { label: "Sep", revenue: 5.6 },
  { label: "Oct", revenue: 6.1 },
  { label: "Nov", revenue: 6.5 },
  { label: "Dec", revenue: 7.2 },
];

const overviewData = [
  { label: "Q1", revenue: 10.9 },
  { label: "Q2", revenue: 13.1 },
  { label: "Q3", revenue: 15.8 },
  { label: "Q4", revenue: 19.8 },
];

const yearlyData = [
  { label: "2023", revenue: 34.2 },
  { label: "2024", revenue: 42.6 },
  { label: "2025", revenue: 51.4 },
  { label: "2026 (YTD)", revenue: 59.6 },
];

export default function RevenueOverviewChart() {
  const [activeTab, setActiveTab] = useState<"Overview" | "Monthly" | "Yearly">("Monthly");
  const { theme } = useTheme();
  const isDark = theme === "dark";

  const chartData =
    activeTab === "Overview"
      ? overviewData
      : activeTab === "Yearly"
      ? yearlyData
      : monthlyData;

  const strokeColor = isDark ? "#34D399" : "#2E7D5B";
  const gridColor = isDark ? "#334155" : "#E2E8F0";
  const textColor = isDark ? "#94A3B8" : "#64748B";

  return (
    <div className="w-full flex flex-col justify-between h-full">
      <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
        <div>
          <div className="flex items-center gap-2">
            <h2 className="text-base sm:text-lg font-bold text-slate-900 dark:text-slate-100 tracking-tight">
              Revenue Overview
            </h2>
            <span className="inline-flex items-center gap-1 text-[10px] font-extrabold px-2.5 py-0.5 rounded-full bg-emerald-50 text-[#2E7D5B] dark:bg-emerald-950 dark:text-emerald-300 border border-emerald-200/60 dark:border-emerald-800">
              <TrendingUp className="h-3 w-3" />
              +18.4% YoY
            </span>
          </div>
          <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
            Gross clinical collections in Lakhs (₹)
          </p>
        </div>

        {/* Tab Toggle Controls */}
        <div className="flex items-center gap-1 bg-[#F0F7F4] dark:bg-slate-800 p-1 rounded-xl border border-[#D2E7DC] dark:border-slate-700">
          {(["Overview", "Monthly", "Yearly"] as const).map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-2.5 py-1 rounded-lg text-xs font-bold transition-all ${
                activeTab === tab
                  ? "bg-[#2E7D5B] dark:bg-emerald-600 text-white shadow-2xs"
                  : "text-slate-600 dark:text-slate-300 hover:text-[#2E7D5B] dark:hover:text-emerald-400"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>

      <div className="h-56 sm:h-64 w-full min-w-0">
        <ResponsiveContainer width="100%" height="100%" minWidth={0}>
          <AreaChart data={chartData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
            <defs>
              <linearGradient id="colorRev" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor={strokeColor} stopOpacity={0.35} />
                <stop offset="95%" stopColor={strokeColor} stopOpacity={0.0} />
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" vertical={false} stroke={gridColor} />
            <XAxis
              dataKey="label"
              axisLine={false}
              tickLine={false}
              tick={{ fill: textColor, fontSize: 11, fontWeight: 500 }}
            />
            <YAxis
              axisLine={false}
              tickLine={false}
              tick={{ fill: textColor, fontSize: 11 }}
              tickFormatter={(v) => `₹${v}L`}
            />
            <Tooltip
              contentStyle={{
                backgroundColor: isDark ? "#1E293B" : "#FFFFFF",
                borderRadius: "12px",
                borderColor: isDark ? "#475569" : "#CBD5E1",
                boxShadow: "0 4px 14px rgba(0, 0, 0, 0.15)",
                fontSize: "12px",
                fontWeight: "600",
                color: isDark ? "#F8FAFC" : "#0F172A",
              }}
              formatter={(val: any) => [`₹${val} Lakhs`, "Revenue"]}
            />
            <Area
              type="monotone"
              dataKey="revenue"
              stroke={strokeColor}
              strokeWidth={3}
              fillOpacity={1}
              fill="url(#colorRev)"
              dot={{ fill: strokeColor, r: 3, strokeWidth: 1.5, stroke: isDark ? "#0F172A" : "#FFFFFF" }}
              activeDot={{ r: 5, fill: strokeColor, stroke: isDark ? "#0F172A" : "#FFFFFF", strokeWidth: 2 }}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>

      <div className="mt-2 pt-2 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between text-xs text-slate-500 dark:text-slate-400">
        <span className="flex items-center gap-1.5">
          <span className="h-2 w-2 rounded-full bg-[#2E7D5B] dark:bg-emerald-400" />
          <span>Real-time Financial Sync</span>
        </span>
        <span className="font-bold text-[#2E7D5B] dark:text-emerald-400">Target achieved: 104%</span>
      </div>
    </div>
  );
}
