"use client";

import { useState, useMemo } from "react";
import {
  Table,
  TableHeader,
  TableBody,
  TableRow,
  TableHead,
  TableCell,
} from "@/components/ui/table";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Search,
  Filter,
  Download,
  Plus,
  MoreHorizontal,
  Eye,
  Edit,
  Calendar,
  MessageSquare,
  Archive,
  ChevronLeft,
  ChevronRight,
  Phone,
  Mail,
  UserCheck,
  Users,
  UserPlus,
  Clock,
  ArrowUpRight,
  ArrowDownRight,
  ArrowUpDown,
  SearchX,
} from "lucide-react";
import AddPatientModal from "@/components/modals/AddPatientModal";

interface PatientRecord {
  id: string;
  name: string;
  phone: string;
  email: string;
  doctor: string;
  lastVisit: string;
  nextAppointment: string;
  status: "Active" | "Pending" | "Inactive" | "Completed";
  avatarColor: string;
}

const initialPatients: PatientRecord[] = [
  {
    id: "PAT-9021",
    name: "Eleanor Vance",
    phone: "+91 98765 43210",
    email: "eleanor.vance@gmail.com",
    doctor: "Hannan",
    lastVisit: "18 Jul 2026",
    nextAppointment: "22 Jul 2026 • 09:30 AM",
    status: "Active",
    avatarColor: "bg-emerald-100 text-[#2E7D5B] dark:bg-emerald-950 dark:text-emerald-300",
  },
  {
    id: "PAT-8812",
    name: "Aarav Patel",
    phone: "+91 98123 45678",
    email: "aarav.patel@outlook.com",
    doctor: "Dr. David Miller",
    lastVisit: "14 Jul 2026",
    nextAppointment: "23 Jul 2026 • 11:15 AM",
    status: "Active",
    avatarColor: "bg-blue-100 text-blue-700 dark:bg-blue-950 dark:text-blue-300",
  },
  {
    id: "PAT-7432",
    name: "Sophia Chen",
    phone: "+91 97654 32109",
    email: "sophia.chen@yahoo.com",
    doctor: "Hannan",
    lastVisit: "10 Jul 2026",
    nextAppointment: "25 Jul 2026 • 02:00 PM",
    status: "Pending",
    avatarColor: "bg-amber-100 text-amber-800 dark:bg-amber-950 dark:text-amber-300",
  },
  {
    id: "PAT-6201",
    name: "Marcus Brody",
    phone: "+91 99887 76655",
    email: "m.brody@enterprise.io",
    doctor: "Dr. Priya Nair",
    lastVisit: "02 Jul 2026",
    nextAppointment: "28 Jul 2026 • 10:00 AM",
    status: "Completed",
    avatarColor: "bg-purple-100 text-purple-700 dark:bg-purple-950 dark:text-purple-300",
  },
  {
    id: "PAT-5540",
    name: "Priyanka Nair",
    phone: "+91 91234 56789",
    email: "priyanka.nair@health.in",
    doctor: "Dr. Ananya Sharma",
    lastVisit: "28 Jun 2026",
    nextAppointment: "None scheduled",
    status: "Pending",
    avatarColor: "bg-rose-100 text-rose-700 dark:bg-rose-950 dark:text-rose-300",
  },
  {
    id: "PAT-4319",
    name: "Michael Lee",
    phone: "+91 95432 10987",
    email: "michael.lee@gmail.com",
    doctor: "Dr. David Miller",
    lastVisit: "15 May 2026",
    nextAppointment: "None scheduled",
    status: "Inactive",
    avatarColor: "bg-slate-200 text-slate-700 dark:bg-slate-800 dark:text-slate-300",
  },
  {
    id: "PAT-3890",
    name: "Zoya Khan",
    phone: "+91 98989 89898",
    email: "zoya.k@clinic.org",
    doctor: "Hannan",
    lastVisit: "20 Jul 2026",
    nextAppointment: "30 Jul 2026 • 04:30 PM",
    status: "Active",
    avatarColor: "bg-emerald-100 text-[#2E7D5B] dark:bg-emerald-950 dark:text-emerald-300",
  },
  {
    id: "PAT-2104",
    name: "David Miller",
    phone: "+91 97766 55443",
    email: "david.m@techcorp.com",
    doctor: "Dr. Priya Nair",
    lastVisit: "01 Mar 2026",
    nextAppointment: "None scheduled",
    status: "Completed",
    avatarColor: "bg-[#E7F3EC] text-[#2E7D5B] dark:bg-emerald-950 dark:text-emerald-300",
  },
];

