"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import {
  Stethoscope,
  ArrowLeft,
  Mail,
  Lock,
  Eye,
  EyeOff,
  ShieldCheck,
  ArrowRight,
} from "lucide-react";
import ThemeToggle from "@/components/ThemeToggle";

export default function SignInPage() {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const [email, setEmail] = useState("hannan@autonique.com");
  const [password, setPassword] = useState("••••••••••••");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    router.push("/dashboard");
  };

  return (
    <div className="min-h-screen bg-[#F0F7F4] dark:bg-[#0B0F17] text-slate-800 dark:text-slate-100 font-sans flex flex-col justify-between p-4 sm:p-6 selection:bg-[#2E7D5B]/15 selection:text-[#2E7D5B] transition-colors duration-250">
      {/* Top Header Navigation */}
      <div className="max-w-7xl mx-auto w-full flex items-center justify-between py-2">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-xs font-semibold text-slate-600 dark:text-slate-300 hover:text-[#2E7D5B] dark:hover:text-emerald-400 transition-colors px-3 py-1.5 rounded-xl bg-white/70 dark:bg-slate-800/80 hover:bg-white dark:hover:bg-slate-800 border border-[#D2E7DC] dark:border-slate-700"
        >
          <ArrowLeft className="h-4 w-4" />
          <span>Back to Home</span>
        </Link>

        <div className="flex items-center gap-3">
          <ThemeToggle />
          <div className="flex items-center gap-2">
            <div className="h-7 w-7 rounded-lg bg-[#2E7D5B] dark:bg-emerald-600 text-white flex items-center justify-center shadow-xs">
              <Stethoscope className="h-4 w-4" />
            </div>
            <span className="font-bold text-sm text-slate-900 dark:text-white tracking-tight">
              AUTONIQUE
            </span>
          </div>
        </div>
      </div>

      {/* Main Centered Sign In Form Container */}
      <div className="flex-1 flex items-center justify-center py-10 px-2">
        <div className="w-full max-w-md bg-white dark:bg-slate-900 rounded-3xl border border-[#D2E7DC] dark:border-slate-800 p-8 sm:p-10 shadow-xl shadow-[#2E7D5B]/5 dark:shadow-emerald-950/20 relative overflow-hidden">
          {/* Subtle Ambient Glow */}
          <div className="absolute -top-24 -right-24 w-48 h-48 bg-[#2E7D5B]/10 dark:bg-emerald-500/10 rounded-full blur-2xl pointer-events-none" />

          {/* Header & Logo */}
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center h-14 w-14 rounded-2xl bg-[#E7F3EC] dark:bg-emerald-950 text-[#2E7D5B] dark:text-emerald-400 border border-[#C6E2D2] dark:border-emerald-800 mb-4 shadow-xs">
              <Stethoscope className="h-7 w-7" />
            </div>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              Sign in to AUTONIQUE
            </h1>
            <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-2">
              Enter your clinic account credentials to access your dashboard
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Email Field */}
            <div>
              <label
                htmlFor="email"
                className="block text-xs font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-2"
              >
                Work Email Address
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                  <Mail className="h-4 w-4" />
                </div>
                <input
                  id="email"
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="doctor@clinic.com"
                  className="w-full pl-10 pr-4 py-3 text-sm rounded-xl bg-[#F8FCFA] dark:bg-slate-800 border border-[#D2E7DC] dark:border-slate-700 text-slate-900 dark:text-slate-100 placeholder:text-slate-400 focus:bg-white dark:focus:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-[#2E7D5B]/30 focus:border-[#2E7D5B] transition-all"
                />
              </div>
            </div>

            {/* Password Field */}
            <div>
              <div className="flex items-center justify-between mb-2">
                <label
                  htmlFor="password"
                  className="block text-xs font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider"
                >
                  Password
                </label>
                <a
                  href="#"
                  onClick={(e) => e.preventDefault()}
                  className="text-xs font-semibold text-[#2E7D5B] dark:text-emerald-400 hover:underline"
                >
                  Forgot password?
                </a>
              </div>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                  <Lock className="h-4 w-4" />
                </div>
                <input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••••••"
                  className="w-full pl-10 pr-11 py-3 text-sm rounded-xl bg-[#F8FCFA] dark:bg-slate-800 border border-[#D2E7DC] dark:border-slate-700 text-slate-900 dark:text-slate-100 placeholder:text-slate-400 focus:bg-white dark:focus:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-[#2E7D5B]/30 focus:border-[#2E7D5B] transition-all"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute inset-y-0 right-0 pr-3.5 flex items-center text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 transition-colors"
                >
                  {showPassword ? (
                    <EyeOff className="h-4 w-4" />
                  ) : (
                    <Eye className="h-4 w-4" />
                  )}
                </button>
              </div>
            </div>

            {/* Remember Me Checkbox */}
            <div className="flex items-center justify-between pt-1">
              <label className="flex items-center gap-2.5 cursor-pointer select-none">
                <input
                  type="checkbox"
                  checked={rememberMe}
                  onChange={(e) => setRememberMe(e.target.checked)}
                  className="h-4 w-4 rounded border-[#D2E7DC] dark:border-slate-700 text-[#2E7D5B] focus:ring-[#2E7D5B]/30 accent-[#2E7D5B] cursor-pointer"
                />
                <span className="text-xs font-medium text-slate-600 dark:text-slate-300">
                  Remember this browser for 30 days
                </span>
              </label>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full inline-flex items-center justify-center gap-2 text-sm font-bold bg-[#2E7D5B] hover:bg-[#246348] dark:bg-emerald-600 dark:hover:bg-emerald-500 text-white py-3.5 px-6 rounded-xl shadow-lg shadow-[#2E7D5B]/20 dark:shadow-emerald-950/40 hover:shadow-xl active:scale-[0.99] transition-all duration-200"
            >
              <span>Sign In to Dashboard</span>
              <ArrowRight className="h-4 w-4" />
            </button>
          </form>

          {/* Security Badge */}
          <div className="mt-8 pt-6 border-t border-[#EAF4EE] dark:border-slate-800 text-center">
            <div className="inline-flex items-center justify-center gap-1.5 text-[11px] font-medium text-slate-500 dark:text-slate-400">
              <ShieldCheck className="h-4 w-4 text-[#2E7D5B] dark:text-emerald-400" />
              <span>256-bit Encrypted • HIPAA Compliant Session</span>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="text-center text-xs text-slate-400 dark:text-slate-500 py-2">
        © {new Date().getFullYear()} AUTONIQUE Healthcare Suite. All rights reserved.
      </div>
    </div>
  );
}
