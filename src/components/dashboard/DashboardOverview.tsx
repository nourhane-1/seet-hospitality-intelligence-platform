"use client";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  BarChart,
  Bar,
  Legend,
} from "recharts";
import {
  Star,
  MessageSquare,
  TrendingUp,
  Bell,
  Zap,
  Building2,
  BarChart3,
  AlertTriangle,
  CheckCircle2,
  Sparkles,
  ArrowRight,
  Clock,
  ThumbsUp,
} from "lucide-react";
import StatCard from "@/components/ui/StatCard";
import Card, { CardHeader, CardTitle } from "@/components/ui/Card";
import Badge from "@/components/ui/Badge";
import {
  overviewStats,
  sentimentTrend,
  recentReviews,
  alerts,
  aiInsights,
  platformBreakdown,
  weeklyReviewVolume,
  topIssues,
} from "@/lib/data";
import { cn } from "@/lib/utils";
import Link from "next/link";

const SENTIMENT_COLORS = {
  positive: "#16A34A",
  neutral: "#D69E2E",
  negative: "#DC2626",
};

function SentimentBadge({ sentiment }: { sentiment: string }) {
  const map = {
    positive: "success" as const,
    negative: "danger" as const,
    neutral: "warning" as const,
  };
  return (
    <Badge
      variant={map[sentiment as keyof typeof map] || "default"}
      dot
      size="xs"
    >
      {sentiment.charAt(0).toUpperCase() + sentiment.slice(1)}
    </Badge>
  );
}

function PlatformIcon({ platform }: { platform: string }) {
  const colors: Record<string, string> = {
    "Google Reviews": "#4285F4",
    TripAdvisor: "#00AA6C",
    "Booking.com": "#003580",
    Talabat: "#FF6600",
    Agoda: "#5392F9",
    Elmenus: "#E63946",
    Facebook: "#1877F2",
    Instagram: "#E1306C",
  };
  const letters: Record<string, string> = {
    "Google Reviews": "G",
    TripAdvisor: "T",
    "Booking.com": "B",
    Talabat: "Ta",
    Agoda: "A",
    Elmenus: "El",
    Facebook: "f",
    Instagram: "IG",
  };
  return (
    <div
      className="w-6 h-6 rounded-lg flex items-center justify-center text-white text-[9px] font-bold flex-shrink-0"
      style={{ backgroundColor: colors[platform] || "#9E8F83" }}
    >
      {letters[platform] || platform[0]}
    </div>
  );
}

function RatingStars({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5">
      {[1, 2, 3, 4, 5].map((s) => (
        <Star
          key={s}
          className={`w-3 h-3 ${
            s <= rating
              ? "text-[#D69E2E] fill-[#D69E2E]"
              : "text-[#ECE4DA] fill-[#ECE4DA]"
          }`}
        />
      ))}
    </div>
  );
}

