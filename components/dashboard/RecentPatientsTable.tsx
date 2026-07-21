"use client";

import { useState } from "react";
import { Table, TableHeader, TableBody, TableRow, TableHead, TableCell } from "@/components/ui/table";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Eye, User, Stethoscope, Calendar, Phone, Mail } from "lucide-react";

interface PatientRow {
  id: string;
  name: string;
  doctor: string;
  lastVisit: string;
  status: "Active" | "In Consultation" | "Completed" | "Follow-up";
  avatarColor: string;
}

const recentPatients: PatientRow[] = [
  {
    id: "PAT-9021",
    name: "Eleanor Vance",
    doctor: "Hannan",
    lastVisit: "18 Jul 2026",
    status: "In Consultation",
    avatarColor: "bg-emerald-100 text-[#2E7D5B] dark:bg-emerald-950 dark:text-emerald-300",
  },
  {
    id: "PAT-8812",
    name: "Aarav Patel",
    doctor: "Dr. David Miller",
    lastVisit: "14 Jul 2026",
    status: "Active",
    avatarColor: "bg-blue-100 text-blue-700 dark:bg-blue-950 dark:text-blue-300",
  },
  {
    id: "PAT-7432",
    name: "Sophia Chen",
    doctor: "Hannan",
    lastVisit: "10 Jul 2026",
    status: "Follow-up",
    avatarColor: "bg-amber-100 text-amber-800 dark:bg-amber-950 dark:text-amber-300",
  },
  {
    id: "PAT-6201",
    name: "Marcus Brody",
    doctor: "Dr. Priya Nair",
    lastVisit: "02 Jul 2026",
    status: "Completed",
    avatarColor: "bg-purple-100 text-purple-700 dark:bg-purple-950 dark:text-purple-300",
  },
];

