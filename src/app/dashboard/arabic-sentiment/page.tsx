import DashboardLayout from "@/components/layout/DashboardLayout";
import Topbar from "@/components/layout/Topbar";
import ArabicSentimentContent from "@/components/dashboard/ArabicSentimentContent";

export default function ArabicSentimentPage() {
  return (
    <DashboardLayout>
      <Topbar title="Arabic Sentiment Analysis" subtitle="NLP trained on Egyptian Arabic and MENA dialects" />
      <ArabicSentimentContent />
    </DashboardLayout>
  );
}
