"use client";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from "recharts";

const data = [
  { day: "Mon", appointments: 18 },
  { day: "Tue", appointments: 24 },
  { day: "Wed", appointments: 20 },
  { day: "Thu", appointments: 30 },
  { day: "Fri", appointments: 28 },
  { day: "Sat", appointments: 35 },
  { day: "Sun", appointments: 22 },
];

export default function AppointmentChart() {
  return (
    <div className="flex h-72 flex-col items-center justify-center rounded-xl border border-dashed border-slate-700">
      <h2 className="text-xl font-semibold text-white">
        Appointments This Week
      </h2>

      <p className="mt-3 text-slate-400">
        Analytics visualization coming soon
      </p>
    </div>
  );
}