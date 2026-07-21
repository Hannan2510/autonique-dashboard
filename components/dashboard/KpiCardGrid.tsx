import { Users, UserCheck, CalendarCheck, Clock, ArrowUpRight, ArrowDownRight } from "lucide-react";

export default function KpiCardGrid() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      {/* Card 1: Total Patients (Emerald) */}
      <div className="rounded-2xl border-2 border-emerald-300/90 dark:border-emerald-800/80 bg-emerald-50 dark:bg-emerald-950/40 p-5 sm:p-5.5 shadow-md shadow-emerald-950/5 hover:shadow-xl hover:shadow-emerald-900/10 hover:border-[#2E7D5B] dark:hover:border-emerald-500 hover:-translate-y-1 transition-all duration-200 ease-in-out group flex flex-col justify-between">
        <div>
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold text-emerald-950 dark:text-emerald-300 uppercase tracking-wider">
              Total Patients
            </span>
            <div className="h-10 w-10 rounded-xl bg-emerald-100/90 dark:bg-emerald-900/60 border-2 border-emerald-300 dark:border-emerald-700 text-[#2E7D5B] dark:text-emerald-300 flex items-center justify-center group-hover:bg-[#2E7D5B] group-hover:text-white group-hover:border-[#2E7D5B] transition-all duration-200 shadow-xs">
              <Users className="h-5 w-5" />
            </div>
          </div>

          <div className="mt-3 flex items-baseline justify-between gap-2">
            <span className="text-3xl font-black text-slate-900 dark:text-white tracking-tight">
              1,248
            </span>
            <span className="inline-flex items-center gap-0.5 text-xs font-extrabold px-2.5 py-1 rounded-full border-2 bg-emerald-100 dark:bg-emerald-900/80 text-emerald-900 dark:text-emerald-200 border-emerald-300 dark:border-emerald-700 shadow-2xs">
              <ArrowUpRight className="h-3.5 w-3.5 text-emerald-700 dark:text-emerald-300" />
              <span>↑ 12%</span>
            </span>
          </div>
        </div>

        <p className="text-[11px] font-semibold text-emerald-900/80 dark:text-emerald-300/80 mt-3 border-t border-emerald-200/80 dark:border-emerald-800/60 pt-2.5 leading-none">
          +142 new patients this month
        </p>
      </div>

      {/* Card 2: Active Accounts (Teal) */}
      <div className="rounded-2xl border-2 border-teal-300/90 dark:border-teal-800/80 bg-teal-50 dark:bg-teal-950/40 p-5 sm:p-5.5 shadow-md shadow-teal-950/5 hover:shadow-xl hover:shadow-teal-900/10 hover:border-teal-600 dark:hover:border-teal-500 hover:-translate-y-1 transition-all duration-200 ease-in-out group flex flex-col justify-between">
        <div>
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold text-teal-950 dark:text-teal-300 uppercase tracking-wider">
              Active Accounts
            </span>
            <div className="h-10 w-10 rounded-xl bg-teal-100/90 dark:bg-teal-900/60 border-2 border-teal-300 dark:border-teal-700 text-teal-700 dark:text-teal-300 flex items-center justify-center group-hover:bg-teal-700 group-hover:text-white group-hover:border-teal-700 transition-all duration-200 shadow-xs">
              <UserCheck className="h-5 w-5" />
            </div>
          </div>

          <div className="mt-3 flex items-baseline justify-between gap-2">
            <span className="text-3xl font-black text-slate-900 dark:text-white tracking-tight">
              1,080
            </span>
            <span className="inline-flex items-center gap-0.5 text-xs font-extrabold px-2.5 py-1 rounded-full border-2 bg-teal-100 dark:bg-teal-900/80 text-teal-900 dark:text-teal-200 border-teal-300 dark:border-teal-700 shadow-2xs">
              <ArrowUpRight className="h-3.5 w-3.5 text-teal-700 dark:text-teal-300" />
              <span>↑ 86.5%</span>
            </span>
          </div>
        </div>

        <p className="text-[11px] font-semibold text-teal-900/80 dark:text-teal-300/80 mt-3 border-t border-teal-200/80 dark:border-teal-800/60 pt-2.5 leading-none">
          Active patient retention rate
        </p>
      </div>

      {/* Card 3: Appointments Today (Blue) */}
      <div className="rounded-2xl border-2 border-blue-300/90 dark:border-blue-800/80 bg-blue-50 dark:bg-blue-950/40 p-5 sm:p-5.5 shadow-md shadow-blue-950/5 hover:shadow-xl hover:shadow-blue-900/10 hover:border-blue-600 dark:hover:border-blue-500 hover:-translate-y-1 transition-all duration-200 ease-in-out group flex flex-col justify-between">
        <div>
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold text-blue-950 dark:text-blue-300 uppercase tracking-wider">
              Appointments Today
            </span>
            <div className="h-10 w-10 rounded-xl bg-blue-100/90 dark:bg-blue-900/60 border-2 border-blue-300 dark:border-blue-700 text-blue-700 dark:text-blue-300 flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white group-hover:border-blue-600 transition-all duration-200 shadow-xs">
              <CalendarCheck className="h-5 w-5" />
            </div>
          </div>

          <div className="mt-3 flex items-baseline justify-between gap-2">
            <span className="text-3xl font-black text-slate-900 dark:text-white tracking-tight">
              32
            </span>
            <span className="inline-flex items-center gap-0.5 text-xs font-extrabold px-2.5 py-1 rounded-full border-2 bg-blue-100 dark:bg-blue-900/80 text-blue-900 dark:text-blue-200 border-blue-300 dark:border-blue-700 shadow-2xs">
              <ArrowUpRight className="h-3.5 w-3.5 text-blue-700 dark:text-blue-300" />
              <span>↑ 8%</span>
            </span>
          </div>
        </div>

        <p className="text-[11px] font-semibold text-blue-900/80 dark:text-blue-300/80 mt-3 border-t border-blue-200/80 dark:border-blue-800/60 pt-2.5 leading-none">
          4 currently in progress
        </p>
      </div>

      {/* Card 4: Pending Follow-ups (Amber) */}
      <div className="rounded-2xl border-2 border-amber-300/90 dark:border-amber-800/80 bg-amber-50 dark:bg-amber-950/40 p-5 sm:p-5.5 shadow-md shadow-amber-950/5 hover:shadow-xl hover:shadow-amber-900/10 hover:border-amber-600 dark:hover:border-amber-500 hover:-translate-y-1 transition-all duration-200 ease-in-out group flex flex-col justify-between">
        <div>
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold text-amber-950 dark:text-amber-300 uppercase tracking-wider">
              Pending Follow-ups
            </span>
            <div className="h-10 w-10 rounded-xl bg-amber-100/90 dark:bg-amber-900/60 border-2 border-amber-300 dark:border-amber-700 text-amber-800 dark:text-amber-300 flex items-center justify-center group-hover:bg-amber-600 group-hover:text-white group-hover:border-amber-600 transition-all duration-200 shadow-xs">
              <Clock className="h-5 w-5" />
            </div>
          </div>

          <div className="mt-3 flex items-baseline justify-between gap-2">
            <span className="text-3xl font-black text-slate-900 dark:text-white tracking-tight">
              14
            </span>
            <span className="inline-flex items-center gap-0.5 text-xs font-extrabold px-2.5 py-1 rounded-full border-2 bg-amber-100 dark:bg-amber-900/80 text-amber-950 dark:text-amber-200 border-amber-300 dark:border-amber-700 shadow-2xs">
              <ArrowDownRight className="h-3.5 w-3.5 text-amber-700 dark:text-amber-300" />
              <span>↓ 4%</span>
            </span>
          </div>
        </div>

        <p className="text-[11px] font-semibold text-amber-900/80 dark:text-amber-300/80 mt-3 border-t border-amber-200/80 dark:border-amber-800/60 pt-2.5 leading-none">
          Action required this week
        </p>
      </div>
    </div>
  );
}
