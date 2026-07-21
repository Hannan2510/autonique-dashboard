"use client";

import { useState, useEffect, useMemo, useCallback } from "react";
import { useRouter } from "next/navigation";
import {
  Search,
  LayoutDashboard,
  Users,
  Settings,
  User,
  Building2,
  Bell,
  ShieldCheck,
  CreditCard,
  Palette,
  Share2,
  Calendar,
  MessageSquare,
  FileText,
  Lock,
  ArrowRight,
  Sparkles,
  Command,
  X,
} from "lucide-react";

interface SearchItem {
  id: string;
  title: string;
  category: "Navigation" | "Patients" | "Settings" | "Integrations";
  subtitle: string;
  href: string;
  icon: any;
  keywords: string[];
}

const searchDataset: SearchItem[] = [
  // Navigation
  {
    id: "nav-dashboard",
    title: "Dashboard Overview",
    category: "Navigation",
    subtitle: "Real-time clinic metrics, revenue charts & AI receptionist activity",
    href: "/dashboard",
    icon: LayoutDashboard,
    keywords: ["dashboard", "home", "analytics", "revenue", "kpi", "overview"],
  },
  {
    id: "nav-customers",
    title: "Patients & CRM Directory",
    category: "Navigation",
    subtitle: "Manage all registered patients, medical records & doctor assignments",
    href: "/customers",
    icon: Users,
    keywords: ["patients", "customers", "crm", "directory", "records", "medical history"],
  },
  {
    id: "nav-settings",
    title: "Clinic & Account Settings",
    category: "Navigation",
    subtitle: "Doctor profile, clinic info, notifications, billing & security",
    href: "/settings",
    icon: Settings,
    keywords: ["settings", "preferences", "config", "profile", "billing"],
  },
  {
    id: "nav-signin",
    title: "Sign In & Authentication",
    category: "Navigation",
    subtitle: "Secure 256-bit encrypted doctor portal sign in",
    href: "/signin",
    icon: Lock,
    keywords: ["signin", "login", "auth", "logout", "portal"],
  },

  // Patients
  {
    id: "pat-eleanor",
    title: "Eleanor Vance",
    category: "Patients",
    subtitle: "ID: #PAT-9021 • Cardiology • Dr. Sarah Jenkins",
    href: "/customers",
    icon: User,
    keywords: ["eleanor", "vance", "pat-9021", "cardiology"],
  },
  {
    id: "pat-aarav",
    title: "Aarav Patel",
    category: "Patients",
    subtitle: "ID: #PAT-8812 • Orthopedics • Dr. David Miller",
    href: "/customers",
    icon: User,
    keywords: ["aarav", "patel", "pat-8812", "orthopedics"],
  },
  {
    id: "pat-sophia",
    title: "Sophia Chen",
    category: "Patients",
    subtitle: "ID: #PAT-7432 • Cardiology • Dr. Sarah Jenkins",
    href: "/customers",
    icon: User,
    keywords: ["sophia", "chen", "pat-7432", "cardiology"],
  },
  {
    id: "pat-marcus",
    title: "Marcus Brody",
    category: "Patients",
    subtitle: "ID: #PAT-6201 • Neurology • Dr. Priya Nair",
    href: "/customers",
    icon: User,
    keywords: ["marcus", "brody", "pat-6201", "neurology"],
  },

  // Settings
  {
    id: "set-profile",
    title: "Doctor Profile Credentials",
    category: "Settings",
    subtitle: "Specialty, MCI license number & prescription bio",
    href: "/settings",
    icon: User,
    keywords: ["profile", "doctor", "license", "specialty", "mci"],
  },
  {
    id: "set-clinic",
    title: "Clinic Details & Operating Hours",
    category: "Settings",
    subtitle: "Clinic name, GSTIN tax registration & multi-branch config",
    href: "/settings",
    icon: Building2,
    keywords: ["clinic", "address", "operating hours", "gstin", "tax", "branch"],
  },
  {
    id: "set-notifications",
    title: "WhatsApp & SMS Notifications",
    category: "Settings",
    subtitle: "Automated visit reminders & pre-consultation guidelines",
    href: "/settings",
    icon: Bell,
    keywords: ["notifications", "whatsapp", "sms", "alerts", "reminders"],
  },
  {
    id: "set-security",
    title: "Security & 2FA Controls",
    category: "Settings",
    subtitle: "Two-factor authentication, password & HIPAA audit logs",
    href: "/settings",
    icon: ShieldCheck,
    keywords: ["security", "2fa", "password", "hipaa", "audit"],
  },
  {
    id: "set-billing",
    title: "Billing & Active Plan",
    category: "Settings",
    subtitle: "Professional plan subscription, VISA auto-renew & invoices",
    href: "/settings",
    icon: CreditCard,
    keywords: ["billing", "subscription", "plan", "invoices", "visa", "payment"],
  },
  {
    id: "set-appearance",
    title: "Interface Theme & Dark Mode",
    category: "Settings",
    subtitle: "Light / Dark mode toggle & information density settings",
    href: "/settings",
    icon: Palette,
    keywords: ["appearance", "theme", "dark mode", "light mode", "styling"],
  },

  // Integrations
  {
    id: "int-whatsapp",
    title: "WhatsApp Business API",
    category: "Integrations",
    subtitle: "Automated booking links & e-prescription PDF dispatch",
    href: "/settings",
    icon: MessageSquare,
    keywords: ["whatsapp", "api", "messaging", "chat", "bot"],
  },
  {
    id: "int-calendar",
    title: "Google Calendar Sync",
    category: "Integrations",
    subtitle: "Real-time doctor appointment schedule synchronization",
    href: "/settings",
    icon: Calendar,
    keywords: ["calendar", "google", "sync", "schedule", "slots"],
  },
  {
    id: "int-[#2E7D5B]-lab",
    title: "Central Diagnostic Lab API",
    category: "Integrations",
    subtitle: "Direct pathology report import into EMR patient records",
    href: "/settings",
    icon: FileText,
    keywords: ["lab", "pathology", "diagnostics", "reports", "emr"],
  },
];

