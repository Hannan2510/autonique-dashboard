import AppLayout from "@/components/layout/AppLayout";
import CustomerTable from "@/components/customers/CustomerTable";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Plus, Search } from "lucide-react";

export default function CustomersPage() {
  return (
    <AppLayout>
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-slate-900 tracking-tight">
              Patients & Customers
            </h1>

            <p className="text-slate-500 text-sm mt-1">
              Manage all registered patients, history, and active clinic accounts.
            </p>
          </div>

          <Button className="bg-[#2E7D5B] hover:bg-[#246348] text-white shadow-xs rounded-xl px-4 py-2 font-semibold">
            <Plus className="mr-2 h-4 w-4" />
            Add Patient
          </Button>
        </div>

        <div className="relative max-w-md">
          <Search className="absolute left-3 top-3 h-4 w-4 text-slate-400" />

          <Input
            placeholder="Search patients by name or email..."
            className="pl-10 bg-[#F8FCFA] border-[#D2E7DC] focus-visible:ring-[#2E7D5B] rounded-xl"
          />
        </div>

        <CustomerTable />
      </div>
    </AppLayout>
  );
}