import DashboardLayout from "@/components/layout/DashboardLayout";
import Topbar from "@/components/layout/Topbar";
import DashboardOverview from "@/components/dashboard/DashboardOverview";

export default function DashboardPage() {
  return (
    <DashboardLayout>
      <Topbar
        title="Good morning, Sara"
        subtitle="Here's what's happening across your 38 properties today"
      />
      <DashboardOverview />
    </DashboardLayout>
  );
}
