"use client";

import { useState } from "react";
import { X, Send, MessageSquare, CheckCircle2, Sparkles, Smartphone, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

interface SendReminderModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function SendReminderModal({
  isOpen,
  onClose,
}: SendReminderModalProps) {
  const [isSending, setIsSending] = useState(false);
  const [sentNotice, setSentNotice] = useState(false);
  const [formData, setFormData] = useState({
    recipient: "All Scheduled Today (14 patients)",
    channel: "WhatsApp",
    template: "Pre-consultation Guidelines & Directions",
  });

  if (!isOpen) return null;

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSending(true);

    setTimeout(() => {
      setIsSending(false);
      setSentNotice(true);
      setTimeout(() => {
        setSentNotice(false);
        onClose();
      }, 1800);
    }, 600);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/60 backdrop-blur-xs animate-in fade-in-50 duration-150">
      <div
        className="w-full max-w-md bg-white dark:bg-slate-900 border border-[#D2E7DC] dark:border-slate-800 rounded-2xl shadow-2xl shadow-slate-950/20 overflow-hidden flex flex-col transition-colors duration-250 animate-in zoom-in-95 duration-150"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-[#D2E7DC] dark:border-slate-800 bg-[#F8FCFA] dark:bg-slate-900/90">
          <div className="flex items-center gap-2.5">
            <div className="h-9 w-9 rounded-xl bg-amber-100 dark:bg-amber-950 text-amber-700 dark:text-amber-400 border border-amber-200 dark:border-amber-800 flex items-center justify-center font-bold shadow-2xs">
              <Send className="h-4.5 w-4.5" />
            </div>
            <div>
              <h3 className="text-base font-bold text-slate-900 dark:text-slate-100 leading-none">
                Dispatch Patient Reminder
              </h3>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                Send automated WhatsApp & SMS alerts
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
        <form onSubmit={handleSend} className="p-6 space-y-4">
          {sentNotice ? (
            <div className="py-8 text-center space-y-3">
              <div className="h-12 w-12 rounded-full bg-emerald-100 text-[#2E7D5B] dark:bg-emerald-950 dark:text-emerald-300 flex items-center justify-center mx-auto">
                <CheckCircle2 className="h-7 w-7" />
              </div>
              <h4 className="text-base font-bold text-slate-900 dark:text-white">
                Reminders Sent Successfully!
              </h4>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                Dispatched {formData.channel} reminders to {formData.recipient}.
              </p>
            </div>
          ) : (
            <>
              <div>
                <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-1.5">
                  Select Recipient Group *
                </label>
                <select
                  value={formData.recipient}
                  onChange={(e) => setFormData({ ...formData, recipient: e.target.value })}
                  className="w-full h-10 px-3 bg-white dark:bg-slate-800 border border-[#D2E7DC] dark:border-slate-700 text-slate-900 dark:text-slate-100 rounded-xl text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-amber-500/30"
                >
                  <option value="All Scheduled Today (14 patients)">All Scheduled Today (14 patients)</option>
                  <option value="Eleanor Vance (PAT-9021)">Eleanor Vance (#PAT-9021)</option>
                  <option value="Aarav Patel (PAT-8812)">Aarav Patel (#PAT-8812)</option>
                  <option value="Sophia Chen (PAT-7432)">Sophia Chen (#PAT-7432)</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-1.5">
                  Message Channel *
                </label>
                <select
                  value={formData.channel}
                  onChange={(e) => setFormData({ ...formData, channel: e.target.value })}
                  className="w-full h-10 px-3 bg-white dark:bg-slate-800 border border-[#D2E7DC] dark:border-slate-700 text-slate-900 dark:text-slate-100 rounded-xl text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-amber-500/30"
                >
                  <option value="WhatsApp">WhatsApp Business API</option>
                  <option value="SMS">SMS Gateway</option>
                  <option value="Email">Email Notification</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-1.5">
                  Message Template
                </label>
                <select
                  value={formData.template}
                  onChange={(e) => setFormData({ ...formData, template: e.target.value })}
                  className="w-full h-10 px-3 bg-white dark:bg-slate-800 border border-[#D2E7DC] dark:border-slate-700 text-slate-900 dark:text-slate-100 rounded-xl text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-amber-500/30"
                >
                  <option value="Pre-consultation Guidelines & Directions">Pre-consultation Guidelines & Directions</option>
                  <option value="24-Hour Appointment Confirmation">24-Hour Appointment Confirmation</option>
                  <option value="Post-Consultation Prescription & Feedback">Post-Consultation Prescription & Feedback</option>
                </select>
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
                  disabled={isSending}
                  className="bg-amber-600 hover:bg-amber-700 text-white rounded-xl text-xs font-bold px-5 h-9 shadow-xs gap-1.5"
                >
                  <Send className="h-3.5 w-3.5" />
                  <span>{isSending ? "Dispatching..." : "Send Reminder Now"}</span>
                </Button>
              </div>
            </>
          )}
        </form>
      </div>
    </div>
  );
}
