import DashboardLayout from "@/components/layout/DashboardLayout";
import Topbar from "@/components/layout/Topbar";
import BrandsContent from "@/components/dashboard/BrandsContent";

export default function BrandsPage() {
  return (
    <DashboardLayout>
      <Topbar title="Brands" subtitle="6 brands monitored across 38 properties" />
      <BrandsContent />
    </DashboardLayout>
  );
}
