import Link from "next/link";
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
} from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#F2F8F5] text-slate-800 font-sans selection:bg-[#2E7D5B]/15 selection:text-[#2E7D5B]">
      {/* Navigation Bar */}
      <header className="sticky top-0 z-50 bg-white/85 backdrop-blur-md border-b border-[#D2E7DC]">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 rounded-xl bg-[#2E7D5B] text-white flex items-center justify-center shadow-md shadow-[#2E7D5B]/20">
              <Stethoscope className="h-5 w-5" />
            </div>
            <div>
              <span className="font-bold text-xl tracking-tight text-slate-900">
                AUTONIQUE
              </span>
              <span className="block text-[10px] font-semibold tracking-widest text-[#2E7D5B] uppercase">
                Healthcare Suite
              </span>
            </div>
          </div>

          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-600">
            <a href="#features" className="hover:text-[#2E7D5B] transition-colors">
              Features
            </a>
            <a href="#solutions" className="hover:text-[#2E7D5B] transition-colors">
              Solutions
            </a>
            <a href="#metrics" className="hover:text-[#2E7D5B] transition-colors">
              Impact
            </a>
            <a href="#pricing" className="hover:text-[#2E7D5B] transition-colors">
              Pricing
            </a>
          </nav>

          <div className="flex items-center gap-4">
            <Link
              href="/signin"
              className="text-sm font-semibold text-slate-700 hover:text-[#2E7D5B] transition-colors hidden sm:inline-block"
            >
              Sign In
            </Link>
            <Link
              href="/dashboard"
              className="inline-flex items-center justify-center gap-2 text-sm font-semibold bg-[#2E7D5B] hover:bg-[#246348] text-white px-5 py-2.5 rounded-xl shadow-sm shadow-[#2E7D5B]/25 transition-all duration-200 hover:shadow-md hover:shadow-[#2E7D5B]/30 active:scale-[0.98]"
            >
              <span>Launch Dashboard</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative pt-16 pb-20 md:pt-24 md:pb-32 overflow-hidden bg-gradient-to-b from-[#E7F3EC] via-[#F2F8F5] to-white">
        {/* Subtle Background Elements */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[350px] bg-[#2E7D5B]/10 blur-3xl rounded-full pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
          {/* Tagline Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#2E7D5B]/10 border border-[#2E7D5B]/20 text-[#2E7D5B] text-xs font-semibold mb-8 shadow-xs">
            <Sparkles className="h-3.5 w-3.5" />
            <span>Next-Gen Medical Practice Platform</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-slate-900 tracking-tight max-w-4xl mx-auto leading-[1.15]">
            Elevate Patient Care with{" "}
            <span className="text-[#2E7D5B] underline decoration-[#2E7D5B]/30 underline-offset-8">
              Intelligent Clinic Automation
            </span>
          </h1>

          {/* Subtitle */}
          <p className="mt-6 text-lg md:text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Streamline patient appointments, electronic health records, doctor workflows, and billing in one clean, healthcare-focused workspace.
          </p>

          {/* Action CTAs */}
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 max-w-md mx-auto">
            <Link
              href="/dashboard"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 text-base font-semibold bg-[#2E7D5B] hover:bg-[#246348] text-white px-8 py-3.5 rounded-xl shadow-lg shadow-[#2E7D5B]/20 transition-all duration-200 hover:shadow-xl hover:shadow-[#2E7D5B]/30 hover:-translate-y-0.5"
            >
              <span>Explore Live Dashboard</span>
              <ArrowRight className="h-5 w-5" />
            </Link>

            <a
              href="#features"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 text-base font-semibold bg-white hover:bg-slate-50 text-slate-700 border border-slate-200 px-7 py-3.5 rounded-xl shadow-xs transition-colors"
            >
              <span>Book Demo</span>
            </a>
          </div>

          {/* Trust Highlights */}
          <div className="mt-12 flex flex-wrap items-center justify-center gap-6 text-xs font-medium text-slate-500">
            <div className="flex items-center gap-2">
              <ShieldCheck className="h-4 w-4 text-[#2E7D5B]" />
              <span>HIPAA Compliant Security</span>
            </div>
            <div className="w-1.5 h-1.5 rounded-full bg-slate-300 hidden sm:block" />
            <div className="flex items-center gap-2">
              <CheckCircle2 className="h-4 w-4 text-[#2E7D5B]" />
              <span>Zero Configuration Needed</span>
            </div>
            <div className="w-1.5 h-1.5 rounded-full bg-slate-300 hidden sm:block" />
            <div className="flex items-center gap-2">
              <Clock className="h-4 w-4 text-[#2E7D5B]" />
              <span>24/7 Priority Support</span>
            </div>
          </div>

          {/* Dashboard Visual Showcase */}
          <div className="mt-16 relative max-w-5xl mx-auto">
            <div className="rounded-2xl border border-emerald-950/10 bg-white p-4 sm:p-6 shadow-2xl shadow-emerald-950/5 text-left">
              {/* Window Bar Header */}
              <div className="flex items-center justify-between pb-4 border-b border-slate-100 mb-6">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-rose-400" />
                  <div className="w-3 h-3 rounded-full bg-amber-400" />
                  <div className="w-3 h-3 rounded-full bg-emerald-400" />
                  <span className="ml-3 text-xs font-medium text-slate-400">
                    autonique.clinic/dashboard
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="inline-flex items-center gap-1 text-xs font-semibold px-2.5 py-1 rounded-md bg-emerald-50 text-[#2E7D5B] border border-emerald-200/60">
                    <span className="h-2 w-2 rounded-full bg-[#2E7D5B] animate-pulse" />
                    Live System
                  </span>
                </div>
              </div>

              {/* Simulated UI Cards inside Hero */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-100">
                  <div className="flex justify-between text-xs text-slate-500 font-medium">
                    <span>Active Patients</span>
                    <Users className="h-4 w-4 text-[#2E7D5B]" />
                  </div>
                  <div className="text-2xl font-bold text-slate-900 mt-2">1,248</div>
                  <div className="text-xs text-emerald-700 font-medium mt-1">
                    +12% this month
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-slate-50 border border-slate-100">
                  <div className="flex justify-between text-xs text-slate-500 font-medium">
                    <span>Today's Visits</span>
                    <Calendar className="h-4 w-4 text-[#2E7D5B]" />
                  </div>
                  <div className="text-2xl font-bold text-slate-900 mt-2">32</div>
                  <div className="text-xs text-emerald-700 font-medium mt-1">
                    84% completed
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-slate-50 border border-slate-100">
                  <div className="flex justify-between text-xs text-slate-500 font-medium">
                    <span>Monthly Collections</span>
                    <TrendingUp className="h-4 w-4 text-[#2E7D5B]" />
                  </div>
                  <div className="text-2xl font-bold text-slate-900 mt-2">₹4,80,000</div>
                  <div className="text-xs text-emerald-700 font-medium mt-1">
                    +15% growth
                  </div>
                </div>
              </div>

              {/* Simulated Appointment Row */}
              <div className="rounded-xl border border-slate-100 bg-slate-50/50 p-4">
                <div className="flex items-center justify-between text-xs font-semibold text-slate-500 mb-3">
                  <span>RECENT PATIENT APPOINTMENTS</span>
                  <Link
                    href="/dashboard"
                    className="text-[#2E7D5B] hover:underline flex items-center gap-1"
                  >
                    View All <ChevronRight className="h-3 w-3" />
                  </Link>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center justify-between bg-white p-3 rounded-lg border border-slate-100 text-xs">
                    <div className="flex items-center gap-3">
                      <div className="h-8 w-8 rounded-full bg-[#2E7D5B]/10 text-[#2E7D5B] font-bold flex items-center justify-center">
                        JD
                      </div>
                      <div>
                        <p className="font-semibold text-slate-900">John Doe</p>
                        <p className="text-slate-400">Dr. Sarah (Cardiology)</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <span className="px-2 py-0.5 rounded-full bg-emerald-50 text-[#2E7D5B] font-semibold text-[11px] border border-emerald-200/50">
                        Confirmed • 10:30 AM
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between bg-white p-3 rounded-lg border border-slate-100 text-xs">
                    <div className="flex items-center gap-3">
                      <div className="h-8 w-8 rounded-full bg-slate-100 text-slate-700 font-bold flex items-center justify-center">
                        EW
                      </div>
                      <div>
                        <p className="font-semibold text-slate-900">Emma Wilson</p>
                        <p className="text-slate-400">Dr. Sarah (General)</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <span className="px-2 py-0.5 rounded-full bg-amber-50 text-amber-700 font-semibold text-[11px] border border-amber-200/50">
                        Pending • 11:15 AM
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Feature Section */}
      <section id="features" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold tracking-widest text-[#2E7D5B] uppercase bg-[#2E7D5B]/10 px-3 py-1 rounded-full border border-[#2E7D5B]/20">
              CLINICAL EXCELLENCE
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mt-4 tracking-tight">
              Designed specifically for healthcare practices
            </h2>
            <p className="text-slate-600 mt-4 text-base">
              Eliminate admin overload, reduce patient wait times, and deliver superior clinical outcomes with modern tools.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Feature 1 */}
            <div className="bg-slate-50/80 p-8 rounded-2xl border border-slate-100 hover:border-[#2E7D5B]/30 hover:shadow-lg transition-all duration-200 group">
              <div className="h-12 w-12 rounded-xl bg-white border border-slate-200 flex items-center justify-center text-[#2E7D5B] shadow-xs group-hover:bg-[#2E7D5B] group-hover:text-white transition-colors">
                <Calendar className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mt-6">
                Smart Appointment Scheduling
              </h3>
              <p className="text-slate-600 text-sm mt-2 leading-relaxed">
                Automate booking slots, handle cancellations smoothly, and send automated SMS/WhatsApp visit reminders.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="bg-slate-50/80 p-8 rounded-2xl border border-slate-100 hover:border-[#2E7D5B]/30 hover:shadow-lg transition-all duration-200 group">
              <div className="h-12 w-12 rounded-xl bg-white border border-slate-200 flex items-center justify-center text-[#2E7D5B] shadow-xs group-hover:bg-[#2E7D5B] group-hover:text-white transition-colors">
                <FileText className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mt-6">
                Electronic Health Records
              </h3>
              <p className="text-slate-600 text-sm mt-2 leading-relaxed">
                Instant access to patient history, diagnostic reports, previous prescriptions, and consultation notes.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="bg-slate-50/80 p-8 rounded-2xl border border-slate-100 hover:border-[#2E7D5B]/30 hover:shadow-lg transition-all duration-200 group">
              <div className="h-12 w-12 rounded-xl bg-white border border-slate-200 flex items-center justify-center text-[#2E7D5B] shadow-xs group-hover:bg-[#2E7D5B] group-hover:text-white transition-colors">
                <TrendingUp className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mt-6">
                Financial & Revenue Insights
              </h3>
              <p className="text-slate-600 text-sm mt-2 leading-relaxed">
                Real-time collection reports, pending patient dues, doctor payout splits, and clinic growth trends.
              </p>
            </div>

            {/* Feature 4 */}
            <div className="bg-slate-50/80 p-8 rounded-2xl border border-slate-100 hover:border-[#2E7D5B]/30 hover:shadow-lg transition-all duration-200 group">
              <div className="h-12 w-12 rounded-xl bg-white border border-slate-200 flex items-center justify-center text-[#2E7D5B] shadow-xs group-hover:bg-[#2E7D5B] group-hover:text-white transition-colors">
                <Building2 className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mt-6">
                Multi-Department Workflow
              </h3>
              <p className="text-slate-600 text-sm mt-2 leading-relaxed">
                Coordinate reception desk, consultation rooms, pharmacy, and laboratory handoffs seamlessly.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Metrics & Proof Section */}
      <section id="metrics" className="py-16 bg-emerald-50/50 border-y border-emerald-950/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl sm:text-4xl font-extrabold text-[#2E7D5B]">
                10,000+
              </div>
              <div className="text-sm font-medium text-slate-600 mt-1">
                Patients Managed Daily
              </div>
            </div>
            <div>
              <div className="text-3xl sm:text-4xl font-extrabold text-[#2E7D5B]">
                45%
              </div>
              <div className="text-sm font-medium text-slate-600 mt-1">
                Reduced Wait Times
              </div>
            </div>
            <div>
              <div className="text-3xl sm:text-4xl font-extrabold text-[#2E7D5B]">
                99.9%
              </div>
              <div className="text-sm font-medium text-slate-600 mt-1">
                Uptime Guarantee
              </div>
            </div>
            <div>
              <div className="text-3xl sm:text-4xl font-extrabold text-[#2E7D5B]">
                4.9 / 5
              </div>
              <div className="text-sm font-medium text-slate-600 mt-1">
                Physician Satisfaction
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call To Action Banner */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <div className="rounded-3xl bg-gradient-to-br from-[#2E7D5B] to-[#1F543D] text-white p-10 md:p-16 text-center shadow-xl shadow-[#2E7D5B]/15 relative overflow-hidden">
            <div className="relative z-10">
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
                Transform your clinic operation today
              </h2>
              <p className="mt-4 text-emerald-100 text-base max-w-xl mx-auto">
                Join leading physicians and clinical directors who rely on AUTONIQUE for effortless daily management.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
                <Link
                  href="/dashboard"
                  className="inline-flex items-center justify-center gap-2 bg-white text-[#2E7D5B] hover:bg-emerald-50 px-8 py-3.5 rounded-xl font-bold text-sm shadow-md transition-all duration-200"
                >
                  <span>Launch Dashboard Now</span>
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-200 bg-slate-50 py-12 text-slate-500 text-xs">
        <div className="max-w-7xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2">
            <div className="h-6 w-6 rounded-md bg-[#2E7D5B] text-white flex items-center justify-center">
              <Stethoscope className="h-3.5 w-3.5" />
            </div>
            <span className="font-bold text-slate-900 text-sm">AUTONIQUE</span>
            <span className="text-slate-400 ml-2">© {new Date().getFullYear()} All rights reserved.</span>
          </div>

          <div className="flex gap-6 font-medium text-slate-600">
            <a href="#" className="hover:text-[#2E7D5B] transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-[#2E7D5B] transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-[#2E7D5B] transition-colors">HIPAA Compliance</a>
          </div>
        </div>
      </footer>
    </div>
  );
}