import { Bell, Search } from "lucide-react";

export default function Navbar() {
    const today = new Date().toLocaleDateString("en-IN", {
  weekday: "long",
  month: "long",
  day: "numeric",
});
  return (
    <header className="flex items-center justify-between border-b border-slate-800 pb-5">
      <div>
        <h1 className="text-3xl font-bold text-white">
          Dashboard
        </h1>
        <p className="text-slate-400 text-sm">
          Welcome back, Dr. Sarah 👋
        </p>
      </div>

      <div className="flex items-center gap-4">

  <p className="text-sm text-slate-400">
    {today}
  </p>

  <button className="p-2 rounded-lg bg-slate-900 hover:bg-slate-800 transition">
    <Search size={18} className="text-slate-300" />
  </button>

  <div className="relative">
  <button className="p-2 rounded-lg bg-slate-900 hover:bg-slate-800 transition">
    <Bell size={18} className="text-slate-300" />
  </button>

  <span className="absolute -top-1 -right-1 h-3 w-3 rounded-full bg-red-500"></span>
</div>
</div>
    </header>
  );
}