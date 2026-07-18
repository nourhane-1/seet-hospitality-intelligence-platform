import DashboardLayout from "@/components/layout/DashboardLayout";
import Topbar from "@/components/layout/Topbar";
import AIAssistantContent from "@/components/dashboard/AIAssistantContent";

export default function AIAssistantPage() {
  return (
    <DashboardLayout>
      <Topbar
        title="AI Assistant"
        subtitle="Ask SEET AI anything about your reputation data"
        showFilters={false}
      />
      <AIAssistantContent />
    </DashboardLayout>
  );
}
