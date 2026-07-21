"use client";

import { ResponsiveContainer, PieChart, Pie, Cell, Tooltip } from "recharts";
import { useTheme } from "@/components/theme-provider";

const data = [
  { name: "Completed", value: 240, color: "#2E7D5B", darkColor: "#34D399", pct: "74%" },
  { name: "Upcoming", value: 64, color: "#3B82F6", darkColor: "#60A5FA", pct: "20%" },
  { name: "Cancelled", value: 20, color: "#EF4444", darkColor: "#F87171", pct: "6%" },
];

export default function AppointmentsDonutChart() {
  const total = data.reduce((acc, d) => acc + d.value, 0);
  const { theme } = useTheme();
  const isDark = theme === "dark";

  return (
    <div className="w-full flex flex-col justify-between h-full">
      <div>
        <div className="flex items-center justify-between mb-1.5">
          <h2 className="text-base sm:text-lg font-extrabold text-slate-900 dark:text-white tracking-tight">
            Appointments Statistics
          </h2>
          <span className="text-[10px] font-bold px-2.5 py-0.5 rounded-full bg-slate-100 dark:bg-slate-800/90 text-slate-700 dark:text-slate-200 border border-slate-200 dark:border-slate-700 shadow-2xs">
            This Month
          </span>
        </div>
        <p className="text-xs text-slate-500 dark:text-slate-300 font-medium mb-2">
          Status distribution & clinical breakdown
        </p>
      </div>

      {/* Donut Chart with High-Contrast Center Label */}
      <div className="relative h-44 sm:h-48 w-full flex items-center justify-center">
        <ResponsiveContainer width="100%" height="100%" minWidth={0}>
          <PieChart>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              innerRadius={50}
              outerRadius={72}
              paddingAngle={4}
              dataKey="value"
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={isDark ? entry.darkColor : entry.color} stroke="none" />
              ))}
            </Pie>
            <Tooltip
              contentStyle={{
                backgroundColor: isDark ? "#1E293B" : "#FFFFFF",
                borderRadius: "12px",
                borderColor: isDark ? "#475569" : "#CBD5E1",
                boxShadow: "0 6px 20px rgba(0, 0, 0, 0.25)",
                fontSize: "12px",
                fontWeight: "700",
                color: isDark ? "#F8FAFC" : "#0F172A",
              }}
              formatter={(val: any, name: any) => [`${val} Visits`, name]}
            />
          </PieChart>
        </ResponsiveContainer>

        {/* Center Label: High Contrast Prominent Number */}
        <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
          <span className="text-3xl font-black text-slate-900 dark:text-[#F8FAFC] tracking-tight leading-none">
            {total}
          </span>
          <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500 dark:text-slate-300 mt-1">
            Total Visits
          </span>
        </div>
      </div>

      {/* High-Contrast Legend Below */}
      <div className="space-y-2 pt-2.5 border-t border-slate-100 dark:border-slate-800">
        {data.map((item) => (
          <div key={item.name} className="flex items-center justify-between text-xs">
            <div className="flex items-center gap-2">
              <span
                className="h-2.5 w-2.5 rounded-full shrink-0"
                style={{ backgroundColor: isDark ? item.darkColor : item.color }}
              />
              <span className="text-slate-800 dark:text-slate-200 font-bold">{item.name}</span>
            </div>
            <div className="flex items-center gap-2.5">
              <span className="text-slate-900 dark:text-[#F8FAFC] font-extrabold">{item.value}</span>
              <span className="text-[10px] text-slate-500 dark:text-slate-300 font-mono font-bold w-8 text-right">
                {item.pct}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
