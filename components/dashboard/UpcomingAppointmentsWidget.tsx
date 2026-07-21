import { Calendar, Clock, Stethoscope, User } from "lucide-react";

interface AppointmentItem {
  patient: string;
  doctor: string;
  doctorAvatar?: string;
  time: string;
  department: string;
  status: "Confirmed" | "In Progress" | "Pending" | "Completed";
}

const upcomingAppointments: AppointmentItem[] = [
  {
    patient: "Eleanor Vance",
    doctor: "Dr. Sarah Jenkins",
    time: "09:30 AM",
    department: "Cardiology",
    status: "In Progress",
  },
  {
    patient: "Aarav Patel",
    doctor: "Dr. David Miller",
    time: "10:15 AM",
    department: "Orthopedics",
    status: "Confirmed",
  },
  {
    patient: "Sophia Chen",
    doctor: "Dr. Sarah Jenkins",
    time: "11:00 AM",
    department: "Cardiology",
    status: "Confirmed",
  },
  {
    patient: "Marcus Brody",
    doctor: "Dr. Priya Nair",
    time: "01:30 PM",
    department: "Neurology",
    status: "Pending",
  },
  {
    patient: "Zoya Khan",
    doctor: "Dr. Sarah Jenkins",
    time: "03:00 PM",
    department: "General OPD",
    status: "Confirmed",
  },
];

export default function UpcomingAppointmentsWidget() {
  return (
    <div className="w-full flex flex-col justify-between h-full">
      <div>
        <div className="flex items-center justify-between mb-4">
          <div>
            <h2 className="text-base sm:text-lg font-bold text-slate-900 tracking-tight flex items-center gap-2">
              <Calendar className="h-4.5 w-4.5 text-[#2E7D5B]" />
              <span>Upcoming Appointments</span>
            </h2>
            <p className="text-xs text-slate-500 mt-0.5">
              Scheduled clinical visits for today
            </p>
          </div>
          <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-emerald-50 text-[#2E7D5B] border border-emerald-200/60">
            5 Slots Left
          </span>
        </div>

        <div className="space-y-2.5">
          {upcomingAppointments.map((item, idx) => (
            <div
              key={idx}
              className="p-3 rounded-xl border border-[#D2E7DC]/80 bg-[#F8FCFA] hover:bg-white hover:border-[#2E7D5B]/40 hover:shadow-xs transition-all duration-200 flex items-center justify-between gap-3"
            >
              <div className="flex items-center gap-3 min-w-0">
                {/* Doctor Avatar / Initials */}
                <div className="h-9 w-9 rounded-full bg-[#2E7D5B]/10 border border-[#2E7D5B]/20 text-[#2E7D5B] flex items-center justify-center text-xs font-extrabold shrink-0 shadow-2xs">
                  {item.doctor
                    .split(" ")
                    .slice(1)
                    .map((n) => n[0])
                    .join("")}
                </div>

                <div className="min-w-0">
                  <h4 className="text-xs sm:text-sm font-bold text-slate-900 truncate">
                    {item.patient}
                  </h4>
                  <div className="flex items-center gap-2 text-[11px] text-slate-500 mt-0.5">
                    <span className="font-medium truncate text-slate-700">{item.doctor}</span>
                    <span>•</span>
                    <span className="text-slate-500 truncate">{item.department}</span>
                  </div>
                </div>
              </div>

              <div className="text-right shrink-0">
                <div className="flex items-center justify-end gap-1 text-xs font-bold text-slate-800 mb-1">
                  <Clock className="h-3 w-3 text-slate-400" />
                  <span>{item.time}</span>
                </div>
                <span
                  className={`text-[10px] font-bold px-2 py-0.5 rounded-full border ${
                    item.status === "In Progress"
                      ? "bg-amber-50 text-amber-700 border-amber-300/60"
                      : item.status === "Confirmed"
                      ? "bg-emerald-50 text-[#2E7D5B] border-emerald-300/60"
                      : "bg-blue-50 text-blue-700 border-blue-200/60"
                  }`}
                >
                  {item.status}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
        <span>Showing 5 of 18 today</span>
        <button className="text-xs font-bold text-[#2E7D5B] hover:underline">
          View Schedule →
        </button>
      </div>
    </div>
  );
}
