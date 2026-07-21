"use client";

import { useState } from "react";
import { Calendar, Clock, Eye, CheckCircle2 } from "lucide-react";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";

export interface AppointmentItem {
  patientName: string;
  doctor: string;
  time: string;
  department: string;
  status: "In Progress" | "Confirmed" | "Pending" | "Completed";
  avatarColor: string;
}

const initialUpcomingList: AppointmentItem[] = [
  {
    patientName: "Eleanor Vance",
    doctor: "Hannan",
    time: "09:30 AM",
    department: "Cardiology",
    status: "In Progress",
    avatarColor: "bg-emerald-100 text-[#2E7D5B] dark:bg-emerald-950 dark:text-emerald-300",
  },
  {
    patientName: "Aarav Patel",
    doctor: "Dr. David Miller",
    time: "10:15 AM",
    department: "Orthopedics",
    status: "Confirmed",
    avatarColor: "bg-blue-100 text-blue-700 dark:bg-blue-950 dark:text-blue-300",
  },
  {
    patientName: "Sophia Chen",
    doctor: "Hannan",
    time: "11:00 AM",
    department: "Cardiology",
    status: "Confirmed",
    avatarColor: "bg-amber-100 text-amber-800 dark:bg-amber-950 dark:text-amber-300",
  },
  {
    patientName: "Marcus Brody",
    doctor: "Dr. Priya Nair",
    time: "01:30 PM",
    department: "Neurology",
    status: "Pending",
    avatarColor: "bg-purple-100 text-purple-700 dark:bg-purple-950 dark:text-purple-300",
  },
  {
    patientName: "Priyanka Nair",
    doctor: "Dr. Ananya Sharma",
    time: "02:45 PM",
    department: "Pediatrics",
    status: "Confirmed",
    avatarColor: "bg-rose-100 text-rose-700 dark:bg-rose-950 dark:text-rose-300",
  },
  {
    patientName: "Vikram Seth",
    doctor: "Dr. Rajesh Gupta",
    time: "04:15 PM",
    department: "General Medicine",
    status: "Completed",
    avatarColor: "bg-teal-100 text-teal-800 dark:bg-teal-950 dark:text-teal-300",
  },
];

interface UpcomingAppointmentsCardProps {
  customAppointments?: AppointmentItem[];
}

