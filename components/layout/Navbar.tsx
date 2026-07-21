import { Bell, Search } from "lucide-react";

export default function Navbar() {
  const today = new Date().toLocaleDateString("en-IN", {
    weekday: "long",
    month: "long",
    day: "numeric",
  });

  return (
    <header className="flex items-center justify-between border-b border-[#D2E7DC] pb-5">
      <div>
        <h1 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
          Dashboard
        </h1>
        <p className="text-slate-500 text-sm mt-0.5">
          Welcome back, Dr. Sarah 👋
        </p>
      </div>

      <div className="flex items-center gap-3">
        <p className="text-xs sm:text-sm font-medium text-slate-600 hidden md:block px-3 py-1.5 rounded-lg bg-[#F8FCFA] border border-[#D2E7DC]">
          {today}
        </p>

        <button className="p-2.5 rounded-xl bg-[#F8FCFA] hover:bg-[#EEF7F2] border border-[#D2E7DC] text-slate-600 transition-colors shadow-2xs">
          <Search size={18} />
        </button>

        <div className="relative">
          <button className="p-2.5 rounded-xl bg-[#F8FCFA] hover:bg-[#EEF7F2] border border-[#D2E7DC] text-slate-600 transition-colors shadow-2xs">
            <Bell size={18} />
          </button>

          <span className="absolute top-2 right-2 h-2 w-2 rounded-full bg-[#2E7D5B]"></span>
        </div>
      </div>
    </header>
  );
}