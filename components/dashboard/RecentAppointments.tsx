export default function RecentAppointments() {
  const appointments = [
    {
      patient: "John Doe",
      doctor: "Dr. Sarah",
      time: "10:30 AM",
      status: "Confirmed",
    },
    {
      patient: "Emma Wilson",
      doctor: "Dr. Sarah",
      time: "11:15 AM",
      status: "Pending",
    },
    {
      patient: "Michael Lee",
      doctor: "Dr. David",
      time: "1:00 PM",
      status: "Completed",
    },
    {
      patient: "Sophia Brown",
      doctor: "Dr. Sarah",
      time: "3:30 PM",
      status: "Confirmed",
    },
  ];

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-bold text-slate-900 tracking-tight">
          Recent Appointments
        </h2>
        <span className="text-sm font-semibold text-[#2E7D5B]">Today</span>
      </div>

      <div className="space-y-3">
        {appointments.map((appointment, index) => (
          <div
            key={index}
            className="rounded-xl border border-[#D2E7DC]/80 bg-[#F2F8F5] p-3.5 transition-all hover:bg-white hover:border-[#2E7D5B]/30 hover:shadow-xs"
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="h-9 w-9 rounded-full bg-[#2E7D5B]/10 text-[#2E7D5B] font-bold text-xs flex items-center justify-center border border-[#2E7D5B]/20">
                  {appointment.patient
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </div>
                <div>
                  <p className="font-semibold text-slate-900 text-sm">
                    {appointment.patient}
                  </p>

                  <p className="text-sm text-slate-500">
                    {appointment.doctor}
                  </p>
                </div>
              </div>

              <div className="text-right">
                <p className="text-sm font-semibold text-slate-900 mb-1">{appointment.time}</p>

                <span
                  className={`text-xs font-semibold px-2.5 py-0.5 rounded-full border ${
                    appointment.status === "Confirmed"
                      ? "bg-emerald-50 text-[#2E7D5B] border-emerald-200/50"
                      : appointment.status === "Pending"
                      ? "bg-amber-50 text-amber-700 border-amber-200/50"
                      : "bg-slate-100 text-slate-600 border-slate-200"
                  }`}
                >
                  {appointment.status}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}