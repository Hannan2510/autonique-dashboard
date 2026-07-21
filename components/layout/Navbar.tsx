"use client";

import { useState, ReactNode, useEffect } from "react";
import { Bell, Search, User, ChevronDown, LogOut, Settings } from "lucide-react";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import ThemeToggle from "@/components/ThemeToggle";
import GlobalSearchModal from "@/components/search/GlobalSearchModal";

interface NavbarProps {
  title?: string;
  description?: string;
  action?: ReactNode;
}

export default function Navbar({ title, description, action }: NavbarProps) {
  const [showProfileMenu, setShowProfileMenu] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const today = new Date().toLocaleDateString("en-IN", {
    weekday: "long",
    month: "long",
    day: "numeric",
  });

  // Global Cmd+K / Ctrl+K keyboard shortcut listener
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setIsSearchOpen((prev) => !prev);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <>
      <header className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-[#D2E7DC] dark:border-slate-800 pb-4 gap-4 transition-colors duration-250">
        {(title || description || action) && (
          <div className="flex items-center justify-between flex-1">
            <div>
              {title && (
                <h1 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-slate-100 tracking-tight">
                  {title}
                </h1>
              )}
              {description && (
                <p className="text-slate-500 dark:text-slate-400 text-xs sm:text-sm mt-0.5 font-medium">
                  {description}
                </p>
              )}
            </div>
            {action && <div className="ml-4 shrink-0">{action}</div>}
          </div>
        )}

        {/* Right Utility Bar */}
        <div className="flex items-center gap-2 sm:gap-2.5 shrink-0 ml-auto flex-wrap">
          {/* Clinic Status Badge */}
          <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-emerald-50 dark:bg-emerald-950/80 text-[#2E7D5B] dark:text-emerald-400 border border-emerald-300/70 dark:border-emerald-800 text-xs font-bold shadow-2xs">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#2E7D5B] dark:bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#2E7D5B] dark:bg-emerald-400"></span>
            </span>
            <span>Clinic Open</span>
          </div>

          {/* Date Badge */}
          <p className="text-xs sm:text-sm font-semibold text-slate-600 dark:text-slate-300 hidden lg:block px-3 py-1.5 rounded-xl bg-[#F8FCFA] dark:bg-slate-800 border border-[#D2E7DC] dark:border-slate-700">
            {today}
          </p>

          {/* Search Button (Triggers Command Palette Modal) */}
          <button
            onClick={() => setIsSearchOpen(true)}
            className="p-2 rounded-xl bg-[#F8FCFA] dark:bg-slate-800 hover:bg-[#EEF7F2] dark:hover:bg-slate-700 border border-[#D2E7DC] dark:border-slate-700 text-slate-600 dark:text-slate-300 hover:text-[#2E7D5B] dark:hover:text-emerald-400 transition-all shadow-2xs flex items-center gap-2 text-xs font-medium px-2.5 cursor-pointer"
          >
            <Search size={16} />
            <span className="hidden xl:inline text-slate-400 dark:text-slate-500">Search... (⌘K)</span>
          </button>

          {/* Notification Bell */}
          <div className="relative">
            <button className="p-2 rounded-xl bg-[#F8FCFA] dark:bg-slate-800 hover:bg-[#EEF7F2] dark:hover:bg-slate-700 border border-[#D2E7DC] dark:border-slate-700 text-slate-600 dark:text-slate-300 transition-colors shadow-2xs">
              <Bell size={16} />
            </button>
            <span className="absolute top-1.5 right-1.5 h-2 w-2 rounded-full bg-[#2E7D5B] dark:bg-emerald-400 ring-2 ring-white dark:ring-slate-900"></span>
          </div>

          {/* Theme Toggle Button */}
          <ThemeToggle />

          {/* User Profile Avatar with Dropdown Menu */}
          <div className="relative ml-1">
            <button
              onClick={() => setShowProfileMenu(!showProfileMenu)}
              className="flex items-center gap-2 p-1 pl-1.5 pr-2.5 rounded-xl bg-[#F8FCFA] dark:bg-slate-800 hover:bg-[#EEF7F2] dark:hover:bg-slate-700 border border-[#D2E7DC] dark:border-slate-700 transition-all shadow-2xs"
            >
              <Avatar className="h-7 w-7 border border-[#2E7D5B]/30 dark:border-emerald-500/30">
                <AvatarFallback className="bg-[#2E7D5B] dark:bg-emerald-600 text-white font-extrabold text-[10px]">
                  H
                </AvatarFallback>
              </Avatar>
              <span className="text-xs font-bold text-slate-800 dark:text-slate-200 hidden sm:inline">
                Hannan
              </span>
              <ChevronDown size={14} className="text-slate-400 dark:text-slate-500" />
            </button>

            {showProfileMenu && (
              <div className="absolute right-0 mt-2 w-52 rounded-xl bg-white dark:bg-slate-800 border border-[#D2E7DC] dark:border-slate-700 p-1.5 shadow-lg z-50 text-xs font-medium space-y-0.5 animate-in fade-in-50 duration-150">
                <div className="px-3 py-2 border-b border-slate-100 dark:border-slate-700">
                  <div className="font-bold text-slate-900 dark:text-slate-100">Hannan</div>
                  <div className="text-[10px] text-slate-500 dark:text-slate-400">Chief Cardiologist</div>
                </div>
                <a
                  href="/settings"
                  className="flex items-center gap-2 px-3 py-1.5 rounded-lg text-slate-700 dark:text-slate-200 hover:bg-[#F2F8F5] dark:hover:bg-slate-700 hover:text-[#2E7D5B] dark:hover:text-emerald-400"
                >
                  <User size={14} />
                  <span>My Profile</span>
                </a>
                <a
                  href="/settings"
                  className="flex items-center gap-2 px-3 py-1.5 rounded-lg text-slate-700 dark:text-slate-200 hover:bg-[#F2F8F5] dark:hover:bg-slate-700 hover:text-[#2E7D5B] dark:hover:text-emerald-400"
                >
                  <Settings size={14} />
                  <span>Clinic Settings</span>
                </a>
                <div className="my-1 border-t border-slate-100 dark:border-slate-700"></div>
                <a
                  href="/signin"
                  className="flex items-center gap-2 px-3 py-1.5 rounded-lg text-rose-600 dark:text-rose-400 hover:bg-rose-50 dark:hover:bg-rose-950/50"
                >
                  <LogOut size={14} />
                  <span>Sign Out</span>
                </a>
              </div>
            )}
          </div>
        </div>
      </header>

      {/* Global Command Palette Search Modal */}
      <GlobalSearchModal
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
      />
    </>
  );
}