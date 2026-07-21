import {
  Bot,
  CalendarCheck,
  MessageSquare,
  UserPlus,
  PhoneCall,
  CheckCircle2,
  Sparkles,
  Send,
} from "lucide-react";

interface AiActivityItem {
  icon: any;
  actionTitle: string;
  detail: string;
  timestamp: string;
  dotColor: string;
  badgeBg: string;
}

const aiActivities: AiActivityItem[] = [
  {
    icon: CalendarCheck,
    actionTitle: "Appointment booked",
    detail: "Booked slot for Rahul Sharma with Dr. Sarah via Web AI Assistant",
    timestamp: "2 mins ago",
    dotColor: "bg-emerald-500",
    badgeBg: "bg-emerald-50 text-[#2E7D5B] border-emerald-300 dark:bg-emerald-950 dark:text-emerald-300 dark:border-emerald-800",
  },
  {
    icon: Send,
    actionTitle: "WhatsApp reminder sent",
    detail: "Automated pre-visit instructions sent to 14 patients",
    timestamp: "12 mins ago",
    dotColor: "bg-blue-500",
    badgeBg: "bg-blue-50 text-blue-700 border-blue-200 dark:bg-blue-950 dark:text-blue-300 dark:border-blue-800",
  },
  {
    icon: UserPlus,
    actionTitle: "New patient registered",
    detail: "Self-registered via reception QR kiosk (Priyanka Nair)",
    timestamp: "28 mins ago",
    dotColor: "bg-purple-500",
    badgeBg: "bg-purple-50 text-purple-700 border-purple-200 dark:bg-purple-950 dark:text-purple-300 dark:border-purple-800",
  },
  {
    icon: CheckCircle2,
    actionTitle: "Follow-up completed",
    detail: "Post-op consultation feedback logged for Marcus Brody",
    timestamp: "35 mins ago",
    dotColor: "bg-teal-500",
    badgeBg: "bg-teal-50 text-teal-700 border-teal-200 dark:bg-teal-950 dark:text-teal-300 dark:border-teal-800",
  },
  {
    icon: PhoneCall,
    actionTitle: "Missed call answered",
    detail: "AI answered off-hours call & dispatched booking link",
    timestamp: "45 mins ago",
    dotColor: "bg-amber-500",
    badgeBg: "bg-amber-50 text-amber-800 border-amber-300 dark:bg-amber-950 dark:text-amber-300 dark:border-amber-800",
  },
];

export default function AiReceptionistActivityCard() {
  return (
    <div className="w-full flex flex-col justify-between h-full">
      <div>
        <div className="flex items-center justify-between mb-3">
          <h2 className="text-base sm:text-lg font-bold text-slate-900 dark:text-slate-100 tracking-tight flex items-center gap-2">
            <Bot className="h-4.5 w-4.5 text-[#2E7D5B] dark:text-emerald-400" />
            <span>AI Receptionist Activity Feed</span>
          </h2>
          <span className="inline-flex items-center gap-1 text-[10px] font-extrabold px-2.5 py-0.5 rounded-full bg-emerald-100 text-[#1F543D] border border-emerald-300 dark:bg-emerald-950 dark:text-emerald-300 dark:border-emerald-800">
            <Sparkles className="h-3 w-3 text-[#2E7D5B] dark:text-emerald-400 animate-pulse" />
            Live Automation
          </span>
        </div>

        {/* Timeline SaaS Activity Feed */}
        <div className="relative pl-3 space-y-3 before:absolute before:left-3.5 before:top-2 before:bottom-2 before:w-0.5 before:bg-[#D2E7DC] dark:before:bg-slate-800">
          {aiActivities.map((act, idx) => {
            const Icon = act.icon;
            return (
              <div
                key={idx}
                className="relative pl-6 group"
              >
                {/* Status Dot / Timeline Node */}
                <div className="absolute left-0 top-1.5 -translate-x-1/2 h-3 w-3 rounded-full bg-white dark:bg-slate-900 border-2 border-[#2E7D5B] dark:border-emerald-400 flex items-center justify-center">
                  <span className={`h-1.5 w-1.5 rounded-full ${act.dotColor}`} />
                </div>

                <div className="p-2.5 rounded-xl border border-[#D2E7DC]/80 dark:border-slate-800 bg-[#F8FCFA] dark:bg-slate-900/90 hover:bg-white dark:hover:bg-slate-800 hover:border-[#2E7D5B]/50 hover:shadow-xs transition-all duration-200 flex items-start gap-2.5">
                  {/* Icon Container */}
                  <div className="h-7 w-7 rounded-lg bg-[#2E7D5B]/10 dark:bg-emerald-950 text-[#2E7D5B] dark:text-emerald-400 border border-[#2E7D5B]/20 dark:border-emerald-800 flex items-center justify-center shrink-0 mt-0.5 shadow-2xs">
                    <Icon className="h-3.5 w-3.5" />
                  </div>

                  <div className="min-w-0 flex-1">
                    <div className="flex items-center justify-between gap-2">
                      <div className="flex items-center gap-1.5 min-w-0">
                        <span className={`text-[9px] font-extrabold px-1.5 py-0.5 rounded-md border ${act.badgeBg}`}>
                          ✓ {act.actionTitle}
                        </span>
                      </div>
                      <span className="text-[10px] font-semibold text-slate-400 dark:text-slate-500 shrink-0">
                        {act.timestamp}
                      </span>
                    </div>
                    <p className="text-[11px] text-slate-600 dark:text-slate-300 mt-1 leading-snug truncate">
                      {act.detail}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="mt-3 pt-2.5 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between text-xs text-slate-500 dark:text-slate-400">
        <span>244 actions automated today</span>
        <button className="text-xs font-bold text-[#2E7D5B] dark:text-emerald-400 hover:underline">
          View Bot Audit Log →
        </button>
      </div>
    </div>
  );
}
