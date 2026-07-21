import AppLayout from "@/components/layout/AppLayout";
import QuickActionsBar from "@/components/dashboard/QuickActionsBar";
import KpiCardGrid from "@/components/dashboard/KpiCardGrid";
import RevenueOverviewChart from "@/components/dashboard/RevenueOverviewChart";
import AppointmentsDonutChart from "@/components/dashboard/AppointmentsDonutChart";
import UpcomingAppointmentsCard from "@/components/dashboard/UpcomingAppointmentsCard";
import AiReceptionistActivityCard from "@/components/dashboard/AiReceptionistActivityCard";
import RecentPatientsTable from "@/components/dashboard/RecentPatientsTable";

export default function DashboardPage() {
  return (
    <AppLayout title="Dashboard" description="Welcome back, Hannan 👋">
      <div className="space-y-5">
        {/* Quick Actions Action Bar */}
        <QuickActionsBar />

        {/* Responsive Grid of 4 Compact KPI Cards */}
        <KpiCardGrid />

        {/* Analytics Section */}
        <div className="grid grid-cols-1 gap-5 xl:grid-cols-3">
          {/* Revenue Overview */}
          <div className="xl:col-span-2 rounded-2xl border border-[#D2E7DC] dark:border-slate-700 bg-[#F8FCFA] dark:bg-slate-900 p-4.5 sm:p-5 shadow-xs flex flex-col justify-between transition-colors duration-300">
            <RevenueOverviewChart />
          </div>

          {/* Appointments Statistics */}
          <div className="rounded-2xl border border-[#D2E7DC] dark:border-slate-700 bg-[#F8FCFA] dark:bg-slate-900 p-4.5 sm:p-5 shadow-xs flex flex-col justify-between transition-colors duration-300">
            <AppointmentsDonutChart />
          </div>
        </div>

        {/* Lower Dashboard Grid */}
        <div className="grid grid-cols-1 gap-5 lg:grid-cols-2">
          {/* Upcoming Appointments */}
          <div className="rounded-2xl border border-[#D2E7DC] dark:border-slate-700 bg-[#F8FCFA] dark:bg-slate-900 p-4.5 sm:p-5 shadow-xs flex flex-col justify-between transition-colors duration-300">
            <UpcomingAppointmentsCard />
          </div>

          {/* AI Receptionist Activity */}
          <div className="rounded-2xl border border-[#D2E7DC] dark:border-slate-700 bg-[#F8FCFA] dark:bg-slate-900 p-4.5 sm:p-5 shadow-xs flex flex-col justify-between transition-colors duration-300">
            <AiReceptionistActivityCard />
          </div>
        </div>

        {/* Recent Patients */}
        <div className="rounded-2xl border border-[#D2E7DC] dark:border-slate-700 bg-[#F8FCFA] dark:bg-slate-900 p-4.5 sm:p-5 shadow-xs transition-colors duration-300">
          <RecentPatientsTable />
        </div>
      </div>
    </AppLayout>
  );
}