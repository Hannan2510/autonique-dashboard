import { ReactNode } from "react";

interface KpiCardProps {
  title: string;
  value: string;
  change: string;
  icon: ReactNode;
}

export default function KpiCard({
  title,
  value,
  change,
  icon,
}: KpiCardProps) {
  return (
    <div className="group rounded-2xl border border-slate-800 bg-slate-900 p-6 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:border-blue-500 hover:shadow-blue-500/10">
      <div className="flex items-center justify-between">
        <div className="text-slate-400 text-sm">{title}</div>

      <div className="rounded-xl bg-slate-800 p-3 text-blue-400 transition group-hover:bg-blue-600 group-hover:text-white">
  {icon}
</div>
      </div>

      <h2 className="mt-4 text-3xl font-bold text-white">
        {value}
      </h2>

      <p className="mt-2 text-sm text-green-400">
        {change}
      </p>
    </div>
  );
}