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
    <div className="group rounded-2xl border border-[#D2E7DC] bg-[#F8FCFA] p-6 shadow-xs transition-all duration-300 hover:-translate-y-0.5 hover:border-[#2E7D5B]/40 hover:shadow-md hover:shadow-[#2E7D5B]/10">
      <div className="flex items-center justify-between">
        <div className="text-slate-500 font-medium text-sm">{title}</div>

        <div className="rounded-xl bg-[#2E7D5B]/10 p-3 text-[#2E7D5B] transition-colors group-hover:bg-[#2E7D5B] group-hover:text-white">
          {icon}
        </div>
      </div>

      <h2 className="mt-4 text-3xl font-extrabold text-slate-900 tracking-tight">
        {value}
      </h2>

      <p className="mt-2 text-xs font-semibold text-emerald-800 bg-[#E7F3EC] border border-[#C6E2D2] inline-block px-2.5 py-0.5 rounded-full">
        {change}
      </p>
    </div>
  );
}