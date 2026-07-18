import DashboardLayout from "@/components/layout/DashboardLayout";
import Topbar from "@/components/layout/Topbar";
import AlertsContent from "@/components/dashboard/AlertsContent";

export default function AlertsPage() {
  return (
    <DashboardLayout>
      <Topbar
        title="Alerts"
        subtitle="14 active alerts across your portfolio — 3 critical"
      />
      <AlertsContent />
    </DashboardLayout>
  );
}
