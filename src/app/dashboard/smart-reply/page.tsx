import DashboardLayout from "@/components/layout/DashboardLayout";
import Topbar from "@/components/layout/Topbar";
import SmartReplyContent from "@/components/dashboard/SmartReplyContent";

export default function SmartReplyPage() {
  return (
    <DashboardLayout>
      <Topbar title="Smart Reply Generator" subtitle="AI-generated responses for every review" />
      <SmartReplyContent />
    </DashboardLayout>
  );
}
