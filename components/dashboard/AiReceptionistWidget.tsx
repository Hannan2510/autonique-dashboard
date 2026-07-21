import {
  Bot,
  CalendarCheck,
  MessageSquare,
  UserPlus,
  PhoneCall,
  Sparkles,
  CheckCircle2,
} from "lucide-react";

interface AiActivity {
  type: string;
  icon: any;
  title: string;
  detail: string;
  time: string;
  statusBadge?: string;
}

const aiActivities: AiActivity[] = [
  {
    type: "booking",
    icon: CalendarCheck,
    title: "Appointment booked",
    detail: "Booked OPD slot for Rahul Sharma with Dr. Sarah via Web Assistant",
    time: "2 mins ago",
    statusBadge: "Auto-Confirmed",
  },
  {
    type: "reminder",
    icon: MessageSquare,
    title: "WhatsApp reminder sent",
    detail: "Sent automated pre-visit prep notes to 14 scheduled patients",
    time: "12 mins ago",
    statusBadge: "Delivered",
  },
  {
    type: "registration",
    icon: UserPlus,
    title: "New patient registered",
    detail: "Self-registered via QR reception portal (Priyanka Nair)",
    time: "28 mins ago",
    statusBadge: "Verified",
  },
  {
    type: "missed_call",
    icon: PhoneCall,
    title: "Missed call handled",
    detail: "AI answered off-hours call & dispatched instant booking link",
    time: "45 mins ago",
    statusBadge: "Resolved",
  },
];

export default function AiReceptionistWidget() {
  return (
    <div className="w-full flex flex-col justify-between h-full">
      <div>
        <div className="flex items-center justify-between mb-4">
          <div>
            <h2 className="text-base sm:text-lg font-bold text-slate-900 tracking-tight flex items-center gap-2">
              <Bot className="h-4.5 w-4.5 text-[#2E7D5B]" />
              <span>AI Receptionist Activity</span>
            </h2>
            <p className="text-xs text-slate-500 mt-0.5">
              Live automated front-desk assistant log
            </p>
          </div>
          <span className="inline-flex items-center gap-1 text-[11px] font-bold px-2.5 py-0.5 rounded-full bg-emerald-100/80 text-[#1F543D] border border-emerald-300/70 shadow-2xs">
            <Sparkles className="h-3 w-3 text-[#2E7D5B]" />
            Active • 99.4% Automated
          </span>
        </div>

        <div className="space-y-2.5">
          {aiActivities.map((act, idx) => {
            const Icon = act.icon;
            return (
              <div
                key={idx}
                className="p-3 rounded-xl border border-[#D2E7DC]/80 bg-[#F8FCFA] hover:bg-white hover:border-[#2E7D5B]/40 hover:shadow-xs transition-all duration-200 flex items-start gap-3"
              >
                <div className="h-8 w-8 rounded-lg bg-[#2E7D5B]/10 border border-[#2E7D5B]/20 text-[#2E7D5B] flex items-center justify-center shrink-0 mt-0.5 shadow-2xs">
                  <Icon className="h-4 w-4" />
                </div>

                <div className="min-w-0 flex-1">
                  <div className="flex items-center justify-between gap-2">
                    <h4 className="text-xs sm:text-sm font-bold text-slate-900">
                      {act.title}
                    </h4>
                    <span className="text-[10px] font-semibold text-slate-400 shrink-0">
                      {act.time}
                    </span>
                  </div>
                  <p className="text-xs text-slate-500 mt-0.5 leading-snug">
                    {act.detail}
                  </p>
                  {act.statusBadge && (
                    <div className="mt-1.5 flex items-center gap-1 text-[10px] font-semibold text-[#2E7D5B]">
                      <CheckCircle2 className="h-3 w-3" />
                      <span>{act.statusBadge}</span>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
        <span>244 actions handled today</span>
        <button className="text-xs font-bold text-[#2E7D5B] hover:underline">
          View Bot Logs →
        </button>
      </div>
    </div>
  );
}
