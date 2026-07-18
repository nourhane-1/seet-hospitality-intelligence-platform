import DashboardLayout from "@/components/layout/DashboardLayout";
import Topbar from "@/components/layout/Topbar";
import PredictiveContent from "@/components/dashboard/PredictiveContent";

export default function PredictivePage() {
  return (
    <DashboardLayout>
      <Topbar title="Predictive Analytics" subtitle="AI-powered reputation risk forecasting" />
      <PredictiveContent />
    </DashboardLayout>
  );
}
