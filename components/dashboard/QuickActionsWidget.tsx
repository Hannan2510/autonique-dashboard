import Link from "next/link";
import { UserPlus, CalendarPlus, FileSpreadsheet, Send, Zap } from "lucide-react";

export default function QuickActionsWidget() {
  return (
    <div className="w-full flex flex-col justify-between h-full">
      <div>
        <div className="flex items-center justify-between mb-3.5">
          <h2 className="text-base sm:text-lg font-bold text-slate-900 tracking-tight flex items-center gap-2">
            <Zap className="h-4.5 w-4.5 text-[#2E7D5B]" />
            <span>Quick Actions</span>
          </h2>
          <span className="text-[10px] font-bold uppercase tracking-wider text-[#2E7D5B] bg-[#2E7D5B]/10 px-2 py-0.5 rounded-full border border-[#2E7D5B]/20">
            Shortcuts
          </span>
        </div>

        <div className="grid grid-cols-2 gap-2.5">
          {/* Action 1: New Patient */}
          <Link
            href="/customers"
            className="p-3 rounded-xl border border-[#D2E7DC] bg-white hover:border-[#2E7D5B] hover:bg-[#F2F8F5] hover:shadow-xs transition-all duration-200 group flex flex-col justify-between"
          >
            <div className="h-8 w-8 rounded-lg bg-[#2E7D5B]/10 text-[#2E7D5B] border border-[#2E7D5B]/20 flex items-center justify-center mb-2 group-hover:bg-[#2E7D5B] group-hover:text-white transition-all">
              <UserPlus className="h-4 w-4" />
            </div>
            <div>
              <div className="text-xs font-bold text-slate-900 group-hover:text-[#2E7D5B] transition-colors">
                New Patient
              </div>
              <div className="text-[10px] text-slate-500 mt-0.5 leading-none">
                Register account
              </div>
            </div>
          </Link>

          {/* Action 2: Book Appointment */}
          <Link
            href="/dashboard"
            className="p-3 rounded-xl border border-[#D2E7DC] bg-white hover:border-[#2E7D5B] hover:bg-[#F2F8F5] hover:shadow-xs transition-all duration-200 group flex flex-col justify-between"
          >
            <div className="h-8 w-8 rounded-lg bg-blue-50 text-blue-600 border border-blue-200 flex items-center justify-center mb-2 group-hover:bg-blue-600 group-hover:text-white transition-all">
              <CalendarPlus className="h-4 w-4" />
            </div>
            <div>
              <div className="text-xs font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                Book Appointment
              </div>
              <div className="text-[10px] text-slate-500 mt-0.5 leading-none">
                Schedule visit
              </div>
            </div>
          </Link>

          {/* Action 3: Generate Invoice */}
          <Link
            href="/dashboard"
            className="p-3 rounded-xl border border-[#D2E7DC] bg-white hover:border-[#2E7D5B] hover:bg-[#F2F8F5] hover:shadow-xs transition-all duration-200 group flex flex-col justify-between"
          >
            <div className="h-8 w-8 rounded-lg bg-purple-50 text-purple-600 border border-purple-200 flex items-center justify-center mb-2 group-hover:bg-purple-600 group-hover:text-white transition-all">
              <FileSpreadsheet className="h-4 w-4" />
            </div>
            <div>
              <div className="text-xs font-bold text-slate-900 group-hover:text-purple-600 transition-colors">
                Generate Invoice
              </div>
              <div className="text-[10px] text-slate-500 mt-0.5 leading-none">
                Billing & Claims
              </div>
            </div>
          </Link>

          {/* Action 4: Send Reminder */}
          <Link
            href="/dashboard"
            className="p-3 rounded-xl border border-[#D2E7DC] bg-white hover:border-[#2E7D5B] hover:bg-[#F2F8F5] hover:shadow-xs transition-all duration-200 group flex flex-col justify-between"
          >
            <div className="h-8 w-8 rounded-lg bg-amber-50 text-amber-600 border border-amber-200 flex items-center justify-center mb-2 group-hover:bg-amber-600 group-hover:text-white transition-all">
              <Send className="h-4 w-4" />
            </div>
            <div>
              <div className="text-xs font-bold text-slate-900 group-hover:text-amber-600 transition-colors">
                Send Reminder
              </div>
              <div className="text-[10px] text-slate-500 mt-0.5 leading-none">
                WhatsApp & SMS
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