export default function UpcomingAppointmentsCard({ customAppointments }: UpcomingAppointmentsCardProps) {
  const [selectedItem, setSelectedItem] = useState<AppointmentItem | null>(null);
  const displayList = customAppointments || initialUpcomingList;

  return (
    <div className="w-full flex flex-col justify-between h-full">
      <div>
        <div className="flex items-center justify-between mb-3">
          <h2 className="text-base sm:text-lg font-bold text-slate-900 dark:text-slate-100 tracking-tight flex items-center gap-2">
            <Calendar className="h-4.5 w-4.5 text-[#2E7D5B] dark:text-emerald-400" />
            <span>Upcoming Appointments</span>
          </h2>
          <span className="text-[10px] font-extrabold px-2.5 py-0.5 rounded-full bg-emerald-100 text-emerald-900 border border-emerald-300 dark:bg-emerald-950 dark:text-emerald-300 dark:border-emerald-800">
            {displayList.length} Scheduled Today
          </span>
        </div>

        <div className="space-y-2">
          {displayList.map((item, idx) => (
            <div
              key={idx}
              className="p-2.5 rounded-xl border border-[#D2E7DC]/80 dark:border-slate-800 bg-[#F8FCFA] dark:bg-slate-900/90 hover:bg-white dark:hover:bg-slate-800 hover:border-[#2E7D5B]/50 hover:shadow-xs hover:-translate-y-0.5 transition-all duration-200 flex items-center justify-between gap-3 group"
            >
              {/* Left: Avatar & Patient Info */}
              <div className="flex items-center gap-2.5 min-w-0">
                <Avatar className="h-8 w-8 border border-slate-200 dark:border-slate-700 shrink-0">
                  <AvatarFallback className={`${item.avatarColor} font-extrabold text-[11px]`}>
                    {item.patientName
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </AvatarFallback>
                </Avatar>

                <div className="min-w-0">
                  <h4 className="text-xs font-bold text-slate-900 dark:text-slate-100 group-hover:text-[#2E7D5B] dark:group-hover:text-emerald-400 transition-colors truncate">
                    {item.patientName}
                  </h4>
                  <div className="flex items-center gap-1.5 text-[11px] text-slate-500 dark:text-slate-400 mt-0.5">
                    <span className="font-semibold text-slate-700 dark:text-slate-300 truncate">
                      {item.doctor}
                    </span>
                    <span>•</span>
                    <span className="truncate">{item.department}</span>
                  </div>
                </div>
              </div>

              {/* Right: Time, Status Badge & View Button */}
              <div className="flex items-center gap-2 shrink-0">
                <div className="text-right">
                  <div className="flex items-center justify-end gap-1 text-xs font-bold text-slate-800 dark:text-slate-200">
                    <Clock className="h-3 w-3 text-slate-400" />
                    <span>{item.time}</span>
                  </div>
                  <span
                    className={`text-[9px] font-extrabold px-2 py-0.5 rounded-full border inline-block mt-0.5 ${
                      item.status === "In Progress"
                        ? "bg-amber-50 text-amber-800 border-amber-300 dark:bg-amber-950 dark:text-amber-300 dark:border-amber-800"
                        : item.status === "Confirmed"
                        ? "bg-emerald-50 text-[#2E7D5B] border-emerald-300 dark:bg-emerald-950 dark:text-emerald-300 dark:border-emerald-800"
                        : item.status === "Completed"
                        ? "bg-blue-50 text-blue-700 border-blue-200 dark:bg-blue-950 dark:text-blue-300 dark:border-blue-800"
                        : "bg-purple-50 text-purple-700 border-purple-200 dark:bg-purple-950 dark:text-purple-300 dark:border-purple-800"
                    }`}
                  >
                    {item.status}
                  </span>
                </div>

                <Button
                  onClick={() => setSelectedItem(item)}
                  variant="outline"
                  size="sm"
                  className="h-7 w-7 p-0 rounded-lg border-[#D2E7DC] dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:text-[#2E7D5B] dark:hover:text-emerald-400 cursor-pointer"
                >
                  <Eye className="h-3.5 w-3.5" />
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-3 pt-2.5 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between text-xs text-slate-500 dark:text-slate-400">
        <span>Displaying {displayList.length} of 18 today</span>
        <a href="/customers" className="text-xs font-bold text-[#2E7D5B] dark:text-emerald-400 hover:underline">
          View All Schedule →
        </a>
      </div>

      {/* Appointment Details Modal */}
      {selectedItem && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/60 backdrop-blur-xs animate-in fade-in-50 duration-150">
          <div className="w-full max-w-sm bg-white dark:bg-slate-900 border border-[#D2E7DC] dark:border-slate-800 rounded-2xl p-5 shadow-2xl space-y-4">
            <div className="flex items-center justify-between border-b border-slate-100 dark:border-slate-800 pb-3">
              <h3 className="text-sm font-bold text-slate-900 dark:text-white">Appointment Record</h3>
              <button
                onClick={() => setSelectedItem(null)}
                className="text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 text-xs font-bold"
              >
                ✕
              </button>
            </div>

            <div className="space-y-2 text-xs">
              <div className="flex justify-between">
                <span className="text-slate-400">Patient:</span>
                <span className="font-bold text-slate-900 dark:text-white">{selectedItem.patientName}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-400">Doctor:</span>
                <span className="font-semibold text-slate-800 dark:text-slate-200">{selectedItem.doctor}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-400">Department:</span>
                <span className="font-semibold text-slate-800 dark:text-slate-200">{selectedItem.department}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-400">Time Slot:</span>
                <span className="font-bold text-[#2E7D5B] dark:text-emerald-400">{selectedItem.time}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-400">Status:</span>
                <span className="font-extrabold text-emerald-600 dark:text-emerald-400">{selectedItem.status}</span>
              </div>
            </div>

            <Button
              onClick={() => setSelectedItem(null)}
              className="w-full bg-[#2E7D5B] hover:bg-[#246348] dark:bg-emerald-600 dark:hover:bg-emerald-500 text-white rounded-xl text-xs font-bold py-2"
            >
              Close Details
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}
