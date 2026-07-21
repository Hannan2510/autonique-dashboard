"use client";

import { useState } from "react";
import {
  User,
  Building2,
  Bell,
  ShieldCheck,
  CreditCard,
  Palette,
  Share2,
  Check,
  Save,
  Lock,
  Smartphone,
  Sparkles,
  Zap,
  Globe,
  Upload,
  CheckCircle2,
  FileText,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useTheme } from "@/components/theme-provider";

type SectionTab =
  | "profile"
  | "clinic"
  | "notifications"
  | "security"
  | "billing"
  | "appearance"
  | "integrations";

export default function SettingsPanel() {
  const { theme, setTheme } = useTheme();
  const [activeTab, setActiveTab] = useState<SectionTab>("profile");
  const [saveToast, setSaveToast] = useState(false);

  // Profile State
  const [profileData, setProfileData] = useState({
    fullName: "Hannan",
    licenseNo: "MCI-8841-2018",
    specialty: "Cardiology & General Medicine",
    email: "hannan@autonique.com",
    phone: "+91 98765 43210",
    bio: "Senior Consultant Cardiologist with 12+ years experience in clinical diagnostics & automated patient care.",
  });

  // Clinic State
  const [clinicData, setClinicData] = useState({
    clinicName: "AUTONIQUE Healthcare Suite - Main Branch",
    practiceType: "Multi-Doctor Specialty Clinic",
    operatingHours: "08:00 AM - 08:00 PM (Mon-Sat)",
    address: "Suite 402, Medical Enclave, MG Road, Bengaluru, KA 560001",
    gstin: "29AAAAA0000A1Z5",
    emergencyHelpline: "+91 800 123 4567",
    multiBranch: true,
  });

  // Notifications State
  const [notifications, setNotifications] = useState({
    whatsappReminders: true,
    emailReports: true,
    smsFollowups: true,
    emergencyAlerts: true,
    prepInstructions: true,
  });

  // Security State
  const [securityData, setSecurityData] = useState({
    twoFactor: true,
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
  });

  // Billing State
  const [billingData, setBillingData] = useState({
    autoRenew: true,
  });

  // Appearance State
  const [appearance, setAppearance] = useState({
    accentColor: "emerald",
    compactLayout: true,
  });

  // Integrations State
  const [integrations, setIntegrations] = useState({
    whatsapp: true,
    googleCalendar: true,
    diagnosticLab: true,
    razorpay: true,
    twilioSms: false,
  });

  const handleSave = () => {
    setSaveToast(true);
    setTimeout(() => setSaveToast(false), 3000);
  };

  const tabs: { id: SectionTab; label: string; icon: any }[] = [
    { id: "profile", label: "Profile", icon: User },
    { id: "clinic", label: "Clinic Information", icon: Building2 },
    { id: "notifications", label: "Notifications", icon: Bell },
    { id: "security", label: "Security", icon: ShieldCheck },
    { id: "billing", label: "Billing & Plans", icon: CreditCard },
    { id: "appearance", label: "Appearance", icon: Palette },
    { id: "integrations", label: "Integrations", icon: Share2 },
  ];

  return (
    <div className="space-y-6">
      {/* Toast Notice */}
      {saveToast && (
        <div className="fixed bottom-6 right-6 z-50 p-4 rounded-2xl bg-[#2E7D5B] dark:bg-emerald-600 text-white shadow-xl shadow-[#2E7D5B]/30 flex items-center gap-3 border border-emerald-400/30 animate-in fade-in slide-in-from-bottom-5 duration-200">
          <CheckCircle2 className="h-5 w-5 text-emerald-200 shrink-0" />
          <div>
            <div className="text-xs font-bold">Settings Saved</div>
            <div className="text-[11px] text-emerald-100">
              Your clinic configuration has been updated.
            </div>
          </div>
        </div>
      )}

      {/* Main Settings Layout (Left Nav + Right Content Cards) */}
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 items-start">
        {/* Navigation Sidebar Cards */}
        <div className="lg:col-span-1 bg-[#F8FCFA] dark:bg-slate-900 rounded-2xl border border-[#D2E7DC] dark:border-slate-800 p-3 shadow-2xs space-y-1 transition-colors duration-250">
          <div className="px-3 py-2 text-xs font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wider">
            Configuration
          </div>

          {tabs.map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`w-full flex items-center gap-3 px-3.5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 ${
                  isActive
                    ? "bg-[#2E7D5B] dark:bg-emerald-600 text-white shadow-sm shadow-[#2E7D5B]/20"
                    : "text-slate-600 dark:text-slate-400 hover:bg-[#EEF7F2] dark:hover:bg-slate-800/80 hover:text-[#2E7D5B] dark:hover:text-emerald-400"
                }`}
              >
                <Icon
                  className={`h-4 w-4 shrink-0 ${
                    isActive ? "text-white" : "text-slate-400 dark:text-slate-500"
                  }`}
                />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>

        {/* Right Tab Content Panels */}
        <div className="lg:col-span-3">
          {/* SECTION 1: PROFILE */}
          {activeTab === "profile" && (
            <div className="bg-[#F8FCFA] dark:bg-slate-900 rounded-2xl border border-[#D2E7DC] dark:border-slate-800 p-6 shadow-xs space-y-6 transition-colors duration-250">
              <div className="flex items-center justify-between border-b border-[#D2E7DC] dark:border-slate-800 pb-4">
                <div>
                  <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100 tracking-tight flex items-center gap-2">
                    <User className="h-5 w-5 text-[#2E7D5B] dark:text-emerald-400" />
                    <span>Doctor Profile</span>
                  </h3>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                    Manage your personal physician credentials and clinical bio
                  </p>
                </div>
                <Button
                  onClick={handleSave}
                  className="bg-[#2E7D5B] hover:bg-[#246348] dark:bg-emerald-600 dark:hover:bg-emerald-500 text-white shadow-xs rounded-xl text-xs font-semibold gap-1.5"
                >
                  <Save className="h-4 w-4" />
                  <span>Save Profile</span>
                </Button>
              </div>

              {/* Avatar Upload Box */}
              <div className="flex flex-col sm:flex-row items-center gap-4 p-4 rounded-xl bg-white dark:bg-slate-800 border border-[#D2E7DC] dark:border-slate-700">
                <div className="h-16 w-16 rounded-full bg-[#2E7D5B]/10 dark:bg-emerald-950 text-[#2E7D5B] dark:text-emerald-400 font-extrabold text-xl flex items-center justify-center border-2 border-[#2E7D5B]/20 dark:border-emerald-800 shrink-0">
                  H
                </div>
                <div className="flex-1 text-center sm:text-left">
                  <h4 className="text-sm font-bold text-slate-900 dark:text-slate-100">
                    Profile Avatar
                  </h4>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                    PNG or JPG up to 5MB. Displayed on patient e-prescriptions.
                  </p>
                </div>
                <Button
                  variant="outline"
                  className="border-[#D2E7DC] dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-200 hover:bg-[#F2F8F5] dark:hover:bg-slate-700 rounded-xl text-xs font-semibold gap-1.5"
                >
                  <Upload className="h-3.5 w-3.5" />
                  <span>Change Photo</span>
                </Button>
              </div>

              {/* Input Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-2">
                    Full Name & Designation
                  </label>
                  <Input
                    value={profileData.fullName}
                    onChange={(e) =>
                      setProfileData({ ...profileData, fullName: e.target.value })
                    }
                    className="bg-white dark:bg-slate-800 border-[#D2E7DC] dark:border-slate-700 text-slate-900 dark:text-slate-100 placeholder:text-slate-400 dark:placeholder:text-slate-500 focus-visible:ring-[#2E7D5B] dark:focus-visible:ring-emerald-500 rounded-xl text-xs sm:text-sm"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-2">
                    Medical Council Registration No.
                  </label>
                  <Input
                    value={profileData.licenseNo}
                    onChange={(e) =>
                      setProfileData({ ...profileData, licenseNo: e.target.value })
                    }
                    className="bg-white dark:bg-slate-800 border-[#D2E7DC] dark:border-slate-700 text-slate-900 dark:text-slate-100 placeholder:text-slate-400 dark:placeholder:text-slate-500 focus-visible:ring-[#2E7D5B] dark:focus-visible:ring-emerald-500 rounded-xl text-xs sm:text-sm"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-2">
                    Specialty & Department
                  </label>
                  <Input
                    value={profileData.specialty}
                    onChange={(e) =>
                      setProfileData({ ...profileData, specialty: e.target.value })
                    }
                    className="bg-white dark:bg-slate-800 border-[#D2E7DC] dark:border-slate-700 text-slate-900 dark:text-slate-100 placeholder:text-slate-400 dark:placeholder:text-slate-500 focus-visible:ring-[#2E7D5B] dark:focus-visible:ring-emerald-500 rounded-xl text-xs sm:text-sm"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-2">
                    Official Email Address
                  </label>
                  <Input
                    value={profileData.email}
                    onChange={(e) =>
                      setProfileData({ ...profileData, email: e.target.value })
                    }
                    className="bg-white dark:bg-slate-800 border-[#D2E7DC] dark:border-slate-700 text-slate-900 dark:text-slate-100 placeholder:text-slate-400 dark:placeholder:text-slate-500 focus-visible:ring-[#2E7D5B] dark:focus-visible:ring-emerald-500 rounded-xl text-xs sm:text-sm"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-2">
                  Clinical Bio & Summary
                </label>
                <textarea
                  rows={3}
                  value={profileData.bio}
                  onChange={(e) =>
                    setProfileData({ ...profileData, bio: e.target.value })
                  }
                  className="w-full p-3 bg-white dark:bg-slate-800 border border-[#D2E7DC] dark:border-slate-700 text-slate-900 dark:text-slate-100 placeholder:text-slate-400 dark:placeholder:text-slate-500 rounded-xl text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#2E7D5B]/30 dark:focus:ring-emerald-500/30"
                />
              </div>
            </div>
          )}

          {/* SECTION 2: CLINIC INFORMATION */}
          {activeTab === "clinic" && (
            <div className="bg-[#F8FCFA] dark:bg-slate-900 rounded-2xl border border-[#D2E7DC] dark:border-slate-800 p-6 shadow-xs space-y-6 transition-colors duration-250">
              <div className="flex items-center justify-between border-b border-[#D2E7DC] dark:border-slate-800 pb-4">
                <div>
                  <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100 tracking-tight flex items-center gap-2">
                    <Building2 className="h-5 w-5 text-[#2E7D5B] dark:text-emerald-400" />
                    <span>Clinic Information</span>
                  </h3>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                    Configure operational parameters, location details, and tax registration
                  </p>
                </div>
                <Button
                  onClick={handleSave}
                  className="bg-[#2E7D5B] hover:bg-[#246348] dark:bg-emerald-600 dark:hover:bg-emerald-500 text-white shadow-xs rounded-xl text-xs font-semibold gap-1.5"
                >
                  <Save className="h-4 w-4" />
                  <span>Save Clinic Details</span>
                </Button>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-2">
                    Clinic Name
                  </label>
                  <Input
                    value={clinicData.clinicName}
                    onChange={(e) =>
                      setClinicData({ ...clinicData, clinicName: e.target.value })
                    }
                    className="bg-white dark:bg-slate-800 border-[#D2E7DC] dark:border-slate-700 text-slate-900 dark:text-slate-100 focus-visible:ring-[#2E7D5B] dark:focus-visible:ring-emerald-500 rounded-xl text-xs sm:text-sm"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-2">
                    Practice Type
                  </label>
                  <select
                    value={clinicData.practiceType}
                    onChange={(e) =>
                      setClinicData({ ...clinicData, practiceType: e.target.value })
                    }
                    className="w-full h-10 px-3 bg-white dark:bg-slate-800 border border-[#D2E7DC] dark:border-slate-700 text-slate-900 dark:text-slate-100 rounded-xl text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#2E7D5B]/30"
                  >
                    <option value="Multi-Doctor Specialty Clinic">
                      Multi-Doctor Specialty Clinic
                    </option>
                    <option value="Independent Physician Practice">
                      Independent Physician Practice
                    </option>
                    <option value="Hospital & Diagnostic Center">
                      Hospital & Diagnostic Center
                    </option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-2">
                    Operating Hours
                  </label>
                  <Input
                    value={clinicData.operatingHours}
                    onChange={(e) =>
                      setClinicData({ ...clinicData, operatingHours: e.target.value })
                    }
                    className="bg-white dark:bg-slate-800 border-[#D2E7DC] dark:border-slate-700 text-slate-900 dark:text-slate-100 focus-visible:ring-[#2E7D5B] dark:focus-visible:ring-emerald-500 rounded-xl text-xs sm:text-sm"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-2">
                    GSTIN / Tax Registration
                  </label>
                  <Input
                    value={clinicData.gstin}
                    onChange={(e) =>
                      setClinicData({ ...clinicData, gstin: e.target.value })
                    }
                    className="bg-white dark:bg-slate-800 border-[#D2E7DC] dark:border-slate-700 text-slate-900 dark:text-slate-100 focus-visible:ring-[#2E7D5B] dark:focus-visible:ring-emerald-500 rounded-xl text-xs sm:text-sm"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-2">
                  Complete Address
                </label>
                <textarea
                  rows={2}
                  value={clinicData.address}
                  onChange={(e) =>
                    setClinicData({ ...clinicData, address: e.target.value })
                  }
                  className="w-full p-3 bg-white dark:bg-slate-800 border border-[#D2E7DC] dark:border-slate-700 text-slate-900 dark:text-slate-100 rounded-xl text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#2E7D5B]/30"
                />
              </div>

              {/* Multi-Branch Toggle Switch */}
              <div className="p-4 rounded-xl bg-white dark:bg-slate-800 border border-[#D2E7DC] dark:border-slate-700 flex items-center justify-between">
                <div>
                  <div className="text-xs font-bold text-slate-900 dark:text-slate-100">
                    Enable Multi-Branch Location Support
                  </div>
                  <div className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                    Allow patient records and appointments to sync across secondary clinic branches
                  </div>
                </div>
                <button
                  type="button"
                  onClick={() =>
                    setClinicData({
                      ...clinicData,
                      multiBranch: !clinicData.multiBranch,
                    })
                  }
                  className={`relative inline-flex h-6 w-11 shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out ${
                    clinicData.multiBranch ? "bg-[#2E7D5B]" : "bg-slate-300 dark:bg-slate-700"
                  }`}
                >
                  <span
                    className={`pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow-xs ring-0 transition duration-200 ease-in-out ${
                      clinicData.multiBranch ? "translate-x-5" : "translate-x-0"
                    }`}
                  />
                </button>
              </div>
            </div>
          )}

          {/* SECTION 3: NOTIFICATIONS */}
          {activeTab === "notifications" && (
            <div className="bg-[#F8FCFA] dark:bg-slate-900 rounded-2xl border border-[#D2E7DC] dark:border-slate-800 p-6 shadow-xs space-y-6 transition-colors duration-250">
              <div className="flex items-center justify-between border-b border-[#D2E7DC] dark:border-slate-800 pb-4">
                <div>
                  <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100 tracking-tight flex items-center gap-2">
                    <Bell className="h-5 w-5 text-[#2E7D5B] dark:text-emerald-400" />
                    <span>Notification Preferences</span>
                  </h3>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                    Manage automated patient reminders, WhatsApp alerts, and internal doctor notifications
                  </p>
                </div>
                <Button
                  onClick={handleSave}
                  className="bg-[#2E7D5B] hover:bg-[#246348] dark:bg-emerald-600 dark:hover:bg-emerald-500 text-white shadow-xs rounded-xl text-xs font-semibold gap-1.5"
                >
                  <Save className="h-4 w-4" />
                  <span>Save Preferences</span>
                </Button>
              </div>

              {/* Notification Toggles List */}
              <div className="space-y-3">
                {[
                  {
                    key: "whatsappReminders",
                    title: "Automated WhatsApp Visit Reminders",
                    desc: "Dispatches WhatsApp confirmation link 24 hours prior to appointment slot.",
                  },
                  {
                    key: "emailReports",
                    title: "Daily Clinical Financial Reports via Email",
                    desc: "Receive daily gross revenue, doctor payouts, and OPD visit summaries.",
                  },
                  {
                    key: "smsFollowups",
                    title: "SMS Pre-Consultation Guidelines",
                    desc: "Sends prep instructions to patients before specialized diagnostics.",
                  },
                  {
                    key: "prepInstructions",
                    title: "AI Receptionist Call Handover Alerts",
                    desc: "Notify receptionist on mobile when off-hours calls require manual review.",
                  },
                ].map((item) => {
                  const isChecked = (notifications as any)[item.key];
                  return (
                    <div
                      key={item.key}
                      className="p-4 rounded-xl bg-white dark:bg-slate-800 border border-[#D2E7DC] dark:border-slate-700 flex items-center justify-between gap-4"
                    >
                      <div>
                        <h4 className="text-xs sm:text-sm font-bold text-slate-900 dark:text-slate-100">
                          {item.title}
                        </h4>
                        <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                          {item.desc}
                        </p>
                      </div>

                      <button
                        type="button"
                        onClick={() =>
                          setNotifications({
                            ...notifications,
                            [item.key]: !isChecked,
                          })
                        }
                        className={`relative inline-flex h-6 w-11 shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out ${
                          isChecked ? "bg-[#2E7D5B]" : "bg-slate-300 dark:bg-slate-700"
                        }`}
                      >
                        <span
                          className={`pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow-xs ring-0 transition duration-200 ease-in-out ${
                            isChecked ? "translate-x-5" : "translate-x-0"
                          }`}
                        />
                      </button>
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {/* SECTION 4: SECURITY */}
          {activeTab === "security" && (
            <div className="bg-[#F8FCFA] dark:bg-slate-900 rounded-2xl border border-[#D2E7DC] dark:border-slate-800 p-6 shadow-xs space-y-6 transition-colors duration-250">
              <div className="flex items-center justify-between border-b border-[#D2E7DC] dark:border-slate-800 pb-4">
                <div>
                  <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100 tracking-tight flex items-center gap-2">
                    <ShieldCheck className="h-5 w-5 text-[#2E7D5B] dark:text-emerald-400" />
                    <span>Security & Access Controls</span>
                  </h3>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                    Manage password, 2FA multi-factor authentication, and HIPAA data encryption
                  </p>
                </div>
                <Button
                  onClick={handleSave}
                  className="bg-[#2E7D5B] hover:bg-[#246348] dark:bg-emerald-600 dark:hover:bg-emerald-500 text-white shadow-xs rounded-xl text-xs font-semibold gap-1.5"
                >
                  <Save className="h-4 w-4" />
                  <span>Update Password</span>
                </Button>
              </div>

              {/* 2FA Card */}
              <div className="p-4 rounded-xl bg-white dark:bg-slate-800 border border-[#D2E7DC] dark:border-slate-700 flex items-center justify-between">
                <div>
                  <div className="text-xs font-bold text-slate-900 dark:text-slate-100">
                    Two-Factor Authentication (2FA)
                  </div>
                  <div className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                    Require SMS or Authenticator OTP code on doctor login
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() =>
                    setSecurityData({
                      ...securityData,
                      twoFactor: !securityData.twoFactor,
                    })
                  }
                  className={`relative inline-flex h-6 w-11 shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out ${
                    securityData.twoFactor ? "bg-[#2E7D5B]" : "bg-slate-300 dark:bg-slate-700"
                  }`}
                >
                  <span
                    className={`pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow-xs ring-0 transition duration-200 ease-in-out ${
                      securityData.twoFactor ? "translate-x-5" : "translate-x-0"
                    }`}
                  />
                </button>
              </div>

              {/* Password Fields */}
              <div className="space-y-4 pt-2">
                <h4 className="text-xs font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider">
                  Change Password
                </h4>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div>
                    <label className="block text-xs font-medium text-slate-600 dark:text-slate-400 mb-1">
                      Current Password
                    </label>
                    <Input
                      type="password"
                      placeholder="••••••••••••"
                      className="bg-white dark:bg-slate-800 border-[#D2E7DC] dark:border-slate-700 text-slate-900 dark:text-slate-100 focus-visible:ring-[#2E7D5B] dark:focus-visible:ring-emerald-500 rounded-xl text-xs sm:text-sm"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-slate-600 dark:text-slate-400 mb-1">
                      New Password
                    </label>
                    <Input
                      type="password"
                      placeholder="••••••••••••"
                      className="bg-white dark:bg-slate-800 border-[#D2E7DC] dark:border-slate-700 text-slate-900 dark:text-slate-100 focus-visible:ring-[#2E7D5B] dark:focus-visible:ring-emerald-500 rounded-xl text-xs sm:text-sm"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-slate-600 dark:text-slate-400 mb-1">
                      Confirm New Password
                    </label>
                    <Input
                      type="password"
                      placeholder="••••••••••••"
                      className="bg-white dark:bg-slate-800 border-[#D2E7DC] dark:border-slate-700 text-slate-900 dark:text-slate-100 focus-visible:ring-[#2E7D5B] dark:focus-visible:ring-emerald-500 rounded-xl text-xs sm:text-sm"
                    />
                  </div>
                </div>
              </div>

              {/* Compliance Badge */}
              <div className="p-3.5 rounded-xl bg-emerald-50 dark:bg-emerald-950/80 border border-emerald-200 dark:border-emerald-800 flex items-center justify-between text-xs text-[#2E7D5B] dark:text-emerald-300 font-semibold">
                <div className="flex items-center gap-2">
                  <Lock className="h-4 w-4 text-[#2E7D5B] dark:text-emerald-400" />
                  <span>Session Encryption: AES-256 GCM • HIPAA Compliant Storage</span>
                </div>
                <span className="text-emerald-800 dark:text-emerald-400 underline cursor-pointer">View Audit Logs</span>
              </div>
            </div>
          )}

          {/* SECTION 5: BILLING */}
          {activeTab === "billing" && (
            <div className="bg-[#F8FCFA] dark:bg-slate-900 rounded-2xl border border-[#D2E7DC] dark:border-slate-800 p-6 shadow-xs space-y-6 transition-colors duration-250">
              <div className="flex items-center justify-between border-b border-[#D2E7DC] dark:border-slate-800 pb-4">
                <div>
                  <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100 tracking-tight flex items-center gap-2">
                    <CreditCard className="h-5 w-5 text-[#2E7D5B] dark:text-emerald-400" />
                    <span>Billing & Active Plan</span>
                  </h3>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                    Manage your AUTONIQUE subscription plan, invoices, and payment methods
                  </p>
                </div>
              </div>

              {/* Current Active Plan Card */}
              <div className="p-5 rounded-2xl bg-gradient-to-br from-[#2E7D5B] to-[#1F543D] dark:from-emerald-900 dark:to-slate-900 text-white shadow-md shadow-[#2E7D5B]/20 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div>
                  <span className="text-[10px] font-bold tracking-wider uppercase px-2.5 py-0.5 rounded-full bg-white/20 text-emerald-100 border border-white/30">
                    Active Subscription
                  </span>
                  <h4 className="text-2xl font-extrabold mt-2">Professional Plan</h4>
                  <p className="text-xs text-emerald-100 mt-0.5">
                    ₹6,999/month • Includes AI Receptionist, Unlimited Patients & 15 Staff Accounts
                  </p>
                </div>
                <Button className="bg-white text-[#2E7D5B] hover:bg-emerald-50 rounded-xl text-xs font-bold px-4 py-2 shrink-0">
                  Upgrade to Enterprise
                </Button>
              </div>

              {/* Payment Method & Renewal */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-4 rounded-xl bg-white dark:bg-slate-800 border border-[#D2E7DC] dark:border-slate-700">
                  <div className="text-xs font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wider">
                    Payment Method
                  </div>
                  <div className="flex items-center justify-between mt-3">
                    <div className="flex items-center gap-3">
                      <div className="h-8 w-12 rounded-md bg-slate-900 dark:bg-slate-700 text-white font-bold text-xs flex items-center justify-center">
                        VISA
                      </div>
                      <div>
                        <div className="text-xs font-bold text-slate-900 dark:text-slate-100">•••• •••• •••• 4242</div>
                        <div className="text-[10px] text-slate-500 dark:text-slate-400">Expires 09/28</div>
                      </div>
                    </div>
                    <button className="text-xs font-bold text-[#2E7D5B] dark:text-emerald-400 hover:underline">
                      Update
                    </button>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-white dark:bg-slate-800 border border-[#D2E7DC] dark:border-slate-700 flex items-center justify-between">
                  <div>
                    <div className="text-xs font-bold text-slate-900 dark:text-slate-100">Auto-Renew Subscription</div>
                    <div className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">Next billing date: Aug 01, 2026</div>
                  </div>
                  <button
                    type="button"
                    onClick={() =>
                      setBillingData({
                        autoRenew: !billingData.autoRenew,
                      })
                    }
                    className={`relative inline-flex h-6 w-11 shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out ${
                      billingData.autoRenew ? "bg-[#2E7D5B]" : "bg-slate-300 dark:bg-slate-700"
                    }`}
                  >
                    <span
                      className={`pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow-xs ring-0 transition duration-200 ease-in-out ${
                        billingData.autoRenew ? "translate-x-5" : "translate-x-0"
                      }`}
                    />
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* SECTION 6: APPEARANCE */}
          {activeTab === "appearance" && (
            <div className="bg-[#F8FCFA] dark:bg-slate-900 rounded-2xl border border-[#D2E7DC] dark:border-slate-800 p-6 shadow-xs space-y-6 transition-colors duration-250">
              <div className="flex items-center justify-between border-b border-[#D2E7DC] dark:border-slate-800 pb-4">
                <div>
                  <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100 tracking-tight flex items-center gap-2">
                    <Palette className="h-5 w-5 text-[#2E7D5B] dark:text-emerald-400" />
                    <span>Interface Theme & Styling</span>
                  </h3>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                    Customize colors, light/dark mode, layout density, and visual preferences
                  </p>
                </div>
                <Button
                  onClick={handleSave}
                  className="bg-[#2E7D5B] hover:bg-[#246348] dark:bg-emerald-600 dark:hover:bg-emerald-500 text-white shadow-xs rounded-xl text-xs font-semibold gap-1.5"
                >
                  <Save className="h-4 w-4" />
                  <span>Save Preferences</span>
                </Button>
              </div>

              {/* Theme Mode Selector */}
              <div>
                <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-2">
                  Theme Mode
                </label>
                <div className="grid grid-cols-2 gap-3 max-w-md">
                  <button
                    onClick={() => setTheme("light")}
                    className={`p-3 rounded-xl border text-xs font-bold flex flex-col items-center gap-2 transition-all ${
                      theme === "light"
                        ? "border-[#2E7D5B] bg-[#E7F3EC] dark:bg-emerald-950 text-[#2E7D5B] dark:text-emerald-300 shadow-xs"
                        : "border-[#D2E7DC] dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-200 hover:bg-[#F2F8F5] dark:hover:bg-slate-700"
                    }`}
                  >
                    <div className="h-5 w-5 rounded-full border border-[#2E7D5B] bg-white" />
                    <span>Light Mode</span>
                  </button>

                  <button
                    onClick={() => setTheme("dark")}
                    className={`p-3 rounded-xl border text-xs font-bold flex flex-col items-center gap-2 transition-all ${
                      theme === "dark"
                        ? "border-[#2E7D5B] dark:border-emerald-400 bg-[#E7F3EC] dark:bg-emerald-950/80 text-[#2E7D5B] dark:text-emerald-300 shadow-xs"
                        : "border-[#D2E7DC] dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-200 hover:bg-[#F2F8F5] dark:hover:bg-slate-700"
                    }`}
                  >
                    <div className="h-5 w-5 rounded-full border border-emerald-400 bg-slate-900" />
                    <span>Dark Mode</span>
                  </button>
                </div>
              </div>

              {/* Compact Density Switch */}
              <div className="p-4 rounded-xl bg-white dark:bg-slate-800 border border-[#D2E7DC] dark:border-slate-700 flex items-center justify-between">
                <div>
                  <h4 className="text-xs sm:text-sm font-bold text-slate-900 dark:text-slate-100">
                    High Information Density Layout
                  </h4>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                    Reduces vertical padding and card sizes for enterprise monitor displays
                  </p>
                </div>

                <button
                  type="button"
                  onClick={() =>
                    setAppearance({
                      ...appearance,
                      compactLayout: !appearance.compactLayout,
                    })
                  }
                  className={`relative inline-flex h-6 w-11 shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out ${
                    appearance.compactLayout ? "bg-[#2E7D5B]" : "bg-slate-300 dark:bg-slate-700"
                  }`}
                >
                  <span
                    className={`pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow-xs ring-0 transition duration-200 ease-in-out ${
                      appearance.compactLayout ? "translate-x-5" : "translate-x-0"
                    }`}
                  />
                </button>
              </div>
            </div>
          )}

          {/* SECTION 7: INTEGRATIONS */}
          {activeTab === "integrations" && (
            <div className="bg-[#F8FCFA] dark:bg-slate-900 rounded-2xl border border-[#D2E7DC] dark:border-slate-800 p-6 shadow-xs space-y-6 transition-colors duration-250">
              <div className="flex items-center justify-between border-b border-[#D2E7DC] dark:border-slate-800 pb-4">
                <div>
                  <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100 tracking-tight flex items-center gap-2">
                    <Share2 className="h-5 w-5 text-[#2E7D5B] dark:text-emerald-400" />
                    <span>Third-Party Integrations</span>
                  </h3>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                    Connect official WhatsApp API, payment gateways, calendars, and diagnostic lab APIs
                  </p>
                </div>
              </div>

              {/* Integration Cards Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  {
                    key: "whatsapp",
                    name: "WhatsApp Business API",
                    category: "Patient Communications",
                    desc: "Automated booking links, reminders, and e-prescription PDF dispatch.",
                    connected: integrations.whatsapp,
                  },
                  {
                    key: "googleCalendar",
                    name: "Google Calendar Sync",
                    category: "Doctor Scheduling",
                    desc: "Sync consultation slots real-time across personal doctor devices.",
                    connected: integrations.googleCalendar,
                  },
                  {
                    key: "diagnosticLab",
                    name: "Central Diagnostic Lab API",
                    category: "Pathology & EMR",
                    desc: "Directly import blood test & radiology reports into patient profiles.",
                    connected: integrations.diagnosticLab,
                  },
                  {
                    key: "razorpay",
                    name: "Razorpay Gateway",
                    category: "Billing & Online Payments",
                    desc: "Accept UPI, Credit Cards, and Netbanking for advance slot bookings.",
                    connected: integrations.razorpay,
                  },
                ].map((item) => (
                  <div
                    key={item.key}
                    className="p-5 rounded-2xl bg-white dark:bg-slate-800 border border-[#D2E7DC] dark:border-slate-700 flex flex-col justify-between space-y-3 shadow-2xs hover:shadow-xs transition-shadow"
                  >
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500">
                          {item.category}
                        </span>
                        <span
                          className={`text-[10px] font-bold px-2 py-0.5 rounded-full border ${
                            item.connected
                              ? "bg-emerald-50 dark:bg-emerald-950 text-[#2E7D5B] dark:text-emerald-300 border-emerald-300 dark:border-emerald-800"
                              : "bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 border-slate-200 dark:border-slate-700"
                          }`}
                        >
                          {item.connected ? "✓ Connected" : "Not Connected"}
                        </span>
                      </div>

                      <h4 className="text-sm font-bold text-slate-900 dark:text-slate-100">
                        {item.name}
                      </h4>
                      <p className="text-xs text-slate-500 dark:text-slate-400 mt-1 leading-relaxed">
                        {item.desc}
                      </p>
                    </div>

                    <Button
                      type="button"
                      onClick={() =>
                        setIntegrations({
                          ...integrations,
                          [item.key]: !(integrations as any)[item.key],
                        })
                      }
                      variant="outline"
                      className={`w-full rounded-xl text-xs font-bold h-9 ${
                        item.connected
                          ? "border-[#D2E7DC] dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-200 hover:bg-[#F2F8F5] dark:hover:bg-slate-700"
                          : "bg-[#2E7D5B] dark:bg-emerald-600 text-white hover:bg-[#246348] dark:hover:bg-emerald-500 border-transparent"
                      }`}
                    >
                      {item.connected ? "Configure Settings" : "Connect Integration"}
                    </Button>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
