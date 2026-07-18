import DashboardLayout from "@/components/layout/DashboardLayout";
import Topbar from "@/components/layout/Topbar";
import BenchmarkContent from "@/components/dashboard/BenchmarkContent";

export default function BenchmarkPage() {
  return (
    <DashboardLayout>
      <Topbar title="Benchmark" subtitle="Property and brand performance comparison" />
      <BenchmarkContent />
    </DashboardLayout>
  );
}
