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
    <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6">
      <h2 className="mb-6 text-xl font-semibold text-white">
        Customer List
      </h2>

      <div className="space-y-4">
        {customers.map((customer) => (
          <div
            key={customer.email}
            className="flex items-center justify-between rounded-xl border border-slate-800 bg-slate-950 p-4"
          >
            <div className="flex items-center gap-4">
              <Avatar>
                <AvatarFallback>
                  {customer.name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </AvatarFallback>
              </Avatar>

              <div>
                <p className="font-semibold text-white">
                  {customer.name}
                </p>

                <p className="text-sm text-slate-400">
                  {customer.email}
                </p>
              </div>
            </div>
<Badge
  className={
    customer.status === "Active"
      ? "bg-green-600 hover:bg-green-600"
      : "bg-red-600 hover:bg-red-600"
  }
>
  {customer.status}
</Badge>
          </div>
        ))}
      </div>
    </div>
  );
}