import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

const customers = [
  {
    name: "John Doe",
    email: "john.doe@gmail.com",
    status: "Active",
  },
  {
    name: "Emma Wilson",
    email: "emma.wilson@gmail.com",
    status: "Active",
  },
  {
    name: "Michael Lee",
    email: "michael.lee@gmail.com",
    status: "Inactive",
  },
  {
    name: "Sophia Brown",
    email: "sophia.brown@gmail.com",
    status: "Active",
  },
];

export default function CustomerTable() {
  return (
    <div className="rounded-2xl border border-[#D2E7DC] bg-[#F8FCFA] p-6 shadow-xs">
      <h2 className="mb-6 text-xl font-bold text-slate-900 tracking-tight">
        Patient Directory
      </h2>

      <div className="space-y-3">
        {customers.map((customer) => (
          <div
            key={customer.email}
            className="flex items-center justify-between rounded-xl border border-[#D2E7DC]/80 bg-[#F2F8F5] p-4 transition-all hover:bg-white hover:border-[#2E7D5B]/30 hover:shadow-xs"
          >
            <div className="flex items-center gap-4">
              <Avatar className="h-10 w-10 border border-[#2E7D5B]/20">
                <AvatarFallback className="bg-[#2E7D5B]/10 text-[#2E7D5B] font-bold text-xs">
                  {customer.name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </AvatarFallback>
              </Avatar>

              <div>
                <p className="font-semibold text-slate-900 text-sm">
                  {customer.name}
                </p>

                <p className="text-xs text-slate-500">
                  {customer.email}
                </p>
              </div>
            </div>

            <Badge
              className={
                customer.status === "Active"
                  ? "bg-emerald-50 text-[#2E7D5B] border-emerald-200/50 hover:bg-emerald-100 font-semibold"
                  : "bg-rose-50 text-rose-700 border-rose-200/50 hover:bg-rose-100 font-semibold"
              }
              variant="outline"
            >
              {customer.status}
            </Badge>
          </div>
        ))}
      </div>
    </div>
  );
}