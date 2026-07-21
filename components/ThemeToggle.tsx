"use client";

import { useTheme } from "@/components/theme-provider";
import { Sun, Moon } from "lucide-react";

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === "dark";

  return (
    <button
      onClick={toggleTheme}
      title={isDark ? "Switch to Light Mode" : "Switch to Dark Mode"}
      aria-label="Toggle Theme"
      className="p-2 rounded-xl bg-[#F8FCFA] dark:bg-slate-800 hover:bg-[#EEF7F2] dark:hover:bg-slate-700 border border-[#D2E7DC] dark:border-slate-700 text-slate-700 dark:text-slate-200 transition-all shadow-2xs group relative"
    >
      <div className="relative h-4 w-4 flex items-center justify-center">
        <Sun
          size={16}
          className={`absolute transition-all duration-300 ${
            isDark
              ? "rotate-90 scale-0 opacity-0"
              : "rotate-0 scale-100 opacity-100 text-amber-500"
          }`}
        />
        <Moon
          size={16}
          className={`absolute transition-all duration-300 ${
            isDark
              ? "rotate-0 scale-100 opacity-100 text-emerald-400"
              : "-rotate-90 scale-0 opacity-0"
          }`}
        />
      </div>
    </button>
  );
}
