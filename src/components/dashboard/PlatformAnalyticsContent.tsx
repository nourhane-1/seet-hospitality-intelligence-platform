"use client";
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
  PieChart, Pie, Cell, Legend,
} from "recharts";
import { platformBreakdown } from "@/lib/data";
import Card from "@/components/ui/Card";
import Badge from "@/components/ui/Badge";
import { Star, TrendingUp, TrendingDown } from "lucide-react";
import { cn } from "@/lib/utils";

const PLATFORM_COLORS: Record<string, string> = {
  "Google Reviews": "#4285F4",
  TripAdvisor: "#00AA6C",
  "Booking.com": "#003580",
  Agoda: "#5392F9",
  Talabat: "#FF6600",
  Elmenus: "#E63946",
  Facebook: "#1877F2",
  Instagram: "#E1306C",
};

const COLORS = ["#4285F4", "#00AA6C", "#003580", "#5392F9", "#FF6600", "#E63946", "#1877F2", "#E1306C"];

const pieData = platformBreakdown.map((p) => ({
  name: p.platform,
  value: p.reviews,
}));

export default function PlatformAnalyticsContent() {
  return (
    <div className="p-6 space-y-5">
      {/* Platform Cards */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
        {platformBreakdown.map((p) => (
          <div
            key={p.platform}
            className="bg-white rounded-2xl border border-[#ECE4DA] card-shadow p-4 hover:card-shadow-hover transition-all"
          >
            <div className="flex items-center gap-2 mb-3">
              <div
                className="w-7 h-7 rounded-lg flex items-center justify-center text-white text-[9px] font-bold flex-shrink-0"
                style={{ backgroundColor: PLATFORM_COLORS[p.platform] || "#9E8F83" }}
              >
                {p.platform[0]}
              </div>
              <div className="min-w-0">
                <p className="text-[10px] font-semibold text-[#2D241C] truncate">{p.platform}</p>
              </div>
            </div>
            <div className="space-y-1">
              <div className="flex items-center gap-1">
                <Star className="w-3 h-3 text-[#D69E2E] fill-[#D69E2E]" />
                <span className="text-sm font-bold text-[#2D241C]">{p.rating}</span>
              </div>
              <p className="text-xs text-[#9E8F83]">{p.reviews.toLocaleString()} reviews</p>
              <div className={cn("flex items-center gap-1 text-[10px] font-semibold", p.change >= 0 ? "text-green-600" : "text-red-600")}>
                {p.change >= 0 ? <TrendingUp className="w-3 h-3" /> : <TrendingDown className="w-3 h-3" />}
                {Math.abs(p.change)}% vs. last month
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-2 gap-5">
        {/* Bar Chart */}
        <Card>
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-sm font-semibold text-[#2D241C]">Reviews by Platform</h3>
            <p className="text-xs text-[#9E8F83]">Last 30 days</p>
          </div>
          <ResponsiveContainer width="100%" height={260}>
            <BarChart
              data={platformBreakdown}
              margin={{ top: 0, right: 0, left: -20, bottom: 40 }}
            >
              <CartesianGrid strokeDasharray="3 3" stroke="#F3EDE6" vertical={false} />
              <XAxis
                dataKey="platform"
                tick={{ fontSize: 9, fill: "#9E8F83" }}
                axisLine={false}
                tickLine={false}
                angle={-30}
                textAnchor="end"
                interval={0}
              />
              <YAxis tick={{ fontSize: 10, fill: "#9E8F83" }} axisLine={false} tickLine={false} />
              <Tooltip
                contentStyle={{ background: "#fff", border: "1px solid #ECE4DA", borderRadius: "12px", fontSize: 11 }}
              />
              <Bar
                dataKey="reviews"
                name="Reviews"
                radius={[6, 6, 0, 0]}
              >
                {platformBreakdown.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={PLATFORM_COLORS[entry.platform] || "#D97542"} fillOpacity={0.85} />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </Card>

        {/* Pie Chart */}
        <Card>
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-sm font-semibold text-[#2D241C]">Review Distribution</h3>
          </div>
          <ResponsiveContainer width="100%" height={220}>
            <PieChart>
              <Pie
                data={pieData}
                cx="50%"
                cy="50%"
                innerRadius={55}
                outerRadius={90}
                paddingAngle={3}
                dataKey="value"
              >
                {pieData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={PLATFORM_COLORS[entry.name] || COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip contentStyle={{ background: "#fff", border: "1px solid #ECE4DA", borderRadius: "12px", fontSize: 11 }} />
            </PieChart>
          </ResponsiveContainer>
          <div className="grid grid-cols-2 gap-2 mt-2">
            {platformBreakdown.map((p) => (
              <div key={p.platform} className="flex items-center gap-1.5">
                <div className="w-2 h-2 rounded-full flex-shrink-0" style={{ backgroundColor: PLATFORM_COLORS[p.platform] || "#9E8F83" }} />
                <span className="text-[10px] text-[#9E8F83] truncate">{p.platform}</span>
              </div>
            ))}
          </div>
        </Card>
      </div>

      {/* Platform Table */}
      <Card padding="none">
        <div className="px-6 py-4 border-b border-[#ECE4DA]">
          <h3 className="text-sm font-semibold text-[#2D241C]">Platform Performance Details</h3>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-[#ECE4DA] bg-[#FCF8F3]">
                {["Platform", "Total Reviews", "Avg Rating", "Sentiment", "MoM Change", "Status"].map(h => (
                  <th key={h} className="text-left text-[10px] font-semibold text-[#6F6258] uppercase tracking-wide px-5 py-3 first:pl-6 last:pr-6">
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {platformBreakdown.map((p, i) => (
                <tr key={p.platform} className={cn("border-b border-[#F3EDE6] hover:bg-[#FFFDF9]", i % 2 === 0 ? "" : "bg-[#FCF8F3]/30")}>
                  <td className="px-5 py-3.5 pl-6">
                    <div className="flex items-center gap-2">
                      <div className="w-6 h-6 rounded-lg flex items-center justify-center text-white text-[9px] font-bold flex-shrink-0" style={{ backgroundColor: PLATFORM_COLORS[p.platform] || "#9E8F83" }}>
                        {p.platform[0]}
                      </div>
                      <span className="text-sm font-semibold text-[#2D241C]">{p.platform}</span>
                    </div>
                  </td>
                  <td className="px-5 py-3.5 text-sm text-[#2D241C]">{p.reviews.toLocaleString()}</td>
                  <td className="px-5 py-3.5">
                    <div className="flex items-center gap-1">
                      <Star className="w-3 h-3 text-[#D69E2E] fill-[#D69E2E]" />
                      <span className="text-sm font-semibold text-[#2D241C]">{p.rating}</span>
                    </div>
                  </td>
                  <td className="px-5 py-3.5">
                    <Badge variant={p.sentiment >= 80 ? "success" : p.sentiment >= 65 ? "warning" : "danger"} size="xs">{p.sentiment}%</Badge>
                  </td>
                  <td className="px-5 py-3.5">
                    <span className={cn("text-xs font-semibold", p.change >= 0 ? "text-green-600" : "text-red-600")}>
                      {p.change >= 0 ? "+" : ""}{p.change}%
                    </span>
                  </td>
                  <td className="px-5 py-3.5 pr-6">
                    <Badge variant={p.change > 0 ? "success" : p.change < -2 ? "danger" : "warning"} dot size="xs">
                      {p.change > 0 ? "Improving" : p.change < -2 ? "Declining" : "Stable"}
                    </Badge>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>
    </div>
  );
}