export default function RecentPatientsTable() {
  const [selectedPatient, setSelectedPatient] = useState<PatientRow | null>(null);

  return (
    <div className="w-full">
      <div className="flex items-center justify-between mb-3">
        <div>
          <h2 className="text-base sm:text-lg font-bold text-slate-900 dark:text-slate-100 tracking-tight">
            Recent Patients Directory
          </h2>
          <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
            Latest checked-in and active clinic accounts
          </p>
        </div>
        <a
          href="/customers"
          className="text-xs font-bold text-[#2E7D5B] dark:text-emerald-400 hover:underline"
        >
          View All Patients →
        </a>
      </div>

      <div className="rounded-xl border border-[#D2E7DC] dark:border-slate-800 bg-white dark:bg-slate-900 overflow-hidden shadow-2xs">
        <Table>
          <TableHeader className="bg-[#F2F8F5] dark:bg-slate-800/80">
            <TableRow className="border-[#D2E7DC] dark:border-slate-800">
              <TableHead className="font-bold text-slate-800 dark:text-slate-200 text-xs py-2.5">Avatar</TableHead>
              <TableHead className="font-bold text-slate-800 dark:text-slate-200 text-xs py-2.5">Patient</TableHead>
              <TableHead className="font-bold text-slate-800 dark:text-slate-200 text-xs py-2.5">Doctor</TableHead>
              <TableHead className="font-bold text-slate-800 dark:text-slate-200 text-xs py-2.5">Last Visit</TableHead>
              <TableHead className="font-bold text-slate-800 dark:text-slate-200 text-xs py-2.5">Status</TableHead>
              <TableHead className="text-right font-bold text-slate-800 dark:text-slate-200 text-xs py-2.5">Actions</TableHead>
            </TableRow>
          </TableHeader>

          <TableBody>
            {recentPatients.map((patient) => (
              <TableRow
                key={patient.id}
                onClick={() => setSelectedPatient(patient)}
                className="border-[#EAF4EE] dark:border-slate-800 hover:bg-[#F2F8F5] dark:hover:bg-slate-800/60 transition-colors group cursor-pointer"
              >
                {/* Avatar Column */}
                <TableCell className="py-2">
                  <Avatar className="h-8 w-8 border border-slate-200 dark:border-slate-700">
                    <AvatarFallback className={`${patient.avatarColor} font-bold text-xs`}>
                      {patient.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </AvatarFallback>
                  </Avatar>
                </TableCell>

                {/* Patient Name & ID Column */}
                <TableCell className="py-2">
                  <div>
                    <p className="font-bold text-slate-900 dark:text-slate-100 text-xs sm:text-sm group-hover:text-[#2E7D5B] dark:group-hover:text-emerald-400 transition-colors">
                      {patient.name}
                    </p>
                    <p className="text-[10px] text-slate-400 dark:text-slate-500 font-mono">
                      {patient.id}
                    </p>
                  </div>
                </TableCell>

                {/* Doctor Column */}
                <TableCell className="py-2 text-xs font-semibold text-slate-800 dark:text-slate-200">
                  {patient.doctor}
                </TableCell>

                {/* Last Visit Column */}
                <TableCell className="py-2 text-xs text-slate-600 dark:text-slate-400 font-medium">
                  {patient.lastVisit}
                </TableCell>

                {/* Status Badge */}
                <TableCell className="py-2">
                  <Badge
                    variant="outline"
                    className={`text-[10px] font-bold px-2 py-0.5 rounded-full border ${
                      patient.status === "In Consultation"
                        ? "bg-amber-50 text-amber-700 border-amber-300 dark:bg-amber-950 dark:text-amber-300 dark:border-amber-800"
                        : patient.status === "Active"
                        ? "bg-emerald-50 text-[#2E7D5B] border-emerald-300 dark:bg-emerald-950 dark:text-emerald-300 dark:border-emerald-800"
                        : patient.status === "Completed"
                        ? "bg-blue-50 text-blue-700 border-blue-200 dark:bg-blue-950 dark:text-blue-300 dark:border-blue-800"
                        : "bg-purple-50 text-purple-700 border-purple-200 dark:bg-purple-950 dark:text-purple-300 dark:border-purple-800"
                    }`}
                  >
                    {patient.status}
                  </Badge>
                </TableCell>

                {/* Actions Column */}
                <TableCell className="py-2 text-right">
                  <Button
                    onClick={(e) => {
                      e.stopPropagation();
                      setSelectedPatient(patient);
                    }}
                    variant="ghost"
                    size="sm"
                    className="h-7 w-7 p-0 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-600 dark:text-slate-300 hover:text-[#2E7D5B] dark:hover:text-emerald-400 cursor-pointer"
                  >
                    <Eye className="h-3.5 w-3.5" />
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      {/* Patient Record Detail Modal */}
      {selectedPatient && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/60 backdrop-blur-xs animate-in fade-in-50 duration-150">
          <div className="w-full max-w-sm bg-white dark:bg-slate-900 border border-[#D2E7DC] dark:border-slate-800 rounded-2xl p-5 shadow-2xl space-y-4">
            <div className="flex items-center justify-between border-b border-slate-100 dark:border-slate-800 pb-3">
              <div className="flex items-center gap-2">
                <div className="h-7 w-7 rounded-lg bg-[#2E7D5B]/10 text-[#2E7D5B] dark:bg-emerald-950 dark:text-emerald-400 flex items-center justify-center font-bold">
                  <User className="h-4 w-4" />
                </div>
                <h3 className="text-sm font-bold text-slate-900 dark:text-white">Patient Record</h3>
              </div>
              <button
                onClick={() => setSelectedPatient(null)}
                className="text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 text-xs font-bold"
              >
                ✕
              </button>
            </div>

            <div className="space-y-2.5 text-xs">
              <div className="flex justify-between">
                <span className="text-slate-400">Patient Name:</span>
                <span className="font-bold text-slate-900 dark:text-white">{selectedPatient.name}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-400">Patient ID:</span>
                <span className="font-mono font-bold text-slate-600 dark:text-slate-400">{selectedPatient.id}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-400">Assigned Doctor:</span>
                <span className="font-semibold text-slate-800 dark:text-slate-200">{selectedPatient.doctor}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-400">Last Consultation:</span>
                <span className="font-medium text-slate-700 dark:text-slate-300">{selectedPatient.lastVisit}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-400">Current Status:</span>
                <span className="font-extrabold text-[#2E7D5B] dark:text-emerald-400">{selectedPatient.status}</span>
              </div>
            </div>

            <div className="flex items-center gap-2 pt-2">
              <a href="/customers" className="w-full">
                <Button
                  className="w-full bg-[#2E7D5B] hover:bg-[#246348] dark:bg-emerald-600 dark:hover:bg-emerald-500 text-white rounded-xl text-xs font-bold py-2"
                >
                  View Full CRM Profile
                </Button>
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
