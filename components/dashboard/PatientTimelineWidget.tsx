import { FileText, TestTube, CheckCircle, CreditCard } from "lucide-react";

interface TimelineItem {
  icon: any;
  title: string;
  patient: string;
  details: string;
  time: string;
  typeColor: string;
}

const timelineData: TimelineItem[] = [
  {
    icon: FileText,
    title: "Prescription Generated",
    patient: "Vikram Seth",
    details: "Dr. Sarah generated e-prescription (Rx #8841)",
    time: "10:15 AM",
    typeColor: "bg-emerald-500",
  },
  {
    icon: TestTube,
    title: "Lab Results Uploaded",
    patient: "Aarav Patel",
    details: "Lipid Profile & HbA1c report attached",
    time: "09:45 AM",
    typeColor: "bg-blue-500",
  },
  {
    icon: CheckCircle,
    title: "Patient Check-in",
    patient: "Ananya Roy",
    details: "Checked in at Front Desk (Queue Token #12)",
    time: "09:12 AM",
    typeColor: "bg-[#2E7D5B]",
  },
  {
    icon: CreditCard,
    title: "Billing Invoice Issued",
    patient: "David Miller",
    details: "Invoice #INV-2089 (₹3,500) generated & paid",
    time: "08:30 AM",
    typeColor: "bg-purple-500",
  },
];

export default function PatientTimelineWidget() {
  return (
    <div className="w-full flex flex-col justify-between h-full">
      <div>
        <div className="flex items-center justify-between mb-4">
          <div>
            <h2 className="text-base sm:text-lg font-bold text-slate-900 tracking-tight">
              Patient Activity Timeline
            </h2>
            <p className="text-xs text-slate-500 mt-0.5">
              Real-time clinical events feed
            </p>
          </div>
          <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-slate-100 text-slate-600 border border-slate-200">
            Realtime
          </span>
        </div>

        <div className="relative pl-3 border-l-2 border-[#D2E7DC] space-y-3 my-2">
          {timelineData.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div key={idx} className="relative group">
                {/* Timeline Bullet Node */}
                <div className={`absolute -left-[19px] top-1 h-3 w-3 rounded-full ${item.typeColor} ring-4 ring-white shadow-2xs`} />

                <div className="p-2.5 rounded-xl border border-[#D2E7DC]/60 bg-[#F8FCFA] hover:bg-white hover:border-[#2E7D5B]/30 hover:shadow-xs transition-all duration-200">
                  <div className="flex items-center justify-between gap-2">
                    <h4 className="text-xs font-bold text-slate-900 flex items-center gap-1.5">
                      <Icon className="h-3.5 w-3.5 text-slate-600" />
                      <span>{item.title}</span>
                    </h4>
                    <span className="text-[10px] font-semibold text-slate-400">
                      {item.time}
                    </span>
                  </div>
                  <p className="text-xs text-slate-700 font-semibold mt-1">
                    {item.patient}
                  </p>
                  <p className="text-[11px] text-slate-500 mt-0.5 leading-snug">
                    {item.details}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="mt-3 pt-2.5 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
        <span>42 events logged today</span>
        <button className="text-xs font-bold text-[#2E7D5B] hover:underline">
          Full Audit Log →
        </button>
      </div>
    </div>
  );
}
