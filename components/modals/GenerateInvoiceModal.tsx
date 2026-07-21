"use client";

import { useState } from "react";
import { X, FileSpreadsheet, Download, Printer, CheckCircle2, IndianRupee } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

interface GenerateInvoiceModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function GenerateInvoiceModal({
  isOpen,
  onClose,
}: GenerateInvoiceModalProps) {
  const [isGenerating, setIsGenerating] = useState(false);
  const [successNotice, setSuccessNotice] = useState(false);
  const [formData, setFormData] = useState({
    patientName: "Eleanor Vance",
    consultationFee: "1500",
    labFee: "850",
    gstin: "29AAAAA0000A1Z5",
  });

  if (!isOpen) return null;

  const totalAmount =
    (parseFloat(formData.consultationFee) || 0) + (parseFloat(formData.labFee) || 0);

  const handleGenerate = (e: React.FormEvent) => {
    e.preventDefault();
    setIsGenerating(true);

    setTimeout(() => {
      setIsGenerating(false);
      setSuccessNotice(true);
      setTimeout(() => {
        setSuccessNotice(false);
        onClose();
      }, 1800);
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
            <div className="h-9 w-9 rounded-xl bg-purple-100 dark:bg-purple-950 text-purple-600 dark:text-purple-400 border border-purple-200 dark:border-purple-800 flex items-center justify-center font-bold shadow-2xs">
              <FileSpreadsheet className="h-4.5 w-4.5" />
            </div>
            <div>
              <h3 className="text-base font-bold text-slate-900 dark:text-slate-100 leading-none">
                Generate Clinical Invoice
              </h3>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                Calculate fees & export GST tax invoice
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
        <form onSubmit={handleGenerate} className="p-6 space-y-4">
          {successNotice ? (
            <div className="py-8 text-center space-y-3">
              <div className="h-12 w-12 rounded-full bg-emerald-100 text-[#2E7D5B] dark:bg-emerald-950 dark:text-emerald-300 flex items-center justify-center mx-auto">
                <CheckCircle2 className="h-7 w-7" />
              </div>
              <h4 className="text-base font-bold text-slate-900 dark:text-white">
                Invoice Generated & Dispatched!
              </h4>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                Invoice #INV-2026-881 exported to PDF and sent to patient.
              </p>
            </div>
          ) : (
            <>
              <div>
                <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-1.5">
                  Patient Name *
                </label>
                <Input
                  required
                  value={formData.patientName}
                  onChange={(e) => setFormData({ ...formData, patientName: e.target.value })}
                  className="bg-white dark:bg-slate-800 border-[#D2E7DC] dark:border-slate-700 text-slate-900 dark:text-slate-100 rounded-xl text-xs sm:text-sm h-10"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-1.5">
                    Consultation Fee (₹) *
                  </label>
                  <Input
                    type="number"
                    required
                    value={formData.consultationFee}
                    onChange={(e) => setFormData({ ...formData, consultationFee: e.target.value })}
                    className="bg-white dark:bg-slate-800 border-[#D2E7DC] dark:border-slate-700 text-slate-900 dark:text-slate-100 rounded-xl text-xs sm:text-sm h-10"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-1.5">
                    Diagnostics & Lab Fee (₹)
                  </label>
                  <Input
                    type="number"
                    value={formData.labFee}
                    onChange={(e) => setFormData({ ...formData, labFee: e.target.value })}
                    className="bg-white dark:bg-slate-800 border-[#D2E7DC] dark:border-slate-700 text-slate-900 dark:text-slate-100 rounded-xl text-xs sm:text-sm h-10"
                  />
                </div>
              </div>

              {/* Total Summary Banner */}
              <div className="p-3.5 rounded-xl bg-purple-50 dark:bg-purple-950/50 border border-purple-200 dark:border-purple-800/80 flex items-center justify-between">
                <span className="text-xs font-bold text-purple-950 dark:text-purple-300">
                  Total Billed Amount (incl. GST)
                </span>
                <span className="text-xl font-black text-purple-700 dark:text-purple-300 flex items-center gap-0.5">
                  <IndianRupee className="h-4 w-4" />
                  <span>{totalAmount}</span>
                </span>
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
                  disabled={isGenerating}
                  className="bg-purple-600 hover:bg-purple-700 text-white rounded-xl text-xs font-bold px-5 h-9 shadow-xs gap-1.5"
                >
                  <Printer className="h-3.5 w-3.5" />
                  <span>{isGenerating ? "Generating Invoice..." : "Export & Print"}</span>
                </Button>
              </div>
            </>
          )}
        </form>
      </div>
    </div>
  );
}
