import AppLayout from "@/components/layout/AppLayout";

export default function SettingsPage() {
  return (
    <AppLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold text-slate-900 tracking-tight">
            Clinic Settings
          </h1>
          <p className="text-slate-500 text-sm mt-1">
            Manage your clinic details, doctor schedules, and notification preferences.
          </p>
        </div>

        <div className="rounded-2xl border border-[#D2E7DC] bg-[#F8FCFA] p-6 shadow-xs">
          <h2 className="text-lg font-bold text-slate-900 mb-4">Practice Details</h2>
          <div className="space-y-4 max-w-lg">
            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">Clinic Name</label>
              <input type="text" defaultValue="AUTONIQUE Healthcare Suite" className="w-full px-3 py-2 text-sm rounded-xl border border-[#D2E7DC] bg-[#F2F8F5] text-slate-900 focus:outline-[#2E7D5B]" />
            </div>
            <div>
              <label className="block text-xs font-semibold text-[#2E7D5B] mb-1">Primary Specialty</label>
              <input type="text" defaultValue="General Medicine & Cardiology" className="w-full px-3 py-2 text-sm rounded-xl border border-[#D2E7DC] bg-[#F2F8F5] text-slate-900 focus:outline-[#2E7D5B]" />
            </div>
          </div>
        </div>
      </div>
    </AppLayout>
  );
}