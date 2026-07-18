"use client";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  ReferenceLine,
} from "recharts";
import { Sparkles, AlertTriangle, TrendingDown, TrendingUp, Info } from "lucide-react";
import Card from "@/components/ui/Card";
import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";
import { aiInsights } from "@/lib/data";
import { cn } from "@/lib/utils";

const forecastData = [
  { month: "Oct", actual: 4.2, forecast: null },
  { month: "Nov", actual: 4.2, forecast: null },
  { month: "Dec", actual: 4.1, forecast: null },
  { month: "Jan", actual: null, forecast: 4.0 },
  { month: "Feb", actual: null, forecast: 3.9 },
  { month: "Mar", actual: null, forecast: 3.8 },
  { month: "Apr", actual: null, forecast: 4.0 },
];

const forecastDataPositive = [
  { month: "Oct", actual: 4.8, forecast: null },
  { month: "Nov", actual: 4.8, forecast: null },
  { month: "Dec", actual: 4.9, forecast: null },
  { month: "Jan", actual: null, forecast: 4.9 },
  { month: "Feb", actual: null, forecast: 5.0 },
  { month: "Mar", actual: null, forecast: 4.9 },
];

const riskFactors = [
  { factor: "Delivery partner SLA breaches", impact: "High", probability: 91, property: "Cairo Kitchen — Maadi" },
  { factor: "Housekeeping staffing shortfall", impact: "Medium", probability: 78, property: "Sofitel Sharm" },
  { factor: "Response rate below 40%", impact: "Medium", probability: 99, property: "Marriott Cairo Downtown" },
  { factor: "Peak season volume spike (Eid)", impact: "Low", probability: 72, property: "All Properties" },
  { factor: "New competitor opening nearby", impact: "Low", probability: 60, property: "Koshary El Tahrir Zamalek" },
];

