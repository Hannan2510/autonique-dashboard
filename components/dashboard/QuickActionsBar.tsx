"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Plus, CalendarPlus, FileSpreadsheet, Send, Zap } from "lucide-react";
import AddPatientModal from "@/components/modals/AddPatientModal";
import BookAppointmentModal from "@/components/modals/BookAppointmentModal";
import GenerateInvoiceModal from "@/components/modals/GenerateInvoiceModal";
import SendReminderModal from "@/components/modals/SendReminderModal";

interface QuickActionsBarProps {
  onPatientAdded?: (patient: any) => void;
  onAppointmentBooked?: (appt: any) => void;
}

export default function QuickActionsBar({
  onPatientAdded,
  onAppointmentBooked,
}: QuickActionsBarProps) {
  const [isAddPatientOpen, setIsAddPatientOpen] = useState(false);
  const [isBookApptOpen, setIsBookApptOpen] = useState(false);
  const [isInvoiceOpen, setIsInvoiceOpen] = useState(false);
  const [isReminderOpen, setIsReminderOpen] = useState(false);

  return (
    <>
      <div className="rounded-2xl border border-[#D2E7DC] dark:border-slate-800 bg-[#F8FCFA] dark:bg-slate-900/90 p-3.5 shadow-2xs flex flex-col sm:flex-row items-center justify-between gap-3 transition-colors duration-250">
        <div className="flex items-center gap-2">
          <div className="h-8 w-8 rounded-xl bg-[#2E7D5B]/10 dark:bg-emerald-950 text-[#2E7D5B] dark:text-emerald-400 border border-[#2E7D5B]/20 dark:border-emerald-800 flex items-center justify-center font-bold">
            <Zap className="h-4 w-4" />
          </div>
          <div>
            <h3 className="text-xs sm:text-sm font-bold text-slate-900 dark:text-slate-100 leading-none">
              Quick Actions
            </h3>
            <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-0.5">
              Instant clinical workflows
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2 flex-wrap w-full sm:w-auto justify-end">
          {/* + Add Patient */}
          <Button
            onClick={() => setIsAddPatientOpen(true)}
            className="bg-[#2E7D5B] hover:bg-[#246348] dark:bg-emerald-600 dark:hover:bg-emerald-500 text-white rounded-xl text-xs font-bold px-3 py-1.5 h-8 shadow-xs cursor-pointer"
          >
            <Plus className="h-3.5 w-3.5 mr-1" />
            <span>Add Patient</span>
          </Button>

          {/* Book Appointment */}
          <Button
            onClick={() => setIsBookApptOpen(true)}
            variant="outline"
            className="border-[#D2E7DC] dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-200 hover:bg-[#F2F8F5] dark:hover:bg-slate-700 hover:text-[#2E7D5B] dark:hover:text-emerald-400 rounded-xl text-xs font-bold px-3 py-1.5 h-8 cursor-pointer"
          >
            <CalendarPlus className="h-3.5 w-3.5 mr-1 text-[#2E7D5B] dark:text-emerald-400" />
            <span>Book Appointment</span>
          </Button>

          {/* Generate Invoice */}
          <Button
            onClick={() => setIsInvoiceOpen(true)}
            variant="outline"
            className="border-[#D2E7DC] dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-200 hover:bg-[#F2F8F5] dark:hover:bg-slate-700 hover:text-purple-600 dark:hover:text-purple-400 rounded-xl text-xs font-bold px-3 py-1.5 h-8 hidden md:inline-flex cursor-pointer"
          >
            <FileSpreadsheet className="h-3.5 w-3.5 mr-1 text-purple-600 dark:text-purple-400" />
            <span>Generate Invoice</span>
          </Button>

          {/* Send Reminder */}
          <Button
            onClick={() => setIsReminderOpen(true)}
            variant="outline"
            className="border-[#D2E7DC] dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-200 hover:bg-[#F2F8F5] dark:hover:bg-slate-700 hover:text-amber-600 dark:hover:text-amber-400 rounded-xl text-xs font-bold px-3 py-1.5 h-8 hidden xl:inline-flex cursor-pointer"
          >
            <Send className="h-3.5 w-3.5 mr-1 text-amber-600 dark:text-amber-400" />
            <span>Send Reminder</span>
          </Button>
        </div>
      </div>

      {/* Modals */}
      <AddPatientModal
        isOpen={isAddPatientOpen}
        onClose={() => setIsAddPatientOpen(false)}
        onPatientAdded={onPatientAdded}
      />

      <BookAppointmentModal
        isOpen={isBookApptOpen}
        onClose={() => setIsBookApptOpen(false)}
        onAppointmentBooked={onAppointmentBooked}
      />

      <GenerateInvoiceModal
        isOpen={isInvoiceOpen}
        onClose={() => setIsInvoiceOpen(false)}
      />

      <SendReminderModal
        isOpen={isReminderOpen}
        onClose={() => setIsReminderOpen(false)}
      />
    </>
  );
}
