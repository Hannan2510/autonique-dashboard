import AppLayout from "@/components/layout/AppLayout";
import CustomerTable from "@/components/customers/CustomerTable";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";

export default function CustomersPage() {
  return (
    <AppLayout
      title="Patients & Customers"
      description="Manage all registered patients, medical histories, and active clinic accounts."
      action={
        <Button className="bg-[#2E7D5B] hover:bg-[#246348] text-white shadow-xs rounded-xl px-4 py-2 font-semibold text-xs sm:text-sm">
          <Plus className="mr-2 h-4 w-4" />
          Add Patient
        </Button>
      }
    >
      <CustomerTable />
    </AppLayout>
  );
}