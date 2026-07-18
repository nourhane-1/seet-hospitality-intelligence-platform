import DashboardLayout from "@/components/layout/DashboardLayout";
import Topbar from "@/components/layout/Topbar";
import PlatformAnalyticsContent from "@/components/dashboard/PlatformAnalyticsContent";

export default function PlatformAnalyticsPage() {
  return (
    <DashboardLayout>
      <Topbar title="Platform Analytics" subtitle="Review performance across all connected platforms" />
      <PlatformAnalyticsContent />
    </DashboardLayout>
  );
}
