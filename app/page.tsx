import Link from "next/link";
import Image from "next/image";
import {
  Stethoscope,
  Calendar,
  Users,
  ShieldCheck,
  Activity,
  ArrowRight,
  CheckCircle2,
  Clock,
  Sparkles,
  TrendingUp,
  Building2,
  Star,
  ChevronRight,
  FileText,
  Bot,
  CreditCard,
  Check,
  Headphones,
} from "lucide-react";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";

import ThemeToggle from "@/components/ThemeToggle";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#F2F8F5] dark:bg-[#0B0F17] text-slate-800 dark:text-slate-100 font-sans selection:bg-[#2E7D5B]/15 selection:text-[#2E7D5B] transition-colors duration-250">
      {/* Navigation Bar */}
      <header className="sticky top-0 z-50 bg-white/85 dark:bg-[#0B0F17]/85 backdrop-blur-md border-b border-[#D2E7DC] dark:border-slate-800 transition-colors duration-250">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="h-9 w-9 rounded-xl bg-[#2E7D5B] text-white flex items-center justify-center shadow-md shadow-[#2E7D5B]/20">
              <Stethoscope className="h-4.5 w-4.5" />
            </div>
            <div>
              <span className="font-bold text-lg tracking-tight text-slate-900 dark:text-white">
                AUTONIQUE
              </span>
              <span className="block text-[9px] font-semibold tracking-widest text-[#2E7D5B] dark:text-emerald-400 uppercase">
                Healthcare Suite
              </span>
            </div>
          </div>

          <nav className="hidden md:flex items-center gap-7 text-xs sm:text-sm font-medium text-slate-600 dark:text-slate-300">
            <a href="#features" className="hover:text-[#2E7D5B] dark:hover:text-emerald-400 transition-colors">
              Features
            </a>
            <a href="#solutions" className="hover:text-[#2E7D5B] dark:hover:text-emerald-400 transition-colors">
              Solutions
            </a>
            <a href="#metrics" className="hover:text-[#2E7D5B] dark:hover:text-emerald-400 transition-colors">
              Impact
            </a>
            <a href="#pricing" className="hover:text-[#2E7D5B] dark:hover:text-emerald-400 transition-colors">
              Pricing
            </a>
          </nav>

          <div className="flex items-center gap-3">
            <ThemeToggle />
            <Link
              href="/signin"
              className="text-xs sm:text-sm font-semibold text-slate-700 dark:text-slate-200 hover:text-[#2E7D5B] dark:hover:text-emerald-400 transition-colors hidden sm:inline-block"
            >
              Sign In
            </Link>
            <Link
              href="/dashboard"
              className="inline-flex items-center justify-center gap-1.5 text-xs sm:text-sm font-semibold bg-[#2E7D5B] hover:bg-[#246348] dark:bg-emerald-600 dark:hover:bg-emerald-500 text-white px-4 py-2 rounded-xl shadow-xs shadow-[#2E7D5B]/25 transition-all duration-200 hover:shadow-md hover:shadow-[#2E7D5B]/30 active:scale-[0.98]"
            >
              <span>Launch Dashboard</span>
              <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>
        </div>
      </header>

      {/* Hero Section (Target: 70-80vh) */}
      <section className="relative py-12 md:py-16 min-h-[68vh] md:min-h-[75vh] flex items-center justify-center overflow-hidden">
        {/* Full-width Healthcare Background Layer (Blur Atmosphere) */}
        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
          <Image
            src="/hero-bg.jpg"
            alt="Healthcare Clinic Atmosphere Background"
            fill
            priority
            quality={85}
            sizes="100vw"
            className="object-cover scale-100 blur-0 opacity-90"
          />
          {/* White / Light-Green Overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#E7F3EC]/75 via-[#F2F8F5]/80 to-white/90 mix-blend-normal" />
        </div>

        {/* Subtle Background Radial Glow */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[350px] bg-[#2E7D5B]/10 blur-3xl rounded-full pointer-events-none z-0" />

        <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
          {/* Tagline Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#2E7D5B]/10 border border-[#2E7D5B]/20 text-[#2E7D5B] text-xs font-semibold mb-4 shadow-2xs">
            <Sparkles className="h-3.5 w-3.5" />
            <span>Next-Gen Medical Practice Platform</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight max-w-4xl mx-auto leading-[1.15]">
            Elevate Patient Care with{" "}
            <span className="text-[#2E7D5B] underline decoration-[#2E7D5B]/30 underline-offset-4">
              Intelligent Clinic Automation
            </span>
          </h1>

          {/* Subtitle */}
          <p className="mt-3.5 text-base sm:text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Streamline patient appointments, electronic health records, doctor workflows, and billing in one clean, healthcare-focused workspace.
          </p>

          {/* Action CTAs */}
          <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-3.5 max-w-md mx-auto">
            <Link
              href="/dashboard"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 text-sm font-semibold bg-[#2E7D5B] hover:bg-[#246348] text-white px-6 py-2.5 rounded-xl shadow-md shadow-[#2E7D5B]/20 transition-all duration-200 hover:shadow-lg hover:shadow-[#2E7D5B]/30 hover:-translate-y-0.5"
            >
              <span>Explore Live Dashboard</span>
              <ArrowRight className="h-4 w-4" />
            </Link>

            <a
              href="#features"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 text-sm font-semibold bg-white hover:bg-slate-50 text-slate-700 border border-slate-200 px-5 py-2.5 rounded-xl shadow-2xs transition-colors"
            >
              <span>Book Demo</span>
            </a>
          </div>

          {/* Trust Highlights */}
          <div className="mt-6 flex flex-wrap items-center justify-center gap-4 sm:gap-6 text-xs font-medium text-slate-500">
            <div className="flex items-center gap-1.5">
              <ShieldCheck className="h-3.5 w-3.5 text-[#2E7D5B]" />
              <span>HIPAA Compliant Security</span>
            </div>
            <div className="w-1 h-1 rounded-full bg-slate-300 hidden sm:block" />
            <div className="flex items-center gap-1.5">
              <CheckCircle2 className="h-3.5 w-3.5 text-[#2E7D5B]" />
              <span>Zero Configuration Needed</span>
            </div>
            <div className="w-1 h-1 rounded-full bg-slate-300 hidden sm:block" />
            <div className="flex items-center gap-1.5">
              <Clock className="h-3.5 w-3.5 text-[#2E7D5B]" />
              <span>24/7 Priority Support</span>
            </div>
          </div>
        </div>
      </section>

      {/* Feature Section */}
      <section id="features" className="scroll-mt-20 py-8 md:py-10 bg-white/70 border-t border-slate-200/60 relative">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-5">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight">
              Why Clinics Choose AUTONIQUE
            </h2>
            <p className="text-slate-500 mt-1.5 text-xs sm:text-sm leading-relaxed">
              Everything your clinic needs to automate operations, improve patient experience, and grow efficiently.
            </p>
          </div>

          {/* Responsive 3-Column Feature Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3.5 sm:gap-4">
            {/* Row 1, Card 1: Smart Appointment Scheduling */}
            <div className="bg-white/95 backdrop-blur-xs p-4 sm:p-4.5 rounded-xl border border-slate-200/80 shadow-2xs hover:shadow-md hover:shadow-[#2E7D5B]/10 hover:border-[#2E7D5B]/40 transition-all duration-300 hover:-translate-y-0.5 flex flex-col justify-between group relative">
              <div>
                <div className="h-8 w-8 rounded-lg bg-[#2E7D5B]/10 border border-[#2E7D5B]/20 text-[#2E7D5B] flex items-center justify-center mb-2.5 group-hover:bg-[#2E7D5B] group-hover:text-white group-hover:shadow-2xs transition-all duration-300">
                  <Calendar className="h-4 w-4" />
                </div>
                <h3 className="text-sm sm:text-base font-bold text-slate-900 tracking-tight group-hover:text-[#2E7D5B] transition-colors duration-200">
                  Smart Appointment Scheduling
                </h3>
                <p className="text-slate-500 text-xs mt-1 leading-snug">
                  Automate online booking slots, doctor schedules, and instant automated visit reminders.
                </p>
              </div>
              <Link
                href="/dashboard"
                className="mt-2.5 pt-2 border-t border-slate-100 flex items-center gap-1 text-[11px] font-semibold text-[#2E7D5B] group-hover:gap-1.5 transition-all duration-200"
              >
                <span>Learn more</span>
                <ArrowRight className="h-3 w-3 group-hover:translate-x-0.5 transition-transform duration-200" />
              </Link>
            </div>

            {/* Row 1, Card 2: AI Receptionist */}
            <div className="bg-white/95 backdrop-blur-xs p-4 sm:p-4.5 rounded-xl border border-slate-200/80 shadow-2xs hover:shadow-md hover:shadow-[#2E7D5B]/10 hover:border-[#2E7D5B]/40 transition-all duration-300 hover:-translate-y-0.5 flex flex-col justify-between group relative">
              <div>
                <div className="h-8 w-8 rounded-lg bg-[#2E7D5B]/10 border border-[#2E7D5B]/20 text-[#2E7D5B] flex items-center justify-center mb-2.5 group-hover:bg-[#2E7D5B] group-hover:text-white group-hover:shadow-2xs transition-all duration-300">
                  <Bot className="h-4 w-4" />
                </div>
                <h3 className="text-sm sm:text-base font-bold text-slate-900 tracking-tight group-hover:text-[#2E7D5B] transition-colors duration-200">
                  AI Receptionist
                </h3>
                <p className="text-slate-500 text-xs mt-1 leading-snug">
                  Handle patient inquiries, triage booking requests, and automate front-desk responses 24/7.
                </p>
              </div>
              <Link
                href="/dashboard"
                className="mt-2.5 pt-2 border-t border-slate-100 flex items-center gap-1 text-[11px] font-semibold text-[#2E7D5B] group-hover:gap-1.5 transition-all duration-200"
              >
                <span>Learn more</span>
                <ArrowRight className="h-3 w-3 group-hover:translate-x-0.5 transition-transform duration-200" />
              </Link>
            </div>

            {/* Row 1, Card 3: Clinic Analytics */}
            <div className="bg-white/95 backdrop-blur-xs p-4 sm:p-4.5 rounded-xl border border-slate-200/80 shadow-2xs hover:shadow-md hover:shadow-[#2E7D5B]/10 hover:border-[#2E7D5B]/40 transition-all duration-300 hover:-translate-y-0.5 flex flex-col justify-between group relative">
              <div>
                <div className="h-8 w-8 rounded-lg bg-[#2E7D5B]/10 border border-[#2E7D5B]/20 text-[#2E7D5B] flex items-center justify-center mb-2.5 group-hover:bg-[#2E7D5B] group-hover:text-white group-hover:shadow-2xs transition-all duration-300">
                  <TrendingUp className="h-4 w-4" />
                </div>
                <h3 className="text-sm sm:text-base font-bold text-slate-900 tracking-tight group-hover:text-[#2E7D5B] transition-colors duration-200">
                  Clinic Analytics
                </h3>
                <p className="text-slate-500 text-xs mt-1 leading-snug">
                  Track real-time patient footfall, revenue growth, doctor productivity, and operational metrics.
                </p>
              </div>
              <Link
                href="/dashboard"
                className="mt-2.5 pt-2 border-t border-slate-100 flex items-center gap-1 text-[11px] font-semibold text-[#2E7D5B] group-hover:gap-1.5 transition-all duration-200"
              >
                <span>Learn more</span>
                <ArrowRight className="h-3 w-3 group-hover:translate-x-0.5 transition-transform duration-200" />
              </Link>
            </div>

            {/* Row 2, Card 1: Digital Patient Records */}
            <div className="bg-white/95 backdrop-blur-xs p-4 sm:p-4.5 rounded-xl border border-slate-200/80 shadow-2xs hover:shadow-md hover:shadow-[#2E7D5B]/10 hover:border-[#2E7D5B]/40 transition-all duration-300 hover:-translate-y-0.5 flex flex-col justify-between group relative">
              <div>
                <div className="h-8 w-8 rounded-lg bg-[#2E7D5B]/10 border border-[#2E7D5B]/20 text-[#2E7D5B] flex items-center justify-center mb-2.5 group-hover:bg-[#2E7D5B] group-hover:text-white group-hover:shadow-2xs transition-all duration-300">
                  <FileText className="h-4 w-4" />
                </div>
                <h3 className="text-sm sm:text-base font-bold text-slate-900 tracking-tight group-hover:text-[#2E7D5B] transition-colors duration-200">
                  Digital Patient Records
                </h3>
                <p className="text-slate-500 text-xs mt-1 leading-snug">
                  Securely access patient histories, consultation notes, e-prescriptions, and lab reports.
                </p>
              </div>
              <Link
                href="/dashboard"
                className="mt-2.5 pt-2 border-t border-slate-100 flex items-center gap-1 text-[11px] font-semibold text-[#2E7D5B] group-hover:gap-1.5 transition-all duration-200"
              >
                <span>Learn more</span>
                <ArrowRight className="h-3 w-3 group-hover:translate-x-0.5 transition-transform duration-200" />
              </Link>
            </div>

            {/* Row 2, Card 2: Automated Billing & Payments */}
            <div className="bg-white/95 backdrop-blur-xs p-4 sm:p-4.5 rounded-xl border border-slate-200/80 shadow-2xs hover:shadow-md hover:shadow-[#2E7D5B]/10 hover:border-[#2E7D5B]/40 transition-all duration-300 hover:-translate-y-0.5 flex flex-col justify-between group relative">
              <div>
                <div className="h-8 w-8 rounded-lg bg-[#2E7D5B]/10 border border-[#2E7D5B]/20 text-[#2E7D5B] flex items-center justify-center mb-2.5 group-hover:bg-[#2E7D5B] group-hover:text-white group-hover:shadow-2xs transition-all duration-300">
                  <CreditCard className="h-4 w-4" />
                </div>
                <h3 className="text-sm sm:text-base font-bold text-slate-900 tracking-tight group-hover:text-[#2E7D5B] transition-colors duration-200">
                  Automated Billing & Payments
                </h3>
                <p className="text-slate-500 text-xs mt-1 leading-snug">
                  Generate instant digital invoices, collect online payments, process claims, and track dues.
                </p>
              </div>
              <Link
                href="/dashboard"
                className="mt-2.5 pt-2 border-t border-slate-100 flex items-center gap-1 text-[11px] font-semibold text-[#2E7D5B] group-hover:gap-1.5 transition-all duration-200"
              >
                <span>Learn more</span>
                <ArrowRight className="h-3 w-3 group-hover:translate-x-0.5 transition-transform duration-200" />
              </Link>
            </div>

            {/* Row 2, Card 3: Secure Multi-Clinic Management */}
            <div className="bg-white/95 backdrop-blur-xs p-4 sm:p-4.5 rounded-xl border border-slate-200/80 shadow-2xs hover:shadow-md hover:shadow-[#2E7D5B]/10 hover:border-[#2E7D5B]/40 transition-all duration-300 hover:-translate-y-0.5 flex flex-col justify-between group relative">
              <div>
                <div className="h-8 w-8 rounded-lg bg-[#2E7D5B]/10 border border-[#2E7D5B]/20 text-[#2E7D5B] flex items-center justify-center mb-2.5 group-hover:bg-[#2E7D5B] group-hover:text-white group-hover:shadow-2xs transition-all duration-300">
                  <Building2 className="h-4 w-4" />
                </div>
                <h3 className="text-sm sm:text-base font-bold text-slate-900 tracking-tight group-hover:text-[#2E7D5B] transition-colors duration-200">
                  Secure Multi-Clinic Management
                </h3>
                <p className="text-slate-500 text-xs mt-1 leading-snug">
                  Manage multiple practice branches, set staff access roles, and monitor central clinic inventory.
                </p>
              </div>
              <Link
                href="/dashboard"
                className="mt-2.5 pt-2 border-t border-slate-100 flex items-center gap-1 text-[11px] font-semibold text-[#2E7D5B] group-hover:gap-1.5 transition-all duration-200"
              >
                <span>Learn more</span>
                <ArrowRight className="h-3 w-3 group-hover:translate-x-0.5 transition-transform duration-200" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Metrics & Proof Section (Target: 20-25vh) */}
      <section id="metrics" className="scroll-mt-20 py-7 md:py-9 bg-emerald-50/60 border-y border-emerald-950/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div>
              <div className="text-2xl sm:text-3xl font-extrabold text-[#2E7D5B]">
                10,000+
              </div>
              <div className="text-xs sm:text-sm font-medium text-slate-600 mt-0.5">
                Patients Managed Daily
              </div>
            </div>
            <div>
              <div className="text-2xl sm:text-3xl font-extrabold text-[#2E7D5B]">
                45%
              </div>
              <div className="text-xs sm:text-sm font-medium text-slate-600 mt-0.5">
                Reduced Wait Times
              </div>
            </div>
            <div>
              <div className="text-2xl sm:text-3xl font-extrabold text-[#2E7D5B]">
                99.9%
              </div>
              <div className="text-xs sm:text-sm font-medium text-slate-600 mt-0.5">
                Uptime Guarantee
              </div>
            </div>
            <div>
              <div className="text-2xl sm:text-3xl font-extrabold text-[#2E7D5B]">
                4.9 / 5
              </div>
              <div className="text-xs sm:text-sm font-medium text-slate-600 mt-0.5">
                Physician Satisfaction
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call To Action Banner (Target: 30-35vh) */}
      <section id="solutions" className="scroll-mt-20 py-10 md:py-12 bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <div className="rounded-3xl bg-gradient-to-br from-[#2E7D5B] to-[#1F543D] text-white p-7 md:p-9 text-center shadow-lg shadow-[#2E7D5B]/15 relative overflow-hidden">
            <div className="relative z-10">
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">
                Transform your clinic operation today
              </h2>
              <p className="mt-2 text-emerald-100 text-xs sm:text-sm max-w-xl mx-auto leading-relaxed">
                Join leading physicians and clinical directors who rely on AUTONIQUE for effortless daily management.
              </p>
              <div className="mt-4.5 flex flex-col sm:flex-row justify-center gap-3">
                <Link
                  href="/dashboard"
                  className="inline-flex items-center justify-center gap-2 bg-white text-[#2E7D5B] hover:bg-emerald-50 px-6 py-2.5 rounded-xl font-bold text-xs sm:text-sm shadow-sm transition-all duration-200"
                >
                  <span>Launch Dashboard Now</span>
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="scroll-mt-20 py-8 md:py-10 bg-[#F2F8F5]/60 border-t border-[#D2E7DC]/60 relative overflow-hidden">
        <div className="max-w-6xl mx-auto px-6">
          {/* Section Header */}
          <div className="text-center max-w-2xl mx-auto mb-5">
            <span className="text-[10px] font-bold tracking-widest text-[#2E7D5B] uppercase bg-[#2E7D5B]/10 px-2.5 py-0.5 rounded-full border border-[#2E7D5B]/20">
              SIMPLE, TRANSPARENT PRICING
            </span>
            <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 mt-2 tracking-tight">
              Choose the perfect plan for your clinic
            </h2>
            <p className="text-slate-500 mt-1 text-xs sm:text-sm max-w-2xl mx-auto leading-relaxed">
              Flexible plans designed for independent doctors, growing clinics, and multi-location practices.
            </p>
          </div>

          {/* Pricing Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-4.5 items-stretch max-w-6xl mx-auto">
            {/* Plan 1: Starter */}
            <div className="bg-white rounded-xl p-4 sm:p-5 border border-slate-200 shadow-2xs hover:shadow-md hover:-translate-y-0.5 transition-all duration-300 flex flex-col justify-between relative">
              <div>
                <h3 className="text-base font-bold text-slate-900">Starter</h3>
                <p className="text-[11px] text-slate-500 mt-0.5 font-medium">
                  Perfect for independent doctors
                </p>
                <div className="mt-2.5 flex items-baseline gap-1">
                  <span className="text-2xl sm:text-3xl font-extrabold text-slate-900">₹2,999</span>
                  <span className="text-[11px] font-semibold text-slate-500">/month</span>
                </div>
                <div className="my-2.5 border-t border-slate-100" />
                <ul className="space-y-1.5 text-xs text-slate-600">
                  <li className="flex items-center gap-2">
                    <Check className="h-3.5 w-3.5 text-[#2E7D5B] shrink-0" />
                    <span>Up to 2 staff accounts</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-3.5 w-3.5 text-[#2E7D5B] shrink-0" />
                    <span>500 patient records</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-3.5 w-3.5 text-[#2E7D5B] shrink-0" />
                    <span>Appointment scheduling</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-3.5 w-3.5 text-[#2E7D5B] shrink-0" />
                    <span>SMS & WhatsApp reminders</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-3.5 w-3.5 text-[#2E7D5B] shrink-0" />
                    <span>Basic reports</span>
                  </li>
                </ul>
              </div>
              <div className="mt-4">
                <Link
                  href="/dashboard"
                  className="w-full inline-flex items-center justify-center text-xs font-semibold bg-slate-900 hover:bg-slate-800 text-white py-2 px-3 rounded-lg transition-colors shadow-2xs"
                >
                  Start Free Trial
                </Link>
              </div>
            </div>

            {/* Plan 2: Professional (Highlighted) */}
            <div className="bg-white rounded-xl p-4 sm:p-5 border-2 border-[#2E7D5B] shadow-md shadow-[#2E7D5B]/10 hover:shadow-xl hover:shadow-[#2E7D5B]/15 hover:-translate-y-0.5 transition-all duration-300 flex flex-col justify-between relative z-10">
              <div className="absolute -top-2.5 left-1/2 -translate-x-1/2 bg-[#2E7D5B] text-white text-[9px] font-bold tracking-wider uppercase px-2.5 py-0.5 rounded-full shadow-2xs">
                MOST POPULAR
              </div>
              <div>
                <h3 className="text-base font-bold text-slate-900 mt-0.5">Professional</h3>
                <p className="text-[11px] text-slate-500 mt-0.5 font-medium">
                  Best for growing clinics
                </p>
                <div className="mt-2.5 flex items-baseline gap-1">
                  <span className="text-2xl sm:text-3xl font-extrabold text-slate-900">₹6,999</span>
                  <span className="text-[11px] font-semibold text-slate-500">/month</span>
                </div>
                <div className="my-2.5 border-t border-slate-100" />
                <ul className="space-y-1.5 text-xs text-slate-700 font-medium">
                  <li className="flex items-center gap-2">
                    <Check className="h-3.5 w-3.5 text-[#2E7D5B] shrink-0" />
                    <span>Unlimited patients</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-3.5 w-3.5 text-[#2E7D5B] shrink-0" />
                    <span>Up to 15 staff members</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-3.5 w-3.5 text-[#2E7D5B] shrink-0" />
                    <span>AI Receptionist</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-3.5 w-3.5 text-[#2E7D5B] shrink-0" />
                    <span>Billing & Invoicing</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-3.5 w-3.5 text-[#2E7D5B] shrink-0" />
                    <span>Analytics Dashboard</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-3.5 w-3.5 text-[#2E7D5B] shrink-0" />
                    <span>Priority Support</span>
                  </li>
                </ul>
              </div>
              <div className="mt-4">
                <Link
                  href="/dashboard"
                  className="w-full inline-flex items-center justify-center text-xs font-semibold bg-[#2E7D5B] hover:bg-[#246348] text-white py-2 px-3 rounded-lg transition-all duration-200 shadow-2xs shadow-[#2E7D5B]/25 hover:shadow-xs hover:shadow-[#2E7D5B]/30"
                >
                  Start Free Trial
                </Link>
              </div>
            </div>

            {/* Plan 3: Enterprise */}
            <div className="bg-white rounded-xl p-4 sm:p-5 border border-slate-200 shadow-2xs hover:shadow-md hover:-translate-y-0.5 transition-all duration-300 flex flex-col justify-between relative">
              <div>
                <h3 className="text-base font-bold text-slate-900">Enterprise</h3>
                <p className="text-[11px] text-slate-500 mt-0.5 font-medium">
                  For hospitals & multi-location clinics
                </p>
                <div className="mt-2.5 flex items-baseline gap-1">
                  <span className="text-xl sm:text-2xl font-extrabold text-slate-900">Custom Pricing</span>
                </div>
                <div className="my-2.5 border-t border-slate-100" />
                <ul className="space-y-1.5 text-xs text-slate-600">
                  <li className="flex items-center gap-2">
                    <Check className="h-3.5 w-3.5 text-[#2E7D5B] shrink-0" />
                    <span>Unlimited branches</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-3.5 w-3.5 text-[#2E7D5B] shrink-0" />
                    <span>Unlimited staff</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-3.5 w-3.5 text-[#2E7D5B] shrink-0" />
                    <span>Advanced permissions</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-3.5 w-3.5 text-[#2E7D5B] shrink-0" />
                    <span>API Integrations</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-3.5 w-3.5 text-[#2E7D5B] shrink-0" />
                    <span>Dedicated Account Manager</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-3.5 w-3.5 text-[#2E7D5B] shrink-0" />
                    <span>Premium Support</span>
                  </li>
                </ul>
              </div>
              <div className="mt-4">
                <Link
                  href="/dashboard"
                  className="w-full inline-flex items-center justify-center text-xs font-semibold bg-slate-900 hover:bg-slate-800 text-white py-2 px-3 rounded-lg transition-colors shadow-2xs"
                >
                  Contact Sales
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="scroll-mt-20 py-8 md:py-10 bg-white/70 border-t border-slate-200/60 relative">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-5">
            <span className="text-[10px] font-bold tracking-widest text-[#2E7D5B] uppercase bg-[#2E7D5B]/10 px-2.5 py-0.5 rounded-full border border-[#2E7D5B]/20">
              DOCTOR REVIEWS & CLINIC STORIES
            </span>
            <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 mt-2 tracking-tight">
              Trusted by Leading Physicians & Clinical Directors
            </h2>
            <p className="text-slate-500 mt-1 text-xs sm:text-sm leading-relaxed">
              See how top clinics automate patient operations, reduce wait times, and scale consultation volume.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-5">
            {/* Review 1 */}
            <div className="bg-white rounded-xl p-5 border border-slate-200 shadow-2xs hover:shadow-md hover:border-[#2E7D5B]/40 transition-all flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <span className="text-[10px] font-bold px-2 py-0.5 rounded-md bg-[#2E7D5B]/10 text-[#2E7D5B] border border-[#2E7D5B]/20">
                    CityCare Hospital
                  </span>
                </div>
                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed italic">
                  "AUTONIQUE transformed our front-desk efficiency completely. The AI receptionist handles over 150 inquiries a day without missing a single patient booking slot!"
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-slate-100 flex items-center gap-3">
                <div className="h-9 w-9 rounded-full bg-[#2E7D5B] text-white font-bold text-xs flex items-center justify-center border border-emerald-300">
                  RG
                </div>
                <div>
                  <h4 className="text-xs sm:text-sm font-bold text-slate-900">Dr. Rajesh Gupta, MD</h4>
                  <p className="text-[11px] text-slate-500">Director, CityCare Multi-Specialty Clinic</p>
                </div>
              </div>
            </div>

            {/* Review 2 */}
            <div className="bg-white rounded-xl p-5 border border-slate-200 shadow-2xs hover:shadow-md hover:border-[#2E7D5B]/40 transition-all flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <span className="text-[10px] font-bold px-2 py-0.5 rounded-md bg-blue-50 text-blue-700 border border-blue-200">
                    Apex Cardio Center
                  </span>
                </div>
                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed italic">
                  "Automated WhatsApp visit reminders reduced our no-show rate by 45%. Patients love the instant booking link and electronic pre-visit instructions."
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-slate-100 flex items-center gap-3">
                <div className="h-9 w-9 rounded-full bg-blue-600 text-white font-bold text-xs flex items-center justify-center border border-blue-300">
                  AS
                </div>
                <div>
                  <h4 className="text-xs sm:text-sm font-bold text-slate-900">Dr. Ananya Sharma</h4>
                  <p className="text-[11px] text-slate-500">Chief Cardiologist, Apex Healthcare</p>
                </div>
              </div>
            </div>

            {/* Review 3 */}
            <div className="bg-white rounded-xl p-5 border border-slate-200 shadow-2xs hover:shadow-md hover:border-[#2E7D5B]/40 transition-all flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <span className="text-[10px] font-bold px-2 py-0.5 rounded-md bg-purple-50 text-purple-700 border border-purple-200">
                    LifeLine Ortho
                  </span>
                </div>
                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed italic">
                  "Multi-clinic management across our 3 hospital branches is now seamless. Real-time billing and lab reports sync automatically in under a second."
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-slate-100 flex items-center gap-3">
                <div className="h-9 w-9 rounded-full bg-purple-600 text-white font-bold text-xs flex items-center justify-center border border-purple-300">
                  VR
                </div>
                <div>
                  <h4 className="text-xs sm:text-sm font-bold text-slate-900">Dr. Vikramaditya Rao</h4>
                  <p className="text-[11px] text-slate-500">Founder, LifeLine Ortho & Spine Care</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="scroll-mt-20 py-8 md:py-10 bg-[#F2F8F5]/60 border-t border-[#D2E7DC]/60 relative">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-5">
            <span className="text-[10px] font-bold tracking-widest text-[#2E7D5B] uppercase bg-[#2E7D5B]/10 px-2.5 py-0.5 rounded-full border border-[#2E7D5B]/20">
              FREQUENTLY ASKED QUESTIONS
            </span>
            <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 mt-2 tracking-tight">
              Got Questions? We Have Answers.
            </h2>
            <p className="text-slate-500 mt-1 text-xs sm:text-sm leading-relaxed">
              Everything you need to know about getting started with AUTONIQUE for your clinic.
            </p>
          </div>

          <Accordion defaultValue="faq-1" className="w-full">
            <AccordionItem value="faq-1">
              <AccordionTrigger>
                How fast can our clinic get started with AUTONIQUE?
              </AccordionTrigger>
              <AccordionContent>
                Setup takes less than 15 minutes! You can import patient records, configure doctor consultation slots, and activate automated WhatsApp reminders immediately.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="faq-2">
              <AccordionTrigger>
                Is AUTONIQUE HIPAA compliant and secure for patient data?
              </AccordionTrigger>
              <AccordionContent>
                Yes, absolutely. All electronic medical records (EMR) and consultation notes are encrypted with 256-bit AES GCM encryption and stored in HIPAA-compliant healthcare data centers.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="faq-3">
              <AccordionTrigger>
                Can the AI Receptionist integrate with our existing WhatsApp Business account?
              </AccordionTrigger>
              <AccordionContent>
                Yes! AUTONIQUE connects directly with your official WhatsApp Business API to dispatch automated booking links, visit reminders, and pre-consultation guidelines.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="faq-4">
              <AccordionTrigger>
                Does AUTONIQUE support multi-location clinics and multiple doctor accounts?
              </AccordionTrigger>
              <AccordionContent>
                Yes, our Professional and Enterprise plans allow you to manage multiple clinic locations, assign role-based access for reception staff & physicians, and track central inventory.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="faq-5">
              <AccordionTrigger>
                Can we customize prescription templates and billing invoices?
              </AccordionTrigger>
              <AccordionContent>
                Definitely. You can add your clinic logo, letterhead, registration numbers, tax GSTIN, and custom medicine dosage formats with 1-click invoice printing.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      {/* Trusted By / Key Stats Banner */}
      <section id="trusted-by" className="scroll-mt-20 py-8 md:py-10 bg-gradient-to-br from-[#2E7D5B] to-[#1F543D] text-white relative overflow-hidden">
        <div className="max-w-6xl mx-auto px-6 relative z-10">
          <div className="text-center max-w-2xl mx-auto mb-6">
            <span className="text-[10px] font-bold tracking-widest text-emerald-200 uppercase bg-white/10 px-2.5 py-0.5 rounded-full border border-white/20">
              TRUSTED HEALTHCARE NETWORK
            </span>
            <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold mt-2 tracking-tight">
              Trusted by Healthcare Professionals Worldwide
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            <div className="p-4 rounded-xl bg-white/10 backdrop-blur-xs border border-white/15">
              <div className="text-2xl sm:text-3xl font-extrabold text-white">500+</div>
              <div className="text-xs text-emerald-100 font-medium mt-1">Clinics</div>
            </div>

            <div className="p-4 rounded-xl bg-white/10 backdrop-blur-xs border border-white/15">
              <div className="text-2xl sm:text-3xl font-extrabold text-white">50,000+</div>
              <div className="text-xs text-emerald-100 font-medium mt-1">Patients</div>
            </div>

            <div className="p-4 rounded-xl bg-white/10 backdrop-blur-xs border border-white/15">
              <div className="text-2xl sm:text-3xl font-extrabold text-white">99.9%</div>
              <div className="text-xs text-emerald-100 font-medium mt-1">Uptime</div>
            </div>

            <div className="p-4 rounded-xl bg-white/10 backdrop-blur-xs border border-white/15">
              <div className="text-2xl sm:text-3xl font-extrabold text-white">24/7</div>
              <div className="text-xs text-emerald-100 font-medium mt-1">Support</div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-200 bg-slate-50 py-5 text-slate-500 text-xs">
        <div className="max-w-7xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <div className="h-5 w-5 rounded-md bg-[#2E7D5B] text-white flex items-center justify-center">
              <Stethoscope className="h-3 w-3" />
            </div>
            <span className="font-bold text-slate-900 text-xs sm:text-sm">AUTONIQUE</span>
            <span className="text-slate-400 ml-2">© {new Date().getFullYear()} All rights reserved.</span>
          </div>

          <div className="flex gap-5 font-medium text-slate-600 text-xs">
            <a href="#" className="hover:text-[#2E7D5B] transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-[#2E7D5B] transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-[#2E7D5B] transition-colors">HIPAA Compliance</a>
          </div>
        </div>
      </footer>
    </div>
  );
}