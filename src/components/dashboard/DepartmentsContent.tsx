"use client";
import { RadarChart, Radar, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer } from "recharts";
import { departments, topNegativeTopics, topPositiveTopics } from "@/lib/data";
import Card from "@/components/ui/Card";
import Badge from "@/components/ui/Badge";
import { cn } from "@/lib/utils";

const radarData = departments.map(d => ({
  dept: d.name.split(" — ")[0],
  sentiment: d.sentiment,
}));

export default function DepartmentsContent() {
  return (
    <div className="p-6 space-y-5">
      {/* Department Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
        {departments.map((dept) => (
          <div
            key={dept.id}
            className={cn(
              "bg-white rounded-2xl border card-shadow hover:card-shadow-hover transition-all p-5",
              dept.trend < -5 ? "border-l-4 border-l-red-400 border-[#ECE4DA]" :
              dept.trend > 5 ? "border-l-4 border-l-green-400 border-[#ECE4DA]" :
              "border-[#ECE4DA]"
            )}
          >
            <div className="flex items-start justify-between mb-4">
              <div>
                <p className="text-sm font-bold text-[#2D241C]">{dept.name}</p>
                <div className="flex items-center gap-2 mt-1">
                  <Badge variant={dept.type === "hotel" ? "info" : dept.type === "restaurant" ? "primary" : "default"} size="xs">
                    {dept.type === "both" ? "Hotel & Restaurant" : dept.type.charAt(0).toUpperCase() + dept.type.slice(1)}
                  </Badge>
                  <span className="text-[10px] text-[#9E8F83]">{dept.mentions.toLocaleString()} mentions</span>
                </div>
              </div>
              <div className={cn("text-xs font-bold", dept.trend >= 0 ? "text-green-600" : "text-red-600")}>
                {dept.trend >= 0 ? "+" : ""}{dept.trend}%
              </div>
            </div>

            {/* Sentiment Score */}
            <div className="mb-4">
              <div className="flex justify-between text-[10px] mb-1.5">
                <span className="text-[#6F6258]">AI Sentiment Score</span>
                <span className={cn("font-bold", dept.sentiment >= 80 ? "text-green-600" : dept.sentiment >= 65 ? "text-amber-600" : "text-red-600")}>
                  {dept.sentiment}%
                </span>
              </div>
              <div className="h-2 bg-[#F3EDE6] rounded-full overflow-hidden">
                <div
                  className="h-full rounded-full transition-all"
                  style={{
                    width: `${dept.sentiment}%`,
                    backgroundColor: dept.sentiment >= 80 ? "#16A34A" : dept.sentiment >= 65 ? "#D69E2E" : "#DC2626",
                  }}
                />
              </div>
            </div>

            {/* Top Issues */}
            {dept.topIssues.length > 0 && (
              <div>
                <p className="text-[10px] font-semibold text-[#9E8F83] uppercase tracking-wide mb-1.5">Top Issues</p>
                <div className="flex flex-wrap gap-1">
                  {dept.topIssues.map((issue) => (
                    <span key={issue} className="text-[10px] bg-red-50 text-red-600 px-2 py-0.5 rounded-full">
                      {issue}
                    </span>
                  ))}
                </div>
              </div>
            )}
            {dept.topIssues.length === 0 && (
              <div className="flex items-center gap-1.5 text-xs text-green-600">
                <span className="w-1.5 h-1.5 rounded-full bg-green-500" />
                No significant issues detected
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-2 gap-5">
        {/* Radar Chart */}
        <Card>
          <h3 className="text-sm font-semibold text-[#2D241C] mb-4">Department Sentiment Overview</h3>
          <ResponsiveContainer width="100%" height={280}>
            <RadarChart data={radarData}>
              <PolarGrid stroke="#F3EDE6" />
              <PolarAngleAxis dataKey="dept" tick={{ fontSize: 9, fill: "#9E8F83" }} />
              <PolarRadiusAxis tick={{ fontSize: 9, fill: "#9E8F83" }} domain={[0, 100]} />
              <Radar dataKey="sentiment" stroke="#D97542" fill="#D97542" fillOpacity={0.15} strokeWidth={2} />
            </RadarChart>
          </ResponsiveContainer>
        </Card>

        {/* Top Topics */}
        <div className="space-y-4">
          <Card>
            <h3 className="text-sm font-semibold text-[#2D241C] mb-3">Top Positive Topics</h3>
            <div className="space-y-2">
              {topPositiveTopics.slice(0, 5).map((t) => (
                <div key={t.topic} className="flex items-center gap-3">
                  <span className="text-xs text-[#2D241C] w-32 flex-shrink-0">{t.topic}</span>
                  <div className="flex-1 h-1.5 bg-[#F3EDE6] rounded-full overflow-hidden">
                    <div className="h-full bg-green-500 rounded-full" style={{ width: `${t.pct}%` }} />
                  </div>
                  <span className="text-xs font-semibold text-green-600 w-8 text-right">{t.pct}%</span>
                </div>
              ))}
            </div>
          </Card>
          <Card>
            <h3 className="text-sm font-semibold text-[#2D241C] mb-3">Top Negative Topics</h3>
            <div className="space-y-2">
              {topNegativeTopics.slice(0, 5).map((t) => (
                <div key={t.topic} className="flex items-center gap-3">
                  <span className="text-xs text-[#2D241C] w-32 flex-shrink-0">{t.topic}</span>
                  <div className="flex-1 h-1.5 bg-[#F3EDE6] rounded-full overflow-hidden">
                    <div className="h-full bg-red-500 rounded-full" style={{ width: `${t.pct}%` }} />
                  </div>
                  <span className="text-xs font-semibold text-red-600 w-8 text-right">{t.pct}%</span>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}
