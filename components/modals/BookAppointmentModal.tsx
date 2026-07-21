"use client";

import { useState } from "react";
import { X, CalendarPlus, Calendar, Clock, User, Stethoscope, Video, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

interface BookAppointmentModalProps {
  isOpen: boolean;
  onClose: () => void;
  onAppointmentBooked?: (newAppt: any) => void;
}

export default function BookAppointmentModal({
  isOpen,
  onClose,
  onAppointmentBooked,
}: BookAppointmentModalProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    patientName: "",
    doctor: "Dr. Sarah Jenkins",
    department: "Cardiology",
    date: "2026-07-22",
    time: "10:30 AM",
    type: "In-Person",
  });

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      const newApptObj = {
        patientName: formData.patientName || "Eleanor Vance",
        doctor: formData.doctor,
        time: formData.time,
        department: formData.department,
        status: "Confirmed" as const,
        avatarColor: "bg-emerald-100 text-[#2E7D5B] dark:bg-emerald-950 dark:text-emerald-300",
      };

      if (onAppointmentBooked) {
        onAppointmentBooked(newApptObj);
      }

      setIsSubmitting(false);
      onClose();

      setFormData({
        patientName: "",
        doctor: "Dr. Sarah Jenkins",
        department: "Cardiology",
        date: "2026-07-22",
        time: "10:30 AM",
        type: "In-Person",
      });
    }, 600);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/60 backdrop-blur-xs animate-in fade-in-50 duration-150">
      <div
        className="w-full max-w-lg bg-white dark:bg-slate-900 border border-[#D2E7DC] dark:border-slate-800 rounded-2xl shadow-2xl shadow-slate-950/20 overflow-hidden flex flex-col transition-colors duration-250 animate-in zoom-in-95 duration-150"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-[#D2E7DC] dark:border-slate-800 bg-[#F8FCFA] dark:bg-slate-900/90">
          <div className="flex items-center gap-2.5">
            <div className="h-9 w-9 rounded-xl bg-[#2E7D5B]/10 dark:bg-emerald-950 text-[#2E7D5B] dark:text-emerald-400 border border-[#2E7D5B]/20 dark:border-emerald-800 flex items-center justify-center font-bold shadow-2xs">
              <CalendarPlus className="h-4.5 w-4.5" />
            </div>
            <div>
              <h3 className="text-base font-bold text-slate-900 dark:text-slate-100 leading-none">
                Schedule New Appointment
              </h3>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                Book a consultation slot with attending doctor
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-1 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Form Body */}
        <form onSubmit={handleSubmit} className="p-6 space-y-4">
          {/* Patient Name */}
          <div>
            <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-1.5">
              Patient Name *
            </label>
            <div className="relative">
              <User className="absolute left-3 top-3 h-4 w-4 text-slate-400" />
              <Input
                required
                value={formData.patientName}
                onChange={(e) => setFormData({ ...formData, patientName: e.target.value })}
                placeholder="e.g. Eleanor Vance"
                className="pl-9 bg-white dark:bg-slate-800 border-[#D2E7DC] dark:border-slate-700 text-slate-900 dark:text-slate-100 placeholder:text-slate-400 focus-visible:ring-[#2E7D5B] rounded-xl text-xs sm:text-sm h-10"
              />
            </div>
          </div>

          {/* Doctor & Department */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-1.5">
                Attending Doctor *
              </label>
              <div className="relative">
                <Stethoscope className="absolute left-3 top-3 h-4 w-4 text-slate-400 pointer-events-none" />
                <select
                  value={formData.doctor}
                  onChange={(e) => setFormData({ ...formData, doctor: e.target.value })}
                  className="w-full pl-9 pr-3 h-10 bg-white dark:bg-slate-800 border border-[#D2E7DC] dark:border-slate-700 text-slate-900 dark:text-slate-100 rounded-xl text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#2E7D5B]/30"
                >
                  <option value="Dr. Sarah Jenkins">Dr. Sarah Jenkins</option>
                  <option value="Dr. David Miller">Dr. David Miller</option>
                  <option value="Dr. Priya Nair">Dr. Priya Nair</option>
                  <option value="Dr. Ananya Sharma">Dr. Ananya Sharma</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-1.5">
                Department *
              </label>
              <select
                value={formData.department}
                onChange={(e) => setFormData({ ...formData, department: e.target.value })}
                className="w-full px-3 h-10 bg-white dark:bg-slate-800 border border-[#D2E7DC] dark:border-slate-700 text-slate-900 dark:text-slate-100 rounded-xl text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#2E7D5B]/30"
              >
                <option value="Cardiology">Cardiology</option>
                <option value="Orthopedics">Orthopedics</option>
                <option value="Neurology">Neurology</option>
                <option value="Pediatrics">Pediatrics</option>
                <option value="General Medicine">General Medicine</option>
              </select>
            </div>
          </div>

          {/* Date & Time Slot */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-1.5">
                Appointment Date *
              </label>
              <div className="relative">
                <Calendar className="absolute left-3 top-3 h-4 w-4 text-slate-400" />
                <Input
                  type="date"
                  required
                  value={formData.date}
                  onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                  className="pl-9 bg-white dark:bg-slate-800 border-[#D2E7DC] dark:border-slate-700 text-slate-900 dark:text-slate-100 focus-visible:ring-[#2E7D5B] rounded-xl text-xs sm:text-sm h-10"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-1.5">
                Time Slot *
              </label>
              <div className="relative">
                <Clock className="absolute left-3 top-3 h-4 w-4 text-slate-400 pointer-events-none" />
                <select
                  value={formData.time}
                  onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                  className="w-full pl-9 pr-3 h-10 bg-white dark:bg-slate-800 border border-[#D2E7DC] dark:border-slate-700 text-slate-900 dark:text-slate-100 rounded-xl text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#2E7D5B]/30"
                >
                  <option value="09:30 AM">09:30 AM</option>
                  <option value="10:30 AM">10:30 AM</option>
                  <option value="11:45 AM">11:45 AM</option>
                  <option value="02:15 PM">02:15 PM</option>
                  <option value="04:30 PM">04:30 PM</option>
                </select>
              </div>
            </div>
          </div>

          {/* Footer Actions */}
          <div className="pt-3 border-t border-[#D2E7DC] dark:border-slate-800 flex items-center justify-end gap-2">
            <Button
              type="button"
              variant="outline"
              onClick={onClose}
              className="border-[#D2E7DC] dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-200 rounded-xl text-xs font-semibold px-4 h-9"
            >
              Cancel
            </Button>
            <Button
              type="submit"
              disabled={isSubmitting}
              className="bg-[#2E7D5B] hover:bg-[#246348] dark:bg-emerald-600 dark:hover:bg-emerald-500 text-white rounded-xl text-xs font-bold px-5 h-9 shadow-xs"
            >
              {isSubmitting ? "Booking Slot..." : "Confirm Booking"}
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}