export default function PredictiveContent() {
  return (
    <div className="p-6 space-y-5">
      {/* AI Header */}
      <div className="bg-[#F4E0A3]/30 border border-[#D69E2E]/25 rounded-2xl p-5 flex items-start gap-3">
        <div className="w-10 h-10 rounded-xl ai-gradient flex items-center justify-center flex-shrink-0">
          <Sparkles className="w-5 h-5 text-white" />
        </div>
        <div>
          <p className="text-sm font-bold text-[#2D241C] mb-1">AI Reputation Forecast — Next 90 Days</p>
          <p className="text-xs text-[#6F6258] leading-relaxed">
            SEET AI has analyzed 47,832 reviews, operational patterns, seasonal trends, and competitive data to forecast your portfolio&apos;s reputation trajectory. 
            3 properties show risk signals. 2 properties are trending positively.
          </p>
        </div>
      </div>

      {/* Forecast Charts */}
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-5">
        <Card>
          <div className="flex items-center justify-between mb-3">
            <div>
              <h3 className="text-sm font-semibold text-[#2D241C]">Cairo Kitchen — Rating Forecast</h3>
              <p className="text-xs text-[#9E8F83]">Predicted decline if delivery issues persist</p>
            </div>
            <Badge variant="danger" size="xs">⚠ Risk Detected</Badge>
          </div>
          <ResponsiveContainer width="100%" height={200}>
            <LineChart data={forecastData} margin={{ top: 5, right: 10, left: -20, bottom: 5 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="#F3EDE6" vertical={false} />
              <XAxis dataKey="month" tick={{ fontSize: 10, fill: "#9E8F83" }} axisLine={false} tickLine={false} />
              <YAxis tick={{ fontSize: 10, fill: "#9E8F83" }} axisLine={false} tickLine={false} domain={[3.5, 4.5]} />
              <Tooltip contentStyle={{ background: "#fff", border: "1px solid #ECE4DA", borderRadius: "12px", fontSize: 11 }} />
              <ReferenceLine x="Dec" stroke="#ECE4DA" strokeDasharray="4 2" label={{ value: "Today", position: "top", fontSize: 9, fill: "#9E8F83" }} />
              <Line type="monotone" dataKey="actual" stroke="#D97542" strokeWidth={2.5} dot={{ fill: "#D97542", r: 4 }} connectNulls={false} name="Actual" />
              <Line type="monotone" dataKey="forecast" stroke="#DC2626" strokeWidth={2} strokeDasharray="6 3" dot={{ fill: "#DC2626", r: 3 }} connectNulls name="Forecast" />
            </LineChart>
          </ResponsiveContainer>
          <div className="flex items-center gap-3 mt-2">
            <div className="flex items-center gap-1.5"><div className="w-3 h-0.5 bg-[#D97542]" /><span className="text-[10px] text-[#9E8F83]">Actual</span></div>
            <div className="flex items-center gap-1.5"><div className="w-3 h-0.5 bg-[#DC2626] border-dashed border-t border-[#DC2626]" /><span className="text-[10px] text-[#9E8F83]">AI Forecast</span></div>
          </div>
        </Card>

        <Card>
          <div className="flex items-center justify-between mb-3">
            <div>
              <h3 className="text-sm font-semibold text-[#2D241C]">Four Seasons Nile — Rating Forecast</h3>
              <p className="text-xs text-[#9E8F83]">Positive trajectory — maintain current service standards</p>
            </div>
            <Badge variant="success" size="xs">✓ On Track</Badge>
          </div>
          <ResponsiveContainer width="100%" height={200}>
            <LineChart data={forecastDataPositive} margin={{ top: 5, right: 10, left: -20, bottom: 5 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="#F3EDE6" vertical={false} />
              <XAxis dataKey="month" tick={{ fontSize: 10, fill: "#9E8F83" }} axisLine={false} tickLine={false} />
              <YAxis tick={{ fontSize: 10, fill: "#9E8F83" }} axisLine={false} tickLine={false} domain={[4.5, 5.0]} />
              <Tooltip contentStyle={{ background: "#fff", border: "1px solid #ECE4DA", borderRadius: "12px", fontSize: 11 }} />
              <ReferenceLine x="Dec" stroke="#ECE4DA" strokeDasharray="4 2" />
              <Line type="monotone" dataKey="actual" stroke="#16A34A" strokeWidth={2.5} dot={{ fill: "#16A34A", r: 4 }} connectNulls={false} name="Actual" />
              <Line type="monotone" dataKey="forecast" stroke="#16A34A" strokeWidth={2} strokeDasharray="6 3" dot={{ fill: "#16A34A", r: 3 }} connectNulls name="Forecast" />
            </LineChart>
          </ResponsiveContainer>
        </Card>
      </div>

      {/* Risk Factors */}
      <Card>
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-sm font-semibold text-[#2D241C]">Identified Risk Factors</h3>
          <p className="text-xs text-[#9E8F83]">Ranked by AI probability score</p>
        </div>
        <div className="space-y-3">
          {riskFactors.map((risk) => (
            <div key={risk.factor} className="flex items-center gap-4 p-3 bg-[#FCF8F3] rounded-xl">
              <div
                className={cn(
                  "w-7 h-7 rounded-xl flex items-center justify-center flex-shrink-0",
                  risk.impact === "High" ? "bg-red-50 text-red-600" :
                  risk.impact === "Medium" ? "bg-amber-50 text-amber-600" :
                  "bg-blue-50 text-blue-600"
                )}
              >
                {risk.impact === "High" ? <AlertTriangle className="w-3.5 h-3.5" /> :
                 risk.impact === "Medium" ? <TrendingDown className="w-3.5 h-3.5" /> :
                 <Info className="w-3.5 h-3.5" />}
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-xs font-semibold text-[#2D241C]">{risk.factor}</p>
                <p className="text-[10px] text-[#9E8F83]">{risk.property}</p>
              </div>
              <div className="flex items-center gap-3 flex-shrink-0">
                <div className="text-center">
                  <p className="text-[10px] text-[#9E8F83]">Probability</p>
                  <p className="text-sm font-bold text-[#2D241C]">{risk.probability}%</p>
                </div>
                <Badge
                  variant={risk.impact === "High" ? "danger" : risk.impact === "Medium" ? "warning" : "info"}
                  size="xs"
                >
                  {risk.impact}
                </Badge>
              </div>
            </div>
          ))}
        </div>
      </Card>

      {/* AI Insights */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {aiInsights.map((insight) => {
          const Icon = insight.type === "prediction" ? TrendingDown :
                       insight.type === "recommendation" ? TrendingUp :
                       insight.type === "risk" ? AlertTriangle : TrendingUp;
          const severityMap = {
            critical: "danger" as const,
            warning: "warning" as const,
            info: "info" as const,
            success: "success" as const,
          };
          return (
            <div key={insight.id} className="bg-white rounded-2xl border border-[#ECE4DA] card-shadow p-5">
              <div className="flex items-start gap-3 mb-3">
                <div className="w-8 h-8 rounded-xl ai-gradient flex items-center justify-center flex-shrink-0">
                  <Sparkles className="w-4 h-4 text-white" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-0.5">
                    <p className="text-xs font-bold text-[#2D241C]">{insight.title}</p>
                    <Badge variant={severityMap[insight.severity as keyof typeof severityMap]} size="xs">
                      {insight.confidence}% confidence
                    </Badge>
                  </div>
                  <p className="text-[10px] text-[#9E8F83] capitalize">{insight.type} · {insight.property}</p>
                </div>
              </div>
              <p className="text-xs text-[#6F6258] leading-relaxed mb-3">{insight.description}</p>
              <Button variant="outline" size="xs">{insight.action} →</Button>
            </div>
          );
        })}
      </div>
    </div>
  );
}
