import AppointmentChart from "@/components/dashboard/AppointmentChart";
import AppLayout from "@/components/layout/AppLayout";
import KpiCard from "@/components/dashboard/KpiCard";
import RecentAppointments from "@/components/dashboard/RecentAppointments";

import {
  Users,
  CalendarCheck,
  IndianRupee,
  Stethoscope,
} from "lucide-react";

export default function DashboardPage() {
  return (
    <AppLayout>
      {/* KPI Cards */}
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-4">
        <KpiCard
          title="Patients"
          value="1,248"
          change="+12% this month"
          icon={<Users size={24} />}
        />

        <KpiCard
          title="Appointments"
          value="324"
          change="+8% this week"
          icon={<CalendarCheck size={24} />}
        />

        <KpiCard
          title="Revenue"
          value="₹4.8L"
          change="+15% this month"
          icon={<IndianRupee size={24} />}
        />

        <KpiCard
          title="Doctors"
          value="18"
          change="+2 new hires"
          icon={<Stethoscope size={24} />}
        />
      </div>

      {/* Analytics Section */}
      <div className="mt-8 grid grid-cols-1 gap-6 xl:grid-cols-3">
        {/* Chart */}
        <div className="xl:col-span-2 rounded-2xl border border-slate-800 bg-slate-900 p-6">
          <AppointmentChart />
        </div>

        {/* Recent Appointments */}
        <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6">
          <RecentAppointments />
        </div>
      </div>
    </AppLayout>
  );
}