export default function DashboardOverview() {
  return (
    <div className="p-6 space-y-6">
      {/* AI Insight Banner */}
      <div className="bg-[#F4E0A3]/30 border border-[#D69E2E]/25 rounded-2xl px-5 py-4 flex items-start gap-3">
        <div className="w-8 h-8 rounded-xl ai-gradient flex items-center justify-center flex-shrink-0">
          <Sparkles className="w-4 h-4 text-white" />
        </div>
        <div className="flex-1 min-w-0">
          <p className="text-sm font-semibold text-[#2D241C] mb-0.5">
            AI Morning Brief — 3 alerts need your attention
          </p>
          <p className="text-xs text-[#6F6258]">
            Cairo Kitchen Maadi received 7 negative reviews in the last 3 hours.
            Sofitel Sharm housekeeping score is predicted to drop within 5 days.
            Marriott Downtown response rate is at 34% (target: 70%).
          </p>
        </div>
        <Link
          href="/dashboard/alerts"
          className="flex items-center gap-1 text-xs font-semibold text-[#D97542] hover:text-[#C86433] flex-shrink-0"
        >
          View Alerts <ArrowRight className="w-3 h-3" />
        </Link>
      </div>

      {/* KPI Stats Row */}
      <div className="grid grid-cols-2 xl:grid-cols-4 gap-4">
        <StatCard
          title="Overall Rating"
          value="4.2 / 5.0"
          trend={+8}
          trendLabel="vs. last month"
          icon={<Star className="w-4 h-4 text-[#D97542]" />}
          iconBg="bg-[#D97542]/10"
        />
        <StatCard
          title="AI Sentiment Score"
          value="78%"
          subtitle="Positive sentiment index"
          trend={+5}
          trendLabel="vs. last month"
          icon={<ThumbsUp className="w-4 h-4 text-green-600" />}
          iconBg="bg-green-50"
        />
        <StatCard
          title="Total Reviews"
          value="47,832"
          subtitle="2,419 this month"
          trend={+12}
          trendLabel="vs. last month"
          icon={<MessageSquare className="w-4 h-4 text-blue-600" />}
          iconBg="bg-blue-50"
        />
        <StatCard
          title="Response Rate"
          value="68%"
          subtitle="Avg 2.4h response time"
          trend={+12}
          trendLabel="vs. last month"
          icon={<CheckCircle2 className="w-4 h-4 text-[#D97542]" />}
          iconBg="bg-[#D97542]/10"
        />
      </div>

      <div className="grid grid-cols-2 xl:grid-cols-4 gap-4">
        <StatCard
          title="Active Alerts"
          value={overviewStats.activeAlerts}
          subtitle={`${overviewStats.criticalAlerts} critical`}
          trend={-3}
          trendLabel="vs. last week"
          icon={<Bell className="w-4 h-4 text-red-600" />}
          iconBg="bg-red-50"
        />
        <StatCard
          title="Brands Monitored"
          value={overviewStats.brandsMonitored}
          icon={<Building2 className="w-4 h-4 text-purple-600" />}
          iconBg="bg-purple-50"
        />
        <StatCard
          title="Properties Live"
          value={overviewStats.propertiesMonitored}
          icon={<BarChart3 className="w-4 h-4 text-[#D97542]" />}
          iconBg="bg-[#D97542]/10"
        />
        <StatCard
          title="Pending Actions"
          value={overviewStats.pendingActions}
          subtitle="Require team response"
          icon={<Zap className="w-4 h-4 text-amber-600" />}
          iconBg="bg-amber-50"
        />
      </div>

      {/* Charts Row */}
      <div className="grid grid-cols-1 xl:grid-cols-3 gap-5">
        {/* Sentiment Trend */}
        <Card className="xl:col-span-2">
          <CardHeader>
            <CardTitle>Sentiment Trend — 12 Months</CardTitle>
            <div className="flex items-center gap-3">
              {["positive", "neutral", "negative"].map((s) => (
                <div key={s} className="flex items-center gap-1.5">
                  <div
                    className="w-2.5 h-2.5 rounded-full"
                    style={{
                      backgroundColor:
                        SENTIMENT_COLORS[s as keyof typeof SENTIMENT_COLORS],
                    }}
                  />
                  <span className="text-[10px] text-[#9E8F83] capitalize">
                    {s}
                  </span>
                </div>
              ))}
            </div>
          </CardHeader>
          <ResponsiveContainer width="100%" height={200}>
            <AreaChart
              data={sentimentTrend}
              margin={{ top: 0, right: 0, left: -20, bottom: 0 }}
            >
              <defs>
                <linearGradient id="positiveGrad" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#16A34A" stopOpacity={0.15} />
                  <stop offset="95%" stopColor="#16A34A" stopOpacity={0} />
                </linearGradient>
                <linearGradient id="negativeGrad" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#DC2626" stopOpacity={0.1} />
                  <stop offset="95%" stopColor="#DC2626" stopOpacity={0} />
                </linearGradient>
              </defs>
              <CartesianGrid
                strokeDasharray="3 3"
                stroke="#F3EDE6"
                vertical={false}
              />
              <XAxis
                dataKey="date"
                tick={{ fontSize: 10, fill: "#9E8F83" }}
                axisLine={false}
                tickLine={false}
              />
              <YAxis
                tick={{ fontSize: 10, fill: "#9E8F83" }}
                axisLine={false}
                tickLine={false}
                tickFormatter={(v) => `${v}%`}
              />
              <Tooltip
                contentStyle={{
                  background: "#fff",
                  border: "1px solid #ECE4DA",
                  borderRadius: "12px",
                  boxShadow: "0 4px 16px rgba(45,36,28,0.08)",
                  fontSize: 11,
                }}
              />
              <Area
                type="monotone"
                dataKey="positive"
                stroke="#16A34A"
                strokeWidth={2}
                fill="url(#positiveGrad)"
              />
              <Area
                type="monotone"
                dataKey="neutral"
                stroke="#D69E2E"
                strokeWidth={2}
                fill="none"
                strokeDasharray="4 2"
              />
              <Area
                type="monotone"
                dataKey="negative"
                stroke="#DC2626"
                strokeWidth={2}
                fill="url(#negativeGrad)"
              />
            </AreaChart>
          </ResponsiveContainer>
        </Card>

        {/* Platform Distribution */}
        <Card>
          <CardHeader>
            <CardTitle>Reviews by Platform</CardTitle>
          </CardHeader>
          <div className="space-y-2.5">
            {platformBreakdown.slice(0, 6).map((p) => {
              const colors: Record<string, string> = {
                "Google Reviews": "#4285F4",
                TripAdvisor: "#00AA6C",
                "Booking.com": "#003580",
                Agoda: "#5392F9",
                Talabat: "#FF6600",
                Elmenus: "#E63946",
              };
              const total = platformBreakdown.reduce(
                (sum, pl) => sum + pl.reviews,
                0
              );
              const pct = ((p.reviews / total) * 100).toFixed(0);
              return (
                <div key={p.platform}>
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-xs text-[#6F6258] truncate max-w-[120px]">
                      {p.platform}
                    </span>
                    <span className="text-xs font-semibold text-[#2D241C]">
                      {pct}%
                    </span>
                  </div>
                  <div className="h-1.5 bg-[#F3EDE6] rounded-full overflow-hidden">
                    <div
                      className="h-full rounded-full"
                      style={{
                        width: `${pct}%`,
                        backgroundColor: colors[p.platform] || "#D97542",
                      }}
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </Card>
      </div>

      {/* Middle Row */}
      <div className="grid grid-cols-1 xl:grid-cols-3 gap-5">
        {/* Recent Reviews */}
        <Card className="xl:col-span-2" padding="none">
          <CardHeader className="px-6 pt-5 pb-0 mb-0">
            <CardTitle>Recent Reviews</CardTitle>
            <Link
              href="/dashboard/reviews"
              className="text-xs text-[#D97542] hover:text-[#C86433] font-medium"
            >
              View all →
            </Link>
          </CardHeader>
          <div className="divide-y divide-[#F3EDE6]">
            {recentReviews.slice(0, 4).map((review) => (
              <div
                key={review.id}
                className="px-6 py-4 hover:bg-[#FFFDF9] transition-colors"
              >
                <div className="flex items-start gap-3">
                  <PlatformIcon platform={review.platform} />
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between mb-1">
                      <div className="flex items-center gap-2">
                        <RatingStars rating={review.rating} />
                        <SentimentBadge sentiment={review.sentiment} />
                        {review.isEscalated && (
                          <Badge variant="danger" size="xs" dot>
                            Escalated
                          </Badge>
                        )}
                      </div>
                      <span className="text-[10px] text-[#9E8F83] flex-shrink-0 ml-2">
                        {new Date(review.date).toLocaleDateString("en-US", {
                          month: "short",
                          day: "numeric",
                        })}
                      </span>
                    </div>
                    <p className="text-xs text-[#2D241C] line-clamp-2 mb-1.5">
                      {review.text}
                    </p>
                    <div className="flex items-center gap-2 flex-wrap">
                      <span className="text-[10px] text-[#9E8F83]">
                        {review.property}
                      </span>
                      <span className="text-[#ECE4DA]">·</span>
                      <span className="text-[10px] text-[#9E8F83]">
                        by {review.author}
                      </span>
                      {!review.isReplied && (
                        <Badge variant="warning" size="xs">
                          No reply
                        </Badge>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Card>

        {/* AI Insights */}
        <Card padding="none">
          <CardHeader className="px-5 pt-5 pb-0 mb-0">
            <div className="flex items-center gap-2">
              <div className="w-5 h-5 rounded-lg ai-gradient flex items-center justify-center">
                <Sparkles className="w-3 h-3 text-white" />
              </div>
              <CardTitle>AI Insights</CardTitle>
            </div>
            <Link
              href="/dashboard/predictive"
              className="text-xs text-[#D97542] font-medium"
            >
              All →
            </Link>
          </CardHeader>
          <div className="divide-y divide-[#F3EDE6]">
            {aiInsights.slice(0, 3).map((insight) => {
              const severityMap = {
                critical: "danger" as const,
                warning: "warning" as const,
                info: "info" as const,
                success: "success" as const,
              };
              return (
                <div key={insight.id} className="px-5 py-4">
                  <div className="flex items-start justify-between gap-2 mb-2">
                    <p className="text-xs font-semibold text-[#2D241C] leading-tight">
                      {insight.title}
                    </p>
                    <Badge
                      variant={severityMap[insight.severity as keyof typeof severityMap]}
                      size="xs"
                    >
                      {insight.confidence}%
                    </Badge>
                  </div>
                  <p className="text-[11px] text-[#6F6258] leading-relaxed mb-2 line-clamp-2">
                    {insight.description}
                  </p>
                  <button className="text-[11px] font-semibold text-[#D97542] hover:text-[#C86433]">
                    {insight.action} →
                  </button>
                </div>
              );
            })}
          </div>
        </Card>
      </div>

      {/* Bottom Row */}
      <div className="grid grid-cols-1 xl:grid-cols-3 gap-5">
        {/* Weekly Review Volume */}
        <Card className="xl:col-span-2">
          <CardHeader>
            <CardTitle>Weekly Review Volume vs. Response Rate</CardTitle>
          </CardHeader>
          <ResponsiveContainer width="100%" height={180}>
            <BarChart
              data={weeklyReviewVolume}
              margin={{ top: 0, right: 0, left: -20, bottom: 0 }}
              barGap={4}
            >
              <CartesianGrid
                strokeDasharray="3 3"
                stroke="#F3EDE6"
                vertical={false}
              />
              <XAxis
                dataKey="day"
                tick={{ fontSize: 10, fill: "#9E8F83" }}
                axisLine={false}
                tickLine={false}
              />
              <YAxis
                tick={{ fontSize: 10, fill: "#9E8F83" }}
                axisLine={false}
                tickLine={false}
              />
              <Tooltip
                contentStyle={{
                  background: "#fff",
                  border: "1px solid #ECE4DA",
                  borderRadius: "12px",
                  fontSize: 11,
                }}
              />
              <Bar
                dataKey="reviews"
                name="Reviews"
                fill="#D97542"
                radius={[4, 4, 0, 0]}
                fillOpacity={0.85}
              />
              <Bar
                dataKey="responses"
                name="Responses"
                fill="#D69E2E"
                radius={[4, 4, 0, 0]}
                fillOpacity={0.7}
              />
            </BarChart>
          </ResponsiveContainer>
        </Card>

        {/* Top Issues */}
        <Card>
          <CardHeader>
            <CardTitle>Top Issues This Month</CardTitle>
            <AlertTriangle className="w-4 h-4 text-[#9E8F83]" />
          </CardHeader>
          <div className="space-y-2.5">
            {topIssues.slice(0, 5).map((issue, i) => (
              <div
                key={issue.issue}
                className="flex items-center gap-2.5"
              >
                <span className="text-xs font-bold text-[#9E8F83] w-4 flex-shrink-0">
                  {i + 1}
                </span>
                <div className="flex-1 min-w-0">
                  <p className="text-xs text-[#2D241C] font-medium truncate">
                    {issue.issue}
                  </p>
                  <p className="text-[10px] text-[#9E8F83]">{issue.category}</p>
                </div>
                <div className="flex items-center gap-1">
                  <span
                    className={cn(
                      "text-[10px] font-semibold",
                      issue.trend > 0 ? "text-red-600" : "text-green-600"
                    )}
                  >
                    {issue.trend > 0 ? "+" : ""}
                    {issue.trend}%
                  </span>
                </div>
              </div>
            ))}
          </div>
        </Card>
      </div>

      {/* Alerts Preview */}
      <Card padding="none">
        <CardHeader className="px-6 pt-5 mb-0 pb-0">
          <div className="flex items-center gap-2">
            <Bell className="w-4 h-4 text-[#9E8F83]" />
            <CardTitle>Active Alerts</CardTitle>
            <Badge variant="danger" size="xs">
              {alerts.filter((a) => !a.isRead).length} unread
            </Badge>
          </div>
          <Link
            href="/dashboard/alerts"
            className="text-xs text-[#D97542] font-medium"
          >
            View all →
          </Link>
        </CardHeader>
        <div className="divide-y divide-[#F3EDE6]">
          {alerts.slice(0, 3).map((alert) => (
            <div
              key={alert.id}
              className={cn(
                "px-6 py-4 hover:bg-[#FFFDF9] transition-colors flex items-start gap-3",
                !alert.isRead && "bg-[#FCF8F3]"
              )}
            >
              <div
                className={cn(
                  "w-2 h-2 rounded-full mt-1.5 flex-shrink-0",
                  alert.type === "critical" && "bg-red-500",
                  alert.type === "warning" && "bg-amber-500",
                  alert.type === "info" && "bg-blue-500"
                )}
              />
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between gap-2">
                  <p className="text-xs font-semibold text-[#2D241C]">
                    {alert.title}
                  </p>
                  <div className="flex items-center gap-1.5 flex-shrink-0">
                    <Badge
                      variant={
                        alert.type === "critical"
                          ? "danger"
                          : alert.type === "warning"
                          ? "warning"
                          : "info"
                      }
                      size="xs"
                    >
                      {alert.type}
                    </Badge>
                    <span className="text-[10px] text-[#9E8F83]">
                      {alert.time}
                    </span>
                  </div>
                </div>
                <p className="text-[11px] text-[#6F6258] mt-0.5 line-clamp-1">
                  {alert.description}
                </p>
                <div className="flex items-center gap-2 mt-1">
                  <span className="text-[10px] text-[#9E8F83]">
                    {alert.property}
                  </span>
                  <span className="text-[10px] text-[#9E8F83]">·</span>
                  <span className="text-[10px] text-[#9E8F83] flex items-center gap-0.5">
                    <Sparkles className="w-2.5 h-2.5 text-[#D97542]" />
                    AI Confidence: {alert.confidence}%
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
}
