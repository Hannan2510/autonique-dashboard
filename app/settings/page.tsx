import AppLayout from "@/components/layout/AppLayout";
import SettingsPanel from "@/components/settings/SettingsPanel";

export default function SettingsPage() {
  return (
    <AppLayout
      title="Settings"
      description="Manage your doctor profile, clinic configuration, notifications, billing, security, and integrations."
    >
      <SettingsPanel />
    </AppLayout>
  );
}