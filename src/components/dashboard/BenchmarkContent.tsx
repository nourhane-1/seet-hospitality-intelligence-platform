"use client";
import {
  RadarChart,
  Radar,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from "recharts";
import { benchmarkData } from "@/lib/data";
import Card from "@/components/ui/Card";
import Badge from "@/components/ui/Badge";
import { cn } from "@/lib/utils";

const radarData = [
  { metric: "Rating", "Four Seasons": 96, Hilton: 88, Sofitel: 84, Marriott: 82 },
  { metric: "Sentiment", "Four Seasons": 91, Hilton: 82, Sofitel: 78, Marriott: 76 },
  { metric: "Response Rate", "Four Seasons": 92, Hilton: 74, Sofitel: 58, Marriott: 34 },
  { metric: "Review Volume", "Four Seasons": 85, Hilton: 58, Sofitel: 62, Marriott: 42 },
  { metric: "Trend", "Four Seasons": 80, Hilton: 76, Sofitel: 60, Marriott: 62 },
];

const BRAND_COLORS = ["#D97542", "#D69E2E", "#16A34A", "#3B82F6"];

export default function BenchmarkContent() {
  const sorted = [...benchmarkData].sort((a, b) => b.rating - a.rating);

  return (
    <div className="p-6 space-y-5">
      {/* Leaderboard */}
      <Card padding="none">
        <div className="px-6 py-4 border-b border-[#ECE4DA]">
          <h3 className="text-sm font-semibold text-[#2D241C]">Property Performance Leaderboard</h3>
          <p className="text-xs text-[#9E8F83] mt-0.5">Ranked by overall rating · All platforms · Last 30 days</p>
        </div>
        <div className="divide-y divide-[#F3EDE6]">
          {sorted.map((p, i) => (
            <div key={p.property} className={cn("px-6 py-4 flex items-center gap-4 hover:bg-[#FFFDF9] transition-colors", i === 0 && "bg-amber-50/30")}>
              <div className={cn(
                "w-8 h-8 rounded-xl flex items-center justify-center text-sm font-bold flex-shrink-0",
                i === 0 ? "bg-amber-100 text-amber-700" :
                i === 1 ? "bg-gray-100 text-gray-600" :
                i === 2 ? "bg-orange-100 text-orange-700" :
                "bg-[#F3EDE6] text-[#9E8F83]"
              )}>
                {i === 0 ? "🥇" : i === 1 ? "🥈" : i === 2 ? "🥉" : i + 1}
              </div>

              <div className="flex-1 min-w-0">
                <p className="text-sm font-semibold text-[#2D241C]">{p.property}</p>
                <p className="text-xs text-[#9E8F83]">{p.brand}</p>
              </div>

              {/* Rating bar */}
              <div className="flex-1 hidden md:block">
                <div className="flex items-center gap-2">
                  <div className="flex-1 h-2 bg-[#F3EDE6] rounded-full overflow-hidden">
                    <div
                      className="h-full rounded-full"
                      style={{
                        width: `${(p.rating / 5) * 100}%`,
                        backgroundColor: p.rating >= 4.5 ? "#16A34A" : p.rating >= 4.0 ? "#D69E2E" : "#DC2626",
                      }}
                    />
                  </div>
                  <span className="text-sm font-bold text-[#2D241C] w-8 text-right">{p.rating}</span>
                </div>
              </div>

              <div className="flex items-center gap-3 flex-shrink-0">
                <div className="text-center hidden lg:block">
                  <p className="text-xs text-[#9E8F83]">Sentiment</p>
                  <Badge variant={p.sentiment >= 80 ? "success" : p.sentiment >= 65 ? "warning" : "danger"} size="xs">
                    {p.sentiment}%
                  </Badge>
                </div>
                <div className="text-center hidden lg:block">
                  <p className="text-xs text-[#9E8F83]">Response</p>
                  <Badge variant={p.responseRate >= 70 ? "success" : p.responseRate >= 40 ? "warning" : "danger"} size="xs">
                    {p.responseRate}%
                  </Badge>
                </div>
                <div className="text-center">
                  <p className="text-xs text-[#9E8F83]">Reviews</p>
                  <p className="text-xs font-semibold text-[#2D241C]">{p.reviewVolume.toLocaleString()}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Card>

      {/* Charts Row */}
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-5">
        {/* Radar Chart */}
        <Card>
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-sm font-semibold text-[#2D241C]">Multi-Dimension Comparison</h3>
            <p className="text-xs text-[#9E8F83]">Top 4 hotel properties</p>
          </div>
          <ResponsiveContainer width="100%" height={280}>
            <RadarChart data={radarData}>
              <PolarGrid stroke="#F3EDE6" />
              <PolarAngleAxis dataKey="metric" tick={{ fontSize: 10, fill: "#9E8F83" }} />
              <PolarRadiusAxis tick={{ fontSize: 9, fill: "#9E8F83" }} domain={[0, 100]} />
              {["Four Seasons", "Hilton", "Sofitel", "Marriott"].map((brand, i) => (
                <Radar
                  key={brand}
                  name={brand}
                  dataKey={brand}
                  stroke={BRAND_COLORS[i]}
                  fill={BRAND_COLORS[i]}
                  fillOpacity={0.08}
                  strokeWidth={2}
                />
              ))}
            </RadarChart>
          </ResponsiveContainer>
          <div className="flex flex-wrap gap-3 mt-2 justify-center">
            {["Four Seasons", "Hilton", "Sofitel", "Marriott"].map((brand, i) => (
              <div key={brand} className="flex items-center gap-1.5">
                <div className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: BRAND_COLORS[i] }} />
                <span className="text-[10px] text-[#9E8F83]">{brand}</span>
              </div>
            ))}
          </div>
        </Card>

        {/* Bar Comparison */}
        <Card>
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-sm font-semibold text-[#2D241C]">Response Rate Comparison</h3>
            <Badge variant="warning" size="xs">Target: 70%+</Badge>
          </div>
          <ResponsiveContainer width="100%" height={280}>
            <BarChart
              data={benchmarkData.map(p => ({
                name: p.property.split(" — ")[0].substring(0, 16),
                rate: p.responseRate,
                target: 70,
              }))}
              margin={{ top: 0, right: 0, left: -20, bottom: 60 }}
            >
              <CartesianGrid strokeDasharray="3 3" stroke="#F3EDE6" vertical={false} />
              <XAxis
                dataKey="name"
                tick={{ fontSize: 9, fill: "#9E8F83" }}
                axisLine={false}
                tickLine={false}
                angle={-35}
                textAnchor="end"
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
                  fontSize: 11,
                }}
              />
              <Bar
                dataKey="rate"
                name="Response Rate"
                radius={[6, 6, 0, 0]}
                fill="#D97542"
                fillOpacity={0.85}
              />
            </BarChart>
          </ResponsiveContainer>
        </Card>
      </div>

      {/* Key Insights */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {[
          {
            title: "Best Performer",
            value: "Four Seasons Nile Plaza",
            meta: "4.8 rating · 91% sentiment · 92% response rate",
            color: "text-green-600",
            bg: "bg-green-50",
          },
          {
            title: "Needs Most Improvement",
            value: "Cairo Kitchen — Maadi",
            meta: "3.7 rating · 61% sentiment · 22% response rate",
            color: "text-red-600",
            bg: "bg-red-50",
          },
          {
            title: "Biggest Gap to Close",
            value: "Response Rate — Marriott Downtown",
            meta: "34% vs 70% target — 3× below benchmark",
            color: "text-amber-700",
            bg: "bg-amber-50",
          },
        ].map((insight) => (
          <div key={insight.title} className={cn("rounded-2xl border border-[#ECE4DA] card-shadow p-5", insight.bg)}>
            <p className={cn("text-[10px] font-bold uppercase tracking-wide mb-1.5", insight.color)}>
              {insight.title}
            </p>
            <p className="text-sm font-bold text-[#2D241C] mb-1">{insight.value}</p>
            <p className="text-xs text-[#6F6258]">{insight.meta}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
