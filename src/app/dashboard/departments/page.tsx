import DashboardLayout from "@/components/layout/DashboardLayout";
import Topbar from "@/components/layout/Topbar";
import DepartmentsContent from "@/components/dashboard/DepartmentsContent";

export default function DepartmentsPage() {
  return (
    <DashboardLayout>
      <Topbar title="Departments" subtitle="Sentiment and issue tracking by department" />
      <DepartmentsContent />
    </DashboardLayout>
  );
}
