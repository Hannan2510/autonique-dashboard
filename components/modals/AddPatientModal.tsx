"use client";

import { useState } from "react";
import { X, UserPlus, CheckCircle2, User, Phone, Mail, MapPin, Stethoscope, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

interface AddPatientModalProps {
  isOpen: boolean;
  onClose: () => void;
  onPatientAdded?: (newPatient: any) => void;
}

export default function AddPatientModal({
  isOpen,
  onClose,
  onPatientAdded,
}: AddPatientModalProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    age: "",
    gender: "Female",
    phone: "",
    email: "",
    address: "",
    doctor: "Hannan",
    history: "",
  });

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      const generatedId = `PAT-${Math.floor(1000 + Math.random() * 9000)}`;
      const newPatientObj = {
        id: generatedId,
        name: formData.name || "New Patient",
        phone: formData.phone || "+91 98000 11223",
        email: formData.email || "patient@health.in",
        doctor: formData.doctor,
        lastVisit: "Today",
        nextAppointment: "Slot Pending",
        status: "Active" as const,
        avatarColor: "bg-emerald-100 text-[#2E7D5B] dark:bg-emerald-950 dark:text-emerald-300",
      };

      if (onPatientAdded) {
        onPatientAdded(newPatientObj);
      }

      setIsSubmitting(false);
      onClose();

      // Reset form
      setFormData({
        name: "",
        age: "",
        gender: "Female",
        phone: "",
        email: "",
        address: "",
        doctor: "Hannan",
        history: "",
      });
    }, 600);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/60 backdrop-blur-xs animate-in fade-in-50 duration-150">
      <div
        className="w-full max-w-xl bg-white dark:bg-slate-900 border border-[#D2E7DC] dark:border-slate-800 rounded-2xl shadow-2xl shadow-slate-950/20 overflow-hidden flex flex-col transition-colors duration-250 animate-in zoom-in-95 duration-150"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-[#D2E7DC] dark:border-slate-800 bg-[#F8FCFA] dark:bg-slate-900/90">
          <div className="flex items-center gap-2.5">
            <div className="h-9 w-9 rounded-xl bg-[#2E7D5B]/10 dark:bg-emerald-950 text-[#2E7D5B] dark:text-emerald-400 border border-[#2E7D5B]/20 dark:border-emerald-800 flex items-center justify-center font-bold shadow-2xs">
              <UserPlus className="h-4.5 w-4.5" />
            </div>
            <div>
              <h3 className="text-base font-bold text-slate-900 dark:text-slate-100 leading-none">
                Add New Patient Record
              </h3>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                Register new patient account into clinic database
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
        <form onSubmit={handleSubmit} className="p-6 space-y-4 max-h-[75vh] overflow-y-auto">
          {/* Patient Name & Age & Gender */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            <div className="sm:col-span-2">
              <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-1.5">
                Full Patient Name *
              </label>
              <div className="relative">
                <User className="absolute left-3 top-3 h-4 w-4 text-slate-400" />
                <Input
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="e.g. Radhika Sharma"
                  className="pl-9 bg-white dark:bg-slate-800 border-[#D2E7DC] dark:border-slate-700 text-slate-900 dark:text-slate-100 placeholder:text-slate-400 focus-visible:ring-[#2E7D5B] rounded-xl text-xs sm:text-sm h-10"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-1.5">
                Gender *
              </label>
              <select
                value={formData.gender}
                onChange={(e) => setFormData({ ...formData, gender: e.target.value })}
                className="w-full h-10 px-3 bg-white dark:bg-slate-800 border border-[#D2E7DC] dark:border-slate-700 text-slate-900 dark:text-slate-100 rounded-xl text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#2E7D5B]/30"
              >
                <option value="Female">Female</option>
                <option value="Male">Male</option>
                <option value="Other">Other</option>
              </select>
            </div>
          </div>

          {/* Phone & Email */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-1.5">
                Phone Number *
              </label>
              <div className="relative">
                <Phone className="absolute left-3 top-3 h-4 w-4 text-slate-400" />
                <Input
                  required
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  placeholder="+91 98765 43210"
                  className="pl-9 bg-white dark:bg-slate-800 border-[#D2E7DC] dark:border-slate-700 text-slate-900 dark:text-slate-100 placeholder:text-slate-400 focus-visible:ring-[#2E7D5B] rounded-xl text-xs sm:text-sm h-10"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-1.5">
                Email Address
              </label>
              <div className="relative">
                <Mail className="absolute left-3 top-3 h-4 w-4 text-slate-400" />
                <Input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="patient@gmail.com"
                  className="pl-9 bg-white dark:bg-slate-800 border-[#D2E7DC] dark:border-slate-700 text-slate-900 dark:text-slate-100 placeholder:text-slate-400 focus-visible:ring-[#2E7D5B] rounded-xl text-xs sm:text-sm h-10"
                />
              </div>
            </div>
          </div>

          {/* Assigned Doctor */}
          <div>
            <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-1.5">
              Assigned Physician *
            </label>
            <div className="relative">
              <Stethoscope className="absolute left-3 top-3 h-4 w-4 text-slate-400 pointer-events-none" />
              <select
                value={formData.doctor}
                onChange={(e) => setFormData({ ...formData, doctor: e.target.value })}
                className="w-full pl-9 pr-3 h-10 bg-white dark:bg-slate-800 border border-[#D2E7DC] dark:border-slate-700 text-slate-900 dark:text-slate-100 rounded-xl text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#2E7D5B]/30"
              >
                <option value="Hannan">Hannan (Cardiology)</option>
                <option value="Dr. David Miller">Dr. David Miller (Orthopedics)</option>
                <option value="Dr. Priya Nair">Dr. Priya Nair (Neurology)</option>
                <option value="Dr. Ananya Sharma">Dr. Ananya Sharma (Pediatrics)</option>
              </select>
            </div>
          </div>

          {/* Address */}
          <div>
            <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-1.5">
              Residential Address
            </label>
            <div className="relative">
              <MapPin className="absolute left-3 top-3 h-4 w-4 text-slate-400" />
              <Input
                value={formData.address}
                onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                placeholder="Suite / Street, City, Pincode"
                className="pl-9 bg-white dark:bg-slate-800 border-[#D2E7DC] dark:border-slate-700 text-slate-900 dark:text-slate-100 placeholder:text-slate-400 focus-visible:ring-[#2E7D5B] rounded-xl text-xs sm:text-sm h-10"
              />
            </div>
          </div>

          {/* Medical History / Notes */}
          <div>
            <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-1.5">
              Medical Allergies & Initial Notes
            </label>
            <textarea
              rows={2}
              value={formData.history}
              onChange={(e) => setFormData({ ...formData, history: e.target.value })}
              placeholder="e.g. Hypertension history, Penicillin allergy..."
              className="w-full p-3 bg-white dark:bg-slate-800 border border-[#D2E7DC] dark:border-slate-700 text-slate-900 dark:text-slate-100 placeholder:text-slate-400 rounded-xl text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#2E7D5B]/30"
            />
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
              {isSubmitting ? "Saving Record..." : "Register Patient"}
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}
