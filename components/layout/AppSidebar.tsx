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
    <aside className="w-64 h-screen bg-[#F8FCFA] border-r border-[#D2E7DC] text-slate-700 p-6 flex flex-col sticky top-0">
      {/* Logo */}
      <Link href="/" className="flex items-center gap-3 mb-10 group">
        <div className="bg-[#2E7D5B] p-2.5 rounded-xl text-white shadow-md shadow-[#2E7D5B]/20 group-hover:scale-105 transition-transform">
          <Stethoscope size={20} />
        </div>

        <div>
          <h1 className="font-bold text-lg text-slate-900 tracking-tight leading-none">AUTONIQUE</h1>
          <p className="text-[10px] font-semibold text-[#2E7D5B] uppercase tracking-wider mt-1">Healthcare Suite</p>
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
              className={`flex items-center gap-3 px-4 py-3 rounded-xl font-medium text-sm transition-all duration-150 ${
                active
                  ? "bg-[#2E7D5B]/12 text-[#2E7D5B] font-semibold border-r-2 border-[#2E7D5B]"
                  : "text-slate-600 hover:bg-[#EEF7F2] hover:text-slate-900"
              }`}
            >
              <Icon size={18} className={active ? "text-[#2E7D5B]" : "text-slate-400"} />

              <span>{item.title}</span>
            </Link>
          );
        })}
      </nav>

      {/* Bottom Profile */}
      <div className="mt-auto pt-6 border-t border-slate-100 flex items-center gap-3">
        <div className="h-9 w-9 rounded-full bg-[#2E7D5B]/10 text-[#2E7D5B] font-bold text-xs flex items-center justify-center border border-[#2E7D5B]/20">
          SA
        </div>
        <div>
          <p className="text-xs font-semibold text-slate-900 leading-tight">Dr. Sarah Ahmed</p>
          <p className="text-[11px] text-slate-400 font-medium">Chief Administrator</p>
        </div>
      </div>
    </aside>
  );
}