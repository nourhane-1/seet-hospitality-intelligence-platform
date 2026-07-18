"use client";
import { useState } from "react";
import { Star, Filter, Download, Sparkles } from "lucide-react";
import Card from "@/components/ui/Card";
import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";
import { recentReviews, platformBreakdown, ratingDistribution } from "@/lib/data";
import { cn } from "@/lib/utils";

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5">
      {[1, 2, 3, 4, 5].map((s) => (
        <Star
          key={s}
          className={`w-3 h-3 ${s <= rating ? "text-[#D69E2E] fill-[#D69E2E]" : "text-[#ECE4DA] fill-[#ECE4DA]"}`}
        />
      ))}
    </div>
  );
}

const sentimentTabs = ["All Reviews", "Positive", "Neutral", "Negative", "Escalated", "No Reply"];
const platformFilters = ["All Platforms", "Google", "TripAdvisor", "Booking.com", "Talabat", "Agoda"];

export default function ReviewsContent() {
  const [activeTab, setActiveTab] = useState("All Reviews");
  const [activePlatform, setActivePlatform] = useState("All Platforms");

  const reviews = recentReviews;

  return (
    <div className="p-6 space-y-5">
      {/* Stats strip */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {[
          { label: "Total Reviews", value: "47,832", sub: "+2,419 this month" },
          { label: "Average Rating", value: "4.2 ★", sub: "+0.3 vs last month" },
          { label: "Response Rate", value: "68%", sub: "Avg 2.4h response time" },
          { label: "Unreplied Reviews", value: "312", sub: "Requires attention" },
        ].map((s) => (
          <div
            key={s.label}
            className="bg-white rounded-2xl border border-[#ECE4DA] card-shadow px-5 py-4"
          >
            <p className="text-[10px] font-semibold text-[#6F6258] uppercase tracking-wide mb-1">
              {s.label}
            </p>
            <p className="text-xl font-bold text-[#2D241C]">{s.value}</p>
            <p className="text-xs text-[#9E8F83] mt-0.5">{s.sub}</p>
          </div>
        ))}
      </div>

      {/* Rating Distribution */}
      <Card>
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-sm font-semibold text-[#2D241C]">Rating Distribution</h3>
          <p className="text-xs text-[#9E8F83]">All platforms combined</p>
        </div>
        <div className="space-y-2.5">
          {ratingDistribution.map((r) => (
            <div key={r.rating} className="flex items-center gap-3">
              <div className="flex items-center gap-0.5 w-16 flex-shrink-0">
                {[1, 2, 3, 4, 5].map((s) => (
                  <Star
                    key={s}
                    className={`w-2.5 h-2.5 ${s <= r.rating ? "text-[#D69E2E] fill-[#D69E2E]" : "text-[#ECE4DA] fill-[#ECE4DA]"}`}
                  />
                ))}
              </div>
              <div className="flex-1 h-2 bg-[#F3EDE6] rounded-full overflow-hidden">
                <div
                  className="h-full rounded-full"
                  style={{
                    width: `${r.pct}%`,
                    backgroundColor:
                      r.rating >= 4
                        ? "#16A34A"
                        : r.rating === 3
                        ? "#D69E2E"
                        : "#DC2626",
                  }}
                />
              </div>
              <span className="text-xs font-semibold text-[#2D241C] w-10 text-right flex-shrink-0">
                {r.pct}%
              </span>
              <span className="text-xs text-[#9E8F83] w-16 text-right flex-shrink-0">
                {r.count.toLocaleString()}
              </span>
            </div>
          ))}
        </div>
      </Card>

      {/* Filters & Tabs */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        {/* Sentiment Tabs */}
        <div className="flex bg-[#FCF8F3] rounded-xl p-1 gap-1 overflow-x-auto">
          {sentimentTabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={cn(
                "px-3 py-1.5 rounded-lg text-xs font-medium whitespace-nowrap transition-all",
                activeTab === tab
                  ? "bg-white text-[#2D241C] card-shadow"
                  : "text-[#9E8F83] hover:text-[#6F6258]"
              )}
            >
              {tab}
            </button>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <div className="flex bg-[#FCF8F3] rounded-xl p-1 gap-1">
            {platformFilters.slice(0, 4).map((p) => (
              <button
                key={p}
                onClick={() => setActivePlatform(p)}
                className={cn(
                  "px-3 py-1.5 rounded-lg text-xs font-medium whitespace-nowrap transition-all",
                  activePlatform === p
                    ? "bg-white text-[#2D241C] card-shadow"
                    : "text-[#9E8F83] hover:text-[#6F6258]"
                )}
              >
                {p}
              </button>
            ))}
          </div>
          <Button variant="secondary" size="sm" icon={<Download className="w-3.5 h-3.5" />}>
            Export
          </Button>
        </div>
      </div>

      {/* Reviews Table */}
      <Card padding="none">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-[#ECE4DA] bg-[#FCF8F3]">
                {["Platform", "Rating", "Sentiment", "Review", "Property", "Department", "Date", "Status", "Actions"].map(
                  (h) => (
                    <th
                      key={h}
                      className="text-left text-[10px] font-semibold text-[#6F6258] uppercase tracking-wide px-5 py-3 whitespace-nowrap first:pl-6 last:pr-6"
                    >
                      {h}
                    </th>
                  )
                )}
              </tr>
            </thead>
            <tbody>
              {reviews.map((review) => {
                const platformColors: Record<string, string> = {
                  "Google Reviews": "#4285F4",
                  TripAdvisor: "#00AA6C",
                  "Booking.com": "#003580",
                  Talabat: "#FF6600",
                  Agoda: "#5392F9",
                };
                return (
                  <tr
                    key={review.id}
                    className="border-b border-[#F3EDE6] hover:bg-[#FFFDF9] transition-colors"
                  >
                    <td className="px-5 py-4 pl-6">
                      <div className="flex items-center gap-2">
                        <div
                          className="w-6 h-6 rounded-lg flex items-center justify-center text-white text-[9px] font-bold flex-shrink-0"
                          style={{
                            backgroundColor:
                              platformColors[review.platform] || "#9E8F83",
                          }}
                        >
                          {review.platform[0]}
                        </div>
                        <span className="text-xs text-[#6F6258] hidden xl:block">
                          {review.platform}
                        </span>
                      </div>
                    </td>
                    <td className="px-5 py-4">
                      <StarRating rating={review.rating} />
                    </td>
                    <td className="px-5 py-4">
                      <Badge
                        variant={
                          review.sentiment === "positive"
                            ? "success"
                            : review.sentiment === "negative"
                            ? "danger"
                            : "warning"
                        }
                        dot
                        size="xs"
                      >
                        {review.sentiment}
                      </Badge>
                    </td>
                    <td className="px-5 py-4 max-w-[260px]">
                      <p className="text-xs text-[#2D241C] line-clamp-2">
                        {review.text}
                      </p>
                      {review.aiSummary && (
                        <div className="flex items-start gap-1 mt-1">
                          <Sparkles className="w-2.5 h-2.5 text-[#D97542] flex-shrink-0 mt-0.5" />
                          <p className="text-[10px] text-[#9E8F83] line-clamp-1">
                            {review.aiSummary}
                          </p>
                        </div>
                      )}
                    </td>
                    <td className="px-5 py-4">
                      <p className="text-xs text-[#2D241C] whitespace-nowrap">
                        {review.property.split(" — ")[0]}
                      </p>
                      <p className="text-[10px] text-[#9E8F83]">
                        {review.brand}
                      </p>
                    </td>
                    <td className="px-5 py-4">
                      <Badge variant="default" size="xs">
                        {review.department}
                      </Badge>
                    </td>
                    <td className="px-5 py-4 whitespace-nowrap">
                      <p className="text-xs text-[#6F6258]">
                        {new Date(review.date).toLocaleDateString("en-US", {
                          month: "short",
                          day: "numeric",
                        })}
                      </p>
                    </td>
                    <td className="px-5 py-4">
                      <div className="flex flex-col gap-1">
                        {review.isReplied ? (
                          <Badge variant="success" size="xs">Replied</Badge>
                        ) : (
                          <Badge variant="warning" size="xs">No Reply</Badge>
                        )}
                        {review.isEscalated && (
                          <Badge variant="danger" size="xs">Escalated</Badge>
                        )}
                      </div>
                    </td>
                    <td className="px-5 py-4 pr-6">
                      <div className="flex items-center gap-1">
                        <Button variant="ghost" size="xs">View</Button>
                        {!review.isReplied && (
                          <Button variant="outline" size="xs">Reply</Button>
                        )}
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        <div className="px-6 py-4 border-t border-[#ECE4DA] flex items-center justify-between">
          <p className="text-xs text-[#9E8F83]">
            Showing 1–6 of 47,832 reviews
          </p>
          <div className="flex items-center gap-1">
            {[1, 2, 3, "...", 100].map((page, i) => (
              <button
                key={i}
                className={cn(
                  "w-7 h-7 rounded-lg text-xs font-medium transition-colors",
                  page === 1
                    ? "bg-[#D97542] text-white"
                    : "text-[#6F6258] hover:bg-[#FCF8F3]"
                )}
              >
                {page}
              </button>
            ))}
          </div>
        </div>
      </Card>
    </div>
  );
}
