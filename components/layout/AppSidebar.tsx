"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  Users,
  Settings,
  Stethoscope,
} from "lucide-react";

const menuItems = [
  {
    title: "Dashboard",
    href: "/dashboard",
    icon: LayoutDashboard,
  },
  {
    title: "Customers",
    href: "/customers",
    icon: Users,
  },
  {
    title: "Settings",
    href: "/settings",
    icon: Settings,
  },
];

export default function AppSidebar() {
  const pathname = usePathname();

  return (
    <aside className="w-64 h-screen bg-[#F8FCFA] dark:bg-[#080C14] border-r border-[#D2E7DC] dark:border-slate-800 text-slate-700 dark:text-slate-200 p-6 flex flex-col sticky top-0 transition-colors duration-250">
      {/* Logo */}
      <Link href="/" className="flex items-center gap-3.5 mb-10 group">
        <div className="bg-[#2E7D5B] dark:bg-emerald-600 p-2.5 rounded-xl text-white shadow-md shadow-[#2E7D5B]/20 group-hover:scale-105 transition-transform">
          <Stethoscope size={20} />
        </div>

        <div>
          <h1 className="font-bold text-lg text-slate-900 dark:text-slate-100 tracking-tight leading-none">AUTONIQUE</h1>
          <p className="text-[10px] font-semibold text-[#2E7D5B] dark:text-emerald-400 uppercase tracking-wider mt-1">Healthcare Suite</p>
        </div>
      </Link>

      {/* Navigation */}
      <nav className="space-y-1.5 flex-1">
        {menuItems.map((item) => {
          const Icon = item.icon;
          const active = pathname === item.href;

          return (
            <Link
              key={item.title}
              href={item.href}
              className={`flex items-center gap-3 px-4 py-3 rounded-xl font-medium text-base transition-all duration-150 ${
                active
                  ? "bg-[#2E7D5B]/12 dark:bg-emerald-950/60 text-[#2E7D5B] dark:text-emerald-400 font-semibold border-r-2 border-[#2E7D5B] dark:border-emerald-400"
                  : "text-slate-600 dark:text-slate-400 hover:bg-[#EEF7F2] dark:hover:bg-slate-800/80 hover:text-slate-900 dark:hover:text-slate-100"
              }`}
            >
              <Icon size={19} className={active ? "text-[#2E7D5B] dark:text-emerald-400" : "text-slate-400 dark:text-slate-500"} />

              <span>{item.title}</span>
            </Link>
          );
        })}
      </nav>

      {/* Bottom Profile */}
      <div className="mt-auto pt-6 border-t border-slate-100 dark:border-slate-800 flex items-center gap-3">
        <div className="h-9 w-9 rounded-full bg-[#2E7D5B]/10 dark:bg-emerald-950 text-[#2E7D5B] dark:text-emerald-400 font-bold text-xs flex items-center justify-center border border-[#2E7D5B]/20 dark:border-emerald-800">
          H
        </div>
        <div>
          <p className="text-sm font-semibold text-slate-900 dark:text-slate-100 leading-tight">Hannan</p>
          <p className="text-xs text-slate-400 dark:text-slate-500 font-medium">Chief Administrator</p>
        </div>
      </div>
    </aside>
  );
}