export default function CustomerTable() {
  const [patientsList, setPatientsList] = useState<PatientRecord[]>(initialPatients);
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("All");
  const [sortBy, setSortBy] = useState("name");
  const [rowsPerPage, setRowsPerPage] = useState("8");
  const [openActionId, setOpenActionId] = useState<string | null>(null);
  const [exportNotice, setExportNotice] = useState(false);
  const [isAddPatientOpen, setIsAddPatientOpen] = useState(false);

  // Filtered & Sorted dataset
  const filteredPatients = useMemo(() => {
    let result = patientsList.filter((patient) => {
      const matchesSearch =
        patient.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        patient.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
        patient.phone.includes(searchTerm) ||
        patient.id.toLowerCase().includes(searchTerm.toLowerCase());

      const matchesStatus =
        statusFilter === "All" || patient.status === statusFilter;

      return matchesSearch && matchesStatus;
    });

    if (sortBy === "name") {
      result.sort((a, b) => a.name.localeCompare(b.name));
    } else if (sortBy === "doctor") {
      result.sort((a, b) => a.doctor.localeCompare(b.doctor));
    } else if (sortBy === "status") {
      result.sort((a, b) => a.status.localeCompare(b.status));
    }

    return result;
  }, [searchTerm, statusFilter, sortBy]);

  const handleExport = () => {
    setExportNotice(true);
    setTimeout(() => setExportNotice(false), 3000);
  };

  const resetFilters = () => {
    setSearchTerm("");
    setStatusFilter("All");
    setSortBy("name");
  };

  return (
    <div className="space-y-6">
      {/* SECTION 1: KPI CARDS (Dark Mode Audit Completed) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {/* Card 1: Total Patients (Emerald) */}
        <div className="rounded-2xl border-2 border-emerald-300/90 dark:border-emerald-800/80 bg-emerald-50 dark:bg-emerald-950/40 p-5 sm:p-5.5 shadow-md shadow-emerald-950/5 hover:shadow-xl hover:shadow-emerald-900/10 hover:border-[#2E7D5B] dark:hover:border-emerald-500 hover:-translate-y-1 transition-all duration-200 ease-in-out group flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold text-emerald-950 dark:text-emerald-300 uppercase tracking-wider">
                Total Patients
              </span>
              <div className="h-10 w-10 rounded-xl bg-emerald-100/90 dark:bg-emerald-900/60 border-2 border-emerald-300 dark:border-emerald-700 text-[#2E7D5B] dark:text-emerald-300 flex items-center justify-center group-hover:bg-[#2E7D5B] group-hover:text-white transition-all duration-200 shadow-xs">
                <Users className="h-5 w-5" />
              </div>
            </div>

            <div className="mt-3 flex items-baseline justify-between gap-2">
              <span className="text-3xl font-black text-slate-900 dark:text-white tracking-tight">
                1,248
              </span>
              <span className="inline-flex items-center gap-0.5 text-xs font-extrabold px-2.5 py-1 rounded-full border-2 bg-emerald-100 dark:bg-emerald-900/80 text-emerald-900 dark:text-emerald-200 border-emerald-300 dark:border-emerald-700 shadow-2xs">
                <ArrowUpRight className="h-3.5 w-3.5 text-emerald-700 dark:text-emerald-300" />
                <span>↑ 12%</span>
              </span>
            </div>
          </div>

          <p className="text-[11px] font-semibold text-emerald-900/80 dark:text-emerald-300/80 mt-3 border-t border-emerald-200/80 dark:border-emerald-800/60 pt-2.5 leading-none">
            +142 new patients this month
          </p>
        </div>

        {/* Card 2: Active Patients (Teal) */}
        <div className="rounded-2xl border-2 border-teal-300/90 dark:border-teal-800/80 bg-teal-50 dark:bg-teal-950/40 p-5 sm:p-5.5 shadow-md shadow-teal-950/5 hover:shadow-xl hover:shadow-teal-900/10 hover:border-teal-600 dark:hover:border-teal-500 hover:-translate-y-1 transition-all duration-200 ease-in-out group flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold text-teal-950 dark:text-teal-300 uppercase tracking-wider">
                Active Patients
              </span>
              <div className="h-10 w-10 rounded-xl bg-teal-100/90 dark:bg-teal-900/60 border-2 border-teal-300 dark:border-teal-700 text-teal-700 dark:text-teal-300 flex items-center justify-center group-hover:bg-teal-700 group-hover:text-white transition-all duration-200 shadow-xs">
                <UserCheck className="h-5 w-5" />
              </div>
            </div>

            <div className="mt-3 flex items-baseline justify-between gap-2">
              <span className="text-3xl font-black text-slate-900 dark:text-white tracking-tight">
                1,080
              </span>
              <span className="inline-flex items-center gap-0.5 text-xs font-extrabold px-2.5 py-1 rounded-full border-2 bg-teal-100 dark:bg-teal-900/80 text-teal-900 dark:text-teal-200 border-teal-300 dark:border-teal-700 shadow-2xs">
                <ArrowUpRight className="h-3.5 w-3.5 text-teal-700 dark:text-teal-300" />
                <span>↑ 86.5%</span>
              </span>
            </div>
          </div>

          <p className="text-[11px] font-semibold text-teal-900/80 dark:text-teal-300/80 mt-3 border-t border-teal-200/80 dark:border-teal-800/60 pt-2.5 leading-none">
            Active patient retention rate
          </p>
        </div>

        {/* Card 3: New Patients This Month (Blue) */}
        <div className="rounded-2xl border-2 border-blue-300/90 dark:border-blue-800/80 bg-blue-50 dark:bg-blue-950/40 p-5 sm:p-5.5 shadow-md shadow-blue-950/5 hover:shadow-xl hover:shadow-blue-900/10 hover:border-blue-600 dark:hover:border-blue-500 hover:-translate-y-1 transition-all duration-200 ease-in-out group flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold text-blue-950 dark:text-blue-300 uppercase tracking-wider">
                New Patients This Month
              </span>
              <div className="h-10 w-10 rounded-xl bg-blue-100/90 dark:bg-blue-900/60 border-2 border-blue-300 dark:border-blue-700 text-blue-700 dark:text-blue-300 flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-all duration-200 shadow-xs">
                <UserPlus className="h-5 w-5" />
              </div>
            </div>

            <div className="mt-3 flex items-baseline justify-between gap-2">
              <span className="text-3xl font-black text-slate-900 dark:text-white tracking-tight">
                142
              </span>
              <span className="inline-flex items-center gap-0.5 text-xs font-extrabold px-2.5 py-1 rounded-full border-2 bg-blue-100 dark:bg-blue-900/80 text-blue-900 dark:text-blue-200 border-blue-300 dark:border-blue-700 shadow-2xs">
                <ArrowUpRight className="h-3.5 w-3.5 text-blue-700 dark:text-blue-300" />
                <span>↑ 18%</span>
              </span>
            </div>
          </div>

          <p className="text-[11px] font-semibold text-blue-900/80 dark:text-blue-300/80 mt-3 border-t border-blue-200/80 dark:border-blue-800/60 pt-2.5 leading-none">
            Registered via portal & OPD
          </p>
        </div>

        {/* Card 4: Pending Follow-ups (Amber) */}
        <div className="rounded-2xl border-2 border-amber-300/90 dark:border-amber-800/80 bg-amber-50 dark:bg-amber-950/40 p-5 sm:p-5.5 shadow-md shadow-amber-950/5 hover:shadow-xl hover:shadow-amber-900/10 hover:border-amber-600 dark:hover:border-amber-500 hover:-translate-y-1 transition-all duration-200 ease-in-out group flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold text-amber-950 dark:text-amber-300 uppercase tracking-wider">
                Pending Follow-ups
              </span>
              <div className="h-10 w-10 rounded-xl bg-amber-100/90 dark:bg-amber-900/60 border-2 border-amber-300 dark:border-amber-700 text-amber-800 dark:text-amber-300 flex items-center justify-center group-hover:bg-amber-600 group-hover:text-white transition-all duration-200 shadow-xs">
                <Clock className="h-5 w-5" />
              </div>
            </div>

            <div className="mt-3 flex items-baseline justify-between gap-2">
              <span className="text-3xl font-black text-slate-900 dark:text-white tracking-tight">
                14
              </span>
              <span className="inline-flex items-center gap-0.5 text-xs font-extrabold px-2.5 py-1 rounded-full border-2 bg-amber-100 dark:bg-amber-900/80 text-amber-950 dark:text-amber-200 border-amber-300 dark:border-amber-700 shadow-2xs">
                <ArrowDownRight className="h-3.5 w-3.5 text-amber-700 dark:text-amber-300" />
                <span>↓ 4%</span>
              </span>
            </div>
          </div>

          <p className="text-[11px] font-semibold text-amber-900/80 dark:text-amber-300/80 mt-3 border-t border-amber-200/80 dark:border-amber-800/60 pt-2.5 leading-none">
            Action required this week
          </p>
        </div>
      </div>

      {/* SECTION 2: SEARCH & ACTIONS TOOLBAR (Dark Mode Audit Completed) */}
      <div className="rounded-2xl border border-[#D2E7DC] dark:border-slate-800 bg-[#F8FCFA] dark:bg-slate-900/90 p-5 shadow-xs space-y-4 transition-colors duration-250">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
          {/* Left: Large Search Bar */}
          <div className="relative flex-1">
            <Search className="absolute left-3.5 top-3 h-4 w-4 text-slate-400 dark:text-slate-500" />
            <Input
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search patients by name, email, phone, or ID..."
              className="pl-10 bg-white dark:bg-slate-800 border-[#D2E7DC] dark:border-slate-700 text-slate-900 dark:text-slate-100 placeholder:text-slate-400 dark:placeholder:text-slate-500 focus-visible:ring-[#2E7D5B] rounded-xl text-xs sm:text-sm h-10"
            />
          </div>

          {/* Right: Filter, Sort, Export, Add Patient Aligned Horizontally */}
          <div className="flex items-center gap-2.5 flex-wrap shrink-0">
            {/* Filter Dropdown */}
            <div className="flex items-center gap-1.5">
              <Filter className="h-4 w-4 text-slate-400 dark:text-slate-500 shrink-0 hidden sm:block" />
              <select
                value={statusFilter}
                onChange={(e) => setStatusFilter(e.target.value)}
                className="bg-white dark:bg-slate-800 border border-[#D2E7DC] dark:border-slate-700 rounded-xl text-xs sm:text-sm text-slate-700 dark:text-slate-200 px-3 py-2 h-10 focus:outline-none focus:ring-2 focus:ring-[#2E7D5B]/30"
              >
                <option value="All">All Statuses</option>
                <option value="Active">Active</option>
                <option value="Pending">Pending</option>
                <option value="Inactive">Inactive</option>
                <option value="Completed">Completed</option>
              </select>
            </div>

            {/* Sort Dropdown */}
            <div className="flex items-center gap-1.5">
              <ArrowUpDown className="h-4 w-4 text-slate-400 dark:text-slate-500 shrink-0 hidden sm:block" />
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="bg-white dark:bg-slate-800 border border-[#D2E7DC] dark:border-slate-700 rounded-xl text-xs sm:text-sm text-slate-700 dark:text-slate-200 px-3 py-2 h-10 focus:outline-none focus:ring-2 focus:ring-[#2E7D5B]/30"
              >
                <option value="name">Sort by Name</option>
                <option value="doctor">Sort by Doctor</option>
                <option value="status">Sort by Status</option>
              </select>
            </div>

            {/* Export CSV Button */}
            <Button
              onClick={handleExport}
              variant="outline"
              className="border-[#D2E7DC] dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-200 hover:bg-[#F2F8F5] dark:hover:bg-slate-700 hover:text-[#2E7D5B] dark:hover:text-emerald-400 rounded-xl text-xs sm:text-sm font-semibold h-10 px-3.5 gap-1.5"
            >
              <Download className="h-4 w-4 text-slate-500 dark:text-slate-400" />
              <span>Export CSV</span>
            </Button>

            {/* Primary Add Patient Button */}
            <Button
              onClick={() => setIsAddPatientOpen(true)}
              className="bg-[#2E7D5B] hover:bg-[#246348] dark:bg-emerald-600 dark:hover:bg-emerald-500 text-white shadow-xs rounded-xl text-xs sm:text-sm font-bold h-10 px-4 gap-1.5 cursor-pointer"
            >
              <Plus className="h-4 w-4" />
              <span>Add Patient</span>
            </Button>
          </div>
        </div>

        {/* Add Patient Modal */}
        <AddPatientModal
          isOpen={isAddPatientOpen}
          onClose={() => setIsAddPatientOpen(false)}
          onPatientAdded={(newPat) => {
            setPatientsList([newPat, ...patientsList]);
          }}
        />

        {exportNotice && (
          <div className="p-3 rounded-xl bg-emerald-50 dark:bg-emerald-950 border border-emerald-200 dark:border-emerald-800 text-[#2E7D5B] dark:text-emerald-300 text-xs font-semibold flex items-center justify-between">
            <span>✓ Patient CRM records exported successfully to CSV format.</span>
          </div>
        )}

        {/* SECTION 3: PATIENT TABLE & EMPTY STATE */}
        {filteredPatients.length === 0 ? (
          /* SECTION 6: CLEAN EMPTY STATE */
          <div className="rounded-xl border border-dashed border-[#D2E7DC] dark:border-slate-800 bg-white dark:bg-slate-900 p-12 text-center flex flex-col items-center justify-center">
            <div className="h-14 w-14 rounded-2xl bg-[#E7F3EC] dark:bg-emerald-950 text-[#2E7D5B] dark:text-emerald-400 border border-[#C6E2D2] dark:border-emerald-800 flex items-center justify-center mb-3 shadow-xs">
              <SearchX className="h-7 w-7" />
            </div>
            <h3 className="text-base font-bold text-slate-900 dark:text-white">No Patients Found</h3>
            <p className="text-xs text-slate-500 dark:text-slate-400 max-w-sm mt-1 mb-4 leading-relaxed">
              No patient records match your current search term or selected status filters. Try clearing your filters or add a new patient.
            </p>
            <div className="flex items-center gap-2">
              <Button
                onClick={resetFilters}
                variant="outline"
                className="border-[#D2E7DC] dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-200 rounded-xl text-xs font-semibold px-4 py-2"
              >
                Reset Filters
              </Button>
              <Button className="bg-[#2E7D5B] hover:bg-[#246348] dark:bg-emerald-600 dark:hover:bg-emerald-500 text-white rounded-xl text-xs font-bold px-4 py-2">
                <Plus className="h-4 w-4 mr-1.5" />
                Add Patient
              </Button>
            </div>
          </div>
        ) : (
          <div className="rounded-xl border border-[#D2E7DC] dark:border-slate-800 bg-white dark:bg-slate-900 overflow-hidden shadow-2xs">
            <Table>
              <TableHeader className="bg-[#F2F8F5] dark:bg-slate-800/80">
                <TableRow className="border-[#D2E7DC] dark:border-slate-800">
                  <TableHead className="font-bold text-slate-800 dark:text-slate-200 text-xs">Avatar</TableHead>
                  <TableHead className="font-bold text-slate-800 dark:text-slate-200 text-xs">Patient Name</TableHead>
                  <TableHead className="font-bold text-slate-800 dark:text-slate-200 text-xs">Email</TableHead>
                  <TableHead className="font-bold text-slate-800 dark:text-slate-200 text-xs">Phone</TableHead>
                  <TableHead className="font-bold text-slate-800 dark:text-slate-200 text-xs">Assigned Doctor</TableHead>
                  <TableHead className="font-bold text-slate-800 dark:text-slate-200 text-xs">Last Visit</TableHead>
                  <TableHead className="font-bold text-slate-800 dark:text-slate-200 text-xs">Status</TableHead>
                  <TableHead className="text-right font-bold text-slate-800 dark:text-slate-200 text-xs">Actions</TableHead>
                </TableRow>
              </TableHeader>

              <TableBody>
                {filteredPatients.map((patient) => (
                  <TableRow
                    key={patient.id}
                    className="border-[#EAF4EE] dark:border-slate-800 hover:bg-[#F2F8F5] dark:hover:bg-slate-800/60 transition-colors group cursor-pointer"
                  >
                    {/* Avatar Column */}
                    <TableCell className="py-2.5">
                      <Avatar className="h-9 w-9 border border-slate-200 dark:border-slate-700">
                        <AvatarFallback className={`${patient.avatarColor} font-bold text-xs`}>
                          {patient.name
                            .split(" ")
                            .map((n) => n[0])
                            .join("")}
                        </AvatarFallback>
                      </Avatar>
                    </TableCell>

                    {/* Patient Name & ID */}
                    <TableCell className="py-2.5">
                      <div>
                        <p className="font-bold text-slate-900 dark:text-slate-100 text-xs sm:text-sm group-hover:text-[#2E7D5B] dark:group-hover:text-emerald-400 transition-colors">
                          {patient.name}
                        </p>
                        <p className="text-[11px] text-slate-400 dark:text-slate-500 font-mono">
                          {patient.id}
                        </p>
                      </div>
                    </TableCell>

                    {/* Email Column */}
                    <TableCell className="py-2.5 text-xs text-slate-600 dark:text-slate-300 font-medium">
                      <div className="flex items-center gap-1.5">
                        <Mail className="h-3.5 w-3.5 text-slate-400 dark:text-slate-500" />
                        <span>{patient.email}</span>
                      </div>
                    </TableCell>

                    {/* Phone Column */}
                    <TableCell className="py-2.5 text-xs text-slate-600 dark:text-slate-300 font-medium">
                      <div className="flex items-center gap-1.5">
                        <Phone className="h-3.5 w-3.5 text-slate-400 dark:text-slate-500" />
                        <span>{patient.phone}</span>
                      </div>
                    </TableCell>

                    {/* Assigned Doctor Column */}
                    <TableCell className="py-2.5 text-xs font-semibold text-slate-800 dark:text-slate-200">
                      {patient.doctor}
                    </TableCell>

                    {/* Last Visit Column */}
                    <TableCell className="py-2.5 text-xs text-slate-600 dark:text-slate-400 font-medium">
                      {patient.lastVisit}
                    </TableCell>

                    {/* SECTION 4: MODERN COLORED STATUS BADGES (High Contrast Dark Mode) */}
                    <TableCell className="py-2.5">
                      <Badge
                        variant="outline"
                        className={`text-[11px] font-bold px-2.5 py-0.5 rounded-full border ${
                          patient.status === "Active"
                            ? "bg-emerald-50 text-[#2E7D5B] border-emerald-300 dark:bg-emerald-950 dark:text-emerald-300 dark:border-emerald-800"
                            : patient.status === "Pending"
                            ? "bg-amber-50 text-amber-800 border-amber-300 dark:bg-amber-950 dark:text-amber-300 dark:border-amber-800"
                            : patient.status === "Inactive"
                            ? "bg-slate-100 text-slate-600 border-slate-200 dark:bg-slate-800 dark:text-slate-300 dark:border-slate-700"
                            : "bg-blue-50 text-blue-700 border-blue-200 dark:bg-blue-950 dark:text-blue-300 dark:border-blue-800"
                        }`}
                      >
                        {patient.status}
                      </Badge>
                    </TableCell>

                    {/* Actions Menu */}
                    <TableCell className="py-2.5 text-right relative">
                      <div className="relative inline-block text-left">
                        <Button
                          onClick={() =>
                            setOpenActionId(
                              openActionId === patient.id ? null : patient.id
                            )
                          }
                          variant="ghost"
                          size="sm"
                          className="h-8 w-8 p-0 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-600 dark:text-slate-300"
                        >
                          <MoreHorizontal className="h-4 w-4" />
                        </Button>

                        {/* Interactive Dropdown Popup */}
                        {openActionId === patient.id && (
                          <div className="absolute right-0 z-50 mt-1 w-48 rounded-xl bg-white dark:bg-slate-800 border border-[#D2E7DC] dark:border-slate-700 p-1.5 shadow-lg text-left space-y-0.5 animate-in fade-in-50 duration-150">
                            <button
                              onClick={() => setOpenActionId(null)}
                              className="w-full text-left px-3 py-1.5 text-xs font-semibold text-slate-700 dark:text-slate-200 hover:bg-[#F2F8F5] dark:hover:bg-slate-700 hover:text-[#2E7D5B] dark:hover:text-emerald-400 rounded-lg flex items-center gap-2"
                            >
                              <Eye className="h-3.5 w-3.5 text-[#2E7D5B] dark:text-emerald-400" />
                              <span>View Patient Record</span>
                            </button>
                            <button
                              onClick={() => setOpenActionId(null)}
                              className="w-full text-left px-3 py-1.5 text-xs font-semibold text-slate-700 dark:text-slate-200 hover:bg-[#F2F8F5] dark:hover:bg-slate-700 hover:text-blue-600 dark:hover:text-blue-400 rounded-lg flex items-center gap-2"
                            >
                              <Edit className="h-3.5 w-3.5 text-blue-600 dark:text-blue-400" />
                              <span>Edit Details</span>
                            </button>
                            <button
                              onClick={() => setOpenActionId(null)}
                              className="w-full text-left px-3 py-1.5 text-xs font-semibold text-slate-700 dark:text-slate-200 hover:bg-[#F2F8F5] dark:hover:bg-slate-700 hover:text-purple-600 dark:hover:text-purple-400 rounded-lg flex items-center gap-2"
                            >
                              <Calendar className="h-3.5 w-3.5 text-purple-600 dark:text-purple-400" />
                              <span>Schedule Visit</span>
                            </button>
                            <button
                              onClick={() => setOpenActionId(null)}
                              className="w-full text-left px-3 py-1.5 text-xs font-semibold text-slate-700 dark:text-slate-200 hover:bg-[#F2F8F5] dark:hover:bg-slate-700 hover:text-emerald-600 dark:hover:text-emerald-400 rounded-lg flex items-center gap-2"
                            >
                              <MessageSquare className="h-3.5 w-3.5 text-emerald-600 dark:text-emerald-400" />
                              <span>Send WhatsApp</span>
                            </button>
                            <div className="my-1 border-t border-slate-100 dark:border-slate-700" />
                            <button
                              onClick={() => setOpenActionId(null)}
                              className="w-full text-left px-3 py-1.5 text-xs font-semibold text-rose-600 dark:text-rose-400 hover:bg-rose-50 dark:hover:bg-rose-950/50 rounded-lg flex items-center gap-2"
                            >
                              <Archive className="h-3.5 w-3.5 text-rose-600 dark:text-rose-400" />
                              <span>Archive Record</span>
                            </button>
                          </div>
                        )}
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        )}

        {/* SECTION 5: PAGINATION BAR & ROWS PER PAGE SELECTOR */}
        <div className="mt-4 pt-3 border-t border-[#D2E7DC] dark:border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-500 dark:text-slate-400">
          <div className="flex items-center gap-3">
            <div>
              Showing <span className="font-bold text-slate-800 dark:text-slate-200">{filteredPatients.length}</span> of{" "}
              <span className="font-bold text-slate-800 dark:text-slate-200">1,248</span> patient entries
            </div>

            {/* Rows Per Page Selector */}
            <div className="flex items-center gap-1.5 border-l border-slate-200 dark:border-slate-800 pl-3">
              <span className="text-slate-400 dark:text-slate-500">Rows:</span>
              <select
                value={rowsPerPage}
                onChange={(e) => setRowsPerPage(e.target.value)}
                className="bg-white dark:bg-slate-800 border border-[#D2E7DC] dark:border-slate-700 rounded-lg text-xs text-slate-700 dark:text-slate-200 px-2 py-1 focus:outline-none"
              >
                <option value="8">8 per page</option>
                <option value="15">15 per page</option>
                <option value="25">25 per page</option>
                <option value="50">50 per page</option>
              </select>
            </div>
          </div>

          <div className="flex items-center gap-1.5">
            <Button
              variant="outline"
              size="sm"
              disabled
              className="h-8 px-2.5 rounded-lg border-[#D2E7DC] dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-400 dark:text-slate-500 text-xs font-semibold"
            >
              <ChevronLeft className="h-3.5 w-3.5 mr-1" />
              <span>Previous</span>
            </Button>

            <button className="h-8 w-8 rounded-lg bg-[#2E7D5B] dark:bg-emerald-600 text-white font-bold text-xs shadow-2xs">
              1
            </button>
            <button className="h-8 w-8 rounded-lg bg-white dark:bg-slate-800 border border-[#D2E7DC] dark:border-slate-700 text-slate-700 dark:text-slate-200 font-semibold text-xs hover:bg-[#F2F8F5] dark:hover:bg-slate-700">
              2
            </button>
            <button className="h-8 w-8 rounded-lg bg-white dark:bg-slate-800 border border-[#D2E7DC] dark:border-slate-700 text-slate-700 dark:text-slate-200 font-semibold text-xs hover:bg-[#F2F8F5] dark:hover:bg-slate-700">
              3
            </button>
            <span className="px-1 text-slate-400 dark:text-slate-500">...</span>
            <button className="h-8 w-8 rounded-lg bg-white dark:bg-slate-800 border border-[#D2E7DC] dark:border-slate-700 text-slate-700 dark:text-slate-200 font-semibold text-xs hover:bg-[#F2F8F5] dark:hover:bg-slate-700">
              156
            </button>

            <Button
              variant="outline"
              size="sm"
              className="h-8 px-2.5 rounded-lg border-[#D2E7DC] dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-200 hover:bg-[#F2F8F5] dark:hover:bg-slate-700 text-xs font-semibold"
            >
              <span>Next</span>
              <ChevronRight className="h-3.5 w-3.5 ml-1" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}