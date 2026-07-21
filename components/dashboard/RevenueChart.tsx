"use client";

import {
  ResponsiveContainer,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from "recharts";
import { TrendingUp, ArrowUpRight } from "lucide-react";

const revenueData = [
  { month: "Jan", revenue: 3.2, label: "₹3.2L" },
  { month: "Feb", revenue: 3.6, label: "₹3.6L" },
  { month: "Mar", revenue: 4.1, label: "₹4.1L" },
  { month: "Apr", revenue: 3.9, label: "₹3.9L" },
  { month: "May", revenue: 4.4, label: "₹4.4L" },
  { month: "Jun", revenue: 4.8, label: "₹4.8L" },
  { month: "Jul", revenue: 5.2, label: "₹5.2L" },
  { month: "Aug", revenue: 5.0, label: "₹5.0L" },
  { month: "Sep", revenue: 5.6, label: "₹5.6L" },
  { month: "Oct", revenue: 6.1, label: "₹6.1L" },
  { month: "Nov", revenue: 6.5, label: "₹6.5L" },
  { month: "Dec (Cur)", revenue: 7.2, label: "₹7.2L", isCurrent: true },
];

export default function RevenueChart() {
  return (
    <div className="w-full flex flex-col justify-between h-full">
      <div className="flex flex-wrap items-center justify-between gap-3 mb-5">
        <div>
          <div className="flex items-center gap-2">
            <h2 className="text-lg sm:text-xl font-bold text-slate-900 tracking-tight">
              Revenue Overview
            </h2>
            <span className="inline-flex items-center gap-1 text-[11px] font-bold px-2.5 py-0.5 rounded-full bg-emerald-100/70 text-[#1F543D] border border-emerald-300/60">
              <TrendingUp className="h-3 w-3 text-[#2E7D5B]" />
              Annual Scale
            </span>
          </div>
          <p className="text-xs sm:text-sm text-slate-500 mt-0.5">
            Monthly gross clinical revenue collection in Lakhs (₹)
          </p>
        </div>

        <div className="flex items-center gap-2">
          <div className="text-right hidden sm:block">
            <div className="text-xs font-semibold text-slate-500">Current Month</div>
            <div className="text-sm font-extrabold text-[#2E7D5B]">₹7.20 Lakhs</div>
          </div>
          <span className="inline-flex items-center gap-1 text-xs font-bold px-3 py-1 rounded-xl bg-emerald-50 text-[#2E7D5B] border border-emerald-200/60 shadow-2xs">
            <ArrowUpRight className="h-3.5 w-3.5" />
            +18.4% YoY
          </span>
        </div>
      </div>

      <div className="h-64 sm:h-72 w-full pt-1 min-w-0">
        <ResponsiveContainer width="100%" height="100%" minWidth={0}>
          <AreaChart data={revenueData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
            <defs>
              <linearGradient id="colorRevenue" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#2E7D5B" stopOpacity={0.35} />
                <stop offset="95%" stopColor="#2E7D5B" stopOpacity={0.0} />
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#E2E8F0" />
            <XAxis
              dataKey="month"
              axisLine={false}
              tickLine={false}
              tick={{ fill: "#64748B", fontSize: 11, fontWeight: 500 }}
            />
            <YAxis
              axisLine={false}
              tickLine={false}
              tick={{ fill: "#64748B", fontSize: 11 }}
              tickFormatter={(value) => `₹${value}L`}
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
              formatter={(value: any) => [`₹${value} Lakhs`, "Revenue"]}
            />
            <Area
              type="monotone"
              dataKey="revenue"
              stroke="#2E7D5B"
              strokeWidth={3}
              fillOpacity={1}
              fill="url(#colorRevenue)"
              dot={{ fill: "#2E7D5B", r: 3.5, strokeWidth: 1.5, stroke: "#FFFFFF" }}
              activeDot={{ r: 6, fill: "#2E7D5B", stroke: "#FFFFFF", strokeWidth: 2 }}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>

      <div className="mt-3 pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
        <div className="flex items-center gap-2">
          <span className="h-2 w-2 rounded-full bg-[#2E7D5B]" />
          <span>Monthly Revenue Trend</span>
        </div>
        <span className="font-semibold text-[#2E7D5B]">December is highlighted as Current</span>
      </div>
    </div>
  );
}
