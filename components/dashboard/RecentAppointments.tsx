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
      <h2 className="mb-6 text-xl font-semibold text-white">
        Recent Appointments
      </h2>

      <div className="space-y-4">
        {appointments.map((appointment, index) => (
          <div
            key={index}
            className="rounded-xl border border-slate-800 bg-slate-950 p-4"
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="font-semibold text-white">
                  {appointment.patient}
                </p>

                <p className="text-sm text-slate-400">
                  {appointment.doctor}
                </p>
              </div>

              <div className="text-right">
                <p className="text-white">{appointment.time}</p>

                <span
                  className={`text-xs font-medium ${
                    appointment.status === "Confirmed"
                      ? "text-green-400"
                      : appointment.status === "Pending"
                      ? "text-yellow-400"
                      : "text-blue-400"
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