interface GlobalSearchModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function GlobalSearchModal({ isOpen, onClose }: GlobalSearchModalProps) {
  const router = useRouter();
  const [query, setQuery] = useState("");
  const [selectedIndex, setSelectedIndex] = useState(0);

  // Filter search results
  const filteredResults = useMemo(() => {
    if (!query.trim()) return searchDataset;
    const q = query.toLowerCase().trim();
    return searchDataset.filter(
      (item) =>
        item.title.toLowerCase().includes(q) ||
        item.subtitle.toLowerCase().includes(q) ||
        item.category.toLowerCase().includes(q) ||
        item.keywords.some((k) => k.toLowerCase().includes(q))
    );
  }, [query]);

  // Reset selected index when query changes
  useEffect(() => {
    setSelectedIndex(0);
  }, [query]);

  // Select and navigate to result
  const handleSelect = useCallback(
    (item: SearchItem) => {
      onClose();
      setQuery("");
      router.push(item.href);
    },
    [onClose, router]
  );

  // Keyboard navigation & Shortcuts
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Toggle search on Cmd+K or Ctrl+K
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        if (isOpen) {
          onClose();
        }
      }

      if (!isOpen) return;

      if (e.key === "Escape") {
        e.preventDefault();
        onClose();
      } else if (e.key === "ArrowDown") {
        e.preventDefault();
        setSelectedIndex((prev) =>
          prev < filteredResults.length - 1 ? prev + 1 : 0
        );
      } else if (e.key === "ArrowUp") {
        e.preventDefault();
        setSelectedIndex((prev) =>
          prev > 0 ? prev - 1 : filteredResults.length - 1
        );
      } else if (e.key === "Enter") {
        e.preventDefault();
        if (filteredResults[selectedIndex]) {
          handleSelect(filteredResults[selectedIndex]);
        }
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose, filteredResults, selectedIndex, handleSelect]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-16 sm:pt-24 px-4 bg-slate-950/60 backdrop-blur-xs animate-in fade-in-50 duration-150">
      {/* Modal Dialog */}
      <div
        className="w-full max-w-2xl bg-white dark:bg-slate-900 border border-[#D2E7DC] dark:border-slate-800 rounded-2xl shadow-2xl shadow-slate-950/20 overflow-hidden flex flex-col transition-colors duration-250 animate-in zoom-in-95 duration-150"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Search Header Input Bar */}
        <div className="flex items-center gap-3 px-4 py-3.5 border-b border-[#D2E7DC] dark:border-slate-800 bg-[#F8FCFA] dark:bg-slate-900/90">
          <Search className="h-5 w-5 text-[#2E7D5B] dark:text-emerald-400 shrink-0" />
          <input
            autoFocus
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Type a command or search across dashboard, patients, settings..."
            className="w-full bg-transparent text-sm sm:text-base font-medium text-slate-900 dark:text-slate-100 placeholder:text-slate-400 dark:placeholder:text-slate-500 focus:outline-none"
          />
          {query ? (
            <button
              onClick={() => setQuery("")}
              className="p-1 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 rounded-md"
            >
              <X className="h-4 w-4" />
            </button>
          ) : (
            <kbd className="hidden sm:inline-flex items-center gap-1 text-[10px] font-bold text-slate-400 dark:text-slate-500 bg-slate-100 dark:bg-slate-800 px-2 py-0.5 rounded-md border border-slate-200 dark:border-slate-700">
              ESC
            </kbd>
          )}
        </div>

        {/* Search Results List */}
        <div className="max-h-96 overflow-y-auto p-2 space-y-1">
          {filteredResults.length === 0 ? (
            <div className="py-10 text-center text-xs sm:text-sm text-slate-500 dark:text-slate-400">
              No results found for &ldquo;<span className="font-semibold text-slate-800 dark:text-slate-200">{query}</span>&rdquo;.
            </div>
          ) : (
            filteredResults.map((item, idx) => {
              const Icon = item.icon;
              const isSelected = idx === selectedIndex;
              return (
                <div
                  key={item.id}
                  onClick={() => handleSelect(item)}
                  onMouseEnter={() => setSelectedIndex(idx)}
                  className={`flex items-center justify-between px-3.5 py-2.5 rounded-xl cursor-pointer transition-all duration-150 ${
                    isSelected
                      ? "bg-[#2E7D5B]/10 dark:bg-emerald-950/80 border border-[#2E7D5B]/30 dark:border-emerald-700/60"
                      : "hover:bg-[#F2F8F5] dark:hover:bg-slate-800/60 border border-transparent"
                  }`}
                >
                  <div className="flex items-center gap-3 min-w-0">
                    <div
                      className={`h-9 w-9 rounded-xl flex items-center justify-center shrink-0 border transition-all ${
                        isSelected
                          ? "bg-[#2E7D5B] text-white border-[#2E7D5B] shadow-2xs"
                          : "bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 border-slate-200 dark:border-slate-700"
                      }`}
                    >
                      <Icon className="h-4.5 w-4.5" />
                    </div>

                    <div className="min-w-0">
                      <div className="flex items-center gap-2">
                        <span
                          className={`text-xs font-bold truncate ${
                            isSelected
                              ? "text-[#2E7D5B] dark:text-emerald-300"
                              : "text-slate-900 dark:text-slate-100"
                          }`}
                        >
                          {item.title}
                        </span>
                        <span className="text-[9px] font-extrabold px-1.5 py-0.5 rounded-md bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400 border border-slate-200 dark:border-slate-700 uppercase">
                          {item.category}
                        </span>
                      </div>
                      <p className="text-[11px] text-slate-500 dark:text-slate-400 truncate mt-0.5">
                        {item.subtitle}
                      </p>
                    </div>
                  </div>

                  <ArrowRight
                    className={`h-4 w-4 shrink-0 transition-transform ${
                      isSelected
                        ? "text-[#2E7D5B] dark:text-emerald-400 translate-x-0.5"
                        : "text-slate-300 dark:text-slate-600"
                    }`}
                  />
                </div>
              );
            })
          )}
        </div>

        {/* Modal Footer Controls Bar */}
        <div className="px-4 py-2.5 bg-[#F8FCFA] dark:bg-slate-900/90 border-t border-[#D2E7DC] dark:border-slate-800 flex items-center justify-between text-[11px] text-slate-500 dark:text-slate-400">
          <div className="flex items-center gap-3">
            <span className="flex items-center gap-1">
              <kbd className="px-1.5 py-0.5 rounded-md bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 font-mono font-bold text-[10px]">
                ↑↓
              </kbd>
              <span>Navigate</span>
            </span>
            <span className="flex items-center gap-1">
              <kbd className="px-1.5 py-0.5 rounded-md bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 font-mono font-bold text-[10px]">
                ↵
              </kbd>
              <span>Select</span>
            </span>
          </div>

          <div className="flex items-center gap-1 text-[#2E7D5B] dark:text-emerald-400 font-semibold">
            <Sparkles className="h-3 w-3" />
            <span>AUTONIQUE Command Palette</span>
          </div>
        </div>
      </div>

      {/* Backdrop overlay listener */}
      <div className="fixed inset-0 -z-10" onClick={onClose} />
    </div>
  );
}
