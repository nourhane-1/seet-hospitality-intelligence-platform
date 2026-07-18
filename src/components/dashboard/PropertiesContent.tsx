"use client";
import { MapPin, Star, AlertTriangle, CheckCircle2, TrendingUp, TrendingDown } from "lucide-react";
import { properties } from "@/lib/data";
import Badge from "@/components/ui/Badge";
import Card from "@/components/ui/Card";
import { cn } from "@/lib/utils";

const propertyTypeIcons: Record<string, string> = {
  Hotel: "🏨",
  Resort: "🌴",
  Restaurant: "🍽️",
  Café: "☕",
};

export default function PropertiesContent() {
  return (
    <div className="p-6 space-y-5">
      {/* Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {[
          { label: "Total Properties", value: "38" },
          { label: "Hotels & Resorts", value: "22" },
          { label: "Restaurants & Cafés", value: "16" },
          { label: "At-Risk Properties", value: "4", danger: true },
        ].map((s) => (
          <div key={s.label} className={cn("bg-white rounded-2xl border card-shadow px-5 py-4", s.danger ? "border-red-100" : "border-[#ECE4DA]")}>
            <p className="text-[10px] font-semibold text-[#6F6258] uppercase tracking-wide">{s.label}</p>
            <p className={cn("text-2xl font-bold mt-1", s.danger ? "text-red-600" : "text-[#2D241C]")}>{s.value}</p>
          </div>
        ))}
      </div>

      {/* Properties Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {properties.map((property) => (
          <div
            key={property.id}
            className={cn(
              "bg-white rounded-2xl border card-shadow hover:card-shadow-hover transition-all p-5",
              property.alertCount > 0 && property.trend < -5 ? "border-l-4 border-l-red-400 border-[#ECE4DA]" : "border-[#ECE4DA]"
            )}
          >
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-start gap-3">
                <div className="text-2xl flex-shrink-0">
                  {propertyTypeIcons[property.type]}
                </div>
                <div>
                  <p className="text-sm font-bold text-[#2D241C] leading-tight">
                    {property.name}
                  </p>
                  <div className="flex items-center gap-2 mt-1">
                    <span className="text-xs text-[#9E8F83]">{property.brand}</span>
                    <span className="text-[#ECE4DA]">·</span>
                    <div className="flex items-center gap-1">
                      <MapPin className="w-2.5 h-2.5 text-[#9E8F83]" />
                      <span className="text-xs text-[#9E8F83]">{property.city}</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-end gap-1">
                <Badge variant={property.type === "Hotel" || property.type === "Resort" ? "info" : "primary"} size="xs">
                  {property.type}
                </Badge>
                {property.alertCount > 0 && (
                  <Badge variant="danger" size="xs" dot>
                    {property.alertCount} alert{property.alertCount > 1 ? "s" : ""}
                  </Badge>
                )}
              </div>
            </div>

            {/* Metrics Grid */}
            <div className="grid grid-cols-4 gap-2 mb-4">
              <div className="bg-[#FCF8F3] rounded-xl p-2.5 text-center">
                <p className="text-[10px] text-[#9E8F83]">Rating</p>
                <p className="text-sm font-bold text-[#2D241C]">{property.rating}</p>
              </div>
              <div className="bg-[#FCF8F3] rounded-xl p-2.5 text-center">
                <p className="text-[10px] text-[#9E8F83]">Reviews</p>
                <p className="text-sm font-bold text-[#2D241C]">{(property.reviews / 1000).toFixed(1)}K</p>
              </div>
              <div className="bg-[#FCF8F3] rounded-xl p-2.5 text-center">
                <p className="text-[10px] text-[#9E8F83]">Sentiment</p>
                <p className={cn("text-sm font-bold", property.sentiment >= 80 ? "text-green-600" : property.sentiment >= 65 ? "text-amber-600" : "text-red-600")}>
                  {property.sentiment}%
                </p>
              </div>
              <div className="bg-[#FCF8F3] rounded-xl p-2.5 text-center">
                <p className="text-[10px] text-[#9E8F83]">Response</p>
                <p className={cn("text-sm font-bold", property.responseRate >= 70 ? "text-green-600" : property.responseRate >= 40 ? "text-amber-600" : "text-red-600")}>
                  {property.responseRate}%
                </p>
              </div>
            </div>

            {/* Sentiment Progress */}
            <div className="mb-4">
              <div className="h-1.5 bg-[#F3EDE6] rounded-full overflow-hidden">
                <div
                  className="h-full rounded-full"
                  style={{
                    width: `${property.sentiment}%`,
                    backgroundColor:
                      property.sentiment >= 80 ? "#16A34A" : property.sentiment >= 65 ? "#D69E2E" : "#DC2626",
                  }}
                />
              </div>
            </div>

            {/* Footer */}
            <div className="flex items-center justify-between pt-3 border-t border-[#F3EDE6]">
              <div className={cn("flex items-center gap-1 text-xs font-semibold", property.trend >= 0 ? "text-green-600" : "text-red-600")}>
                {property.trend >= 0 ? <TrendingUp className="w-3.5 h-3.5" /> : <TrendingDown className="w-3.5 h-3.5" />}
                {Math.abs(property.trend)}% vs. last month
              </div>
              <button className="text-xs font-semibold text-[#D97542] hover:text-[#C86433]">
                View dashboard →
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Properties Table */}
      <Card padding="none">
        <div className="px-6 py-4 border-b border-[#ECE4DA]">
          <h3 className="text-sm font-semibold text-[#2D241C]">All Properties — Performance Summary</h3>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-[#ECE4DA] bg-[#FCF8F3]">
                {["Property", "Brand", "Type", "City", "Rating", "Sentiment", "Response Rate", "Alerts", "Trend"].map(h => (
                  <th key={h} className="text-left text-[10px] font-semibold text-[#6F6258] uppercase tracking-wide px-5 py-3 first:pl-6 last:pr-6 whitespace-nowrap">
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {properties.map((p, i) => (
                <tr key={p.id} className={cn("border-b border-[#F3EDE6] hover:bg-[#FFFDF9]", i % 2 === 0 ? "" : "bg-[#FCF8F3]/30")}>
                  <td className="px-5 py-3.5 pl-6">
                    <p className="text-xs font-semibold text-[#2D241C]">{p.name.split(" — ")[0]}</p>
                    {p.name.includes(" — ") && <p className="text-[10px] text-[#9E8F83]">{p.name.split(" — ")[1]}</p>}
                  </td>
                  <td className="px-5 py-3.5 text-xs text-[#6F6258]">{p.brand}</td>
                  <td className="px-5 py-3.5"><Badge variant="default" size="xs">{p.type}</Badge></td>
                  <td className="px-5 py-3.5 text-xs text-[#6F6258]">{p.city}</td>
                  <td className="px-5 py-3.5">
                    <div className="flex items-center gap-1">
                      <Star className="w-3 h-3 text-[#D69E2E] fill-[#D69E2E]" />
                      <span className="text-sm font-semibold text-[#2D241C]">{p.rating}</span>
                    </div>
                  </td>
                  <td className="px-5 py-3.5">
                    <Badge variant={p.sentiment >= 80 ? "success" : p.sentiment >= 65 ? "warning" : "danger"} size="xs">
                      {p.sentiment}%
                    </Badge>
                  </td>
                  <td className="px-5 py-3.5">
                    <Badge variant={p.responseRate >= 70 ? "success" : p.responseRate >= 40 ? "warning" : "danger"} size="xs">
                      {p.responseRate}%
                    </Badge>
                  </td>
                  <td className="px-5 py-3.5">
                    {p.alertCount > 0 ? (
                      <div className="flex items-center gap-1">
                        <AlertTriangle className="w-3 h-3 text-red-500" />
                        <span className="text-xs text-red-600 font-semibold">{p.alertCount}</span>
                      </div>
                    ) : (
                      <CheckCircle2 className="w-3 h-3 text-green-500" />
                    )}
                  </td>
                  <td className="px-5 py-3.5 pr-6">
                    <span className={cn("text-xs font-semibold", p.trend >= 0 ? "text-green-600" : "text-red-600")}>
                      {p.trend >= 0 ? "+" : ""}{p.trend}%
                    </span>
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
