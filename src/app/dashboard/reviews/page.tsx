import DashboardLayout from "@/components/layout/DashboardLayout";
import Topbar from "@/components/layout/Topbar";
import ReviewsContent from "@/components/dashboard/ReviewsContent";

export default function ReviewsPage() {
  return (
    <DashboardLayout>
      <Topbar
        title="Reviews"
        subtitle="47,832 total reviews across all properties and platforms"
      />
      <ReviewsContent />
    </DashboardLayout>
  );
}
