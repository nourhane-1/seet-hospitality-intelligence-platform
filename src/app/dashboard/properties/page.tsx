import DashboardLayout from "@/components/layout/DashboardLayout";
import Topbar from "@/components/layout/Topbar";
import PropertiesContent from "@/components/dashboard/PropertiesContent";

export default function PropertiesPage() {
  return (
    <DashboardLayout>
      <Topbar title="Properties" subtitle="38 properties across 6 brands and 4 cities" />
      <PropertiesContent />
    </DashboardLayout>
  );
}
