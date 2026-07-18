"use client";
import { TrendingUp, TrendingDown, Building2, Star, MessageSquare } from "lucide-react";
import { brands } from "@/lib/data";
import Badge from "@/components/ui/Badge";
import Card from "@/components/ui/Card";
import { cn } from "@/lib/utils";

export default function BrandsContent() {
  return (
    <div className="p-6 space-y-5">
      {/* Header stats */}
      <div className="grid grid-cols-3 gap-4">
        {[
          { label: "Total Brands", value: "6" },
          { label: "Total Reviews", value: "47,832" },
          { label: "Avg Portfolio Rating", value: "4.2 ★" },
        ].map((s) => (
          <div key={s.label} className="bg-white rounded-2xl border border-[#ECE4DA] card-shadow px-5 py-4">
            <p className="text-[10px] font-semibold text-[#6F6258] uppercase tracking-wide">{s.label}</p>
            <p className="text-2xl font-bold text-[#2D241C] mt-1">{s.value}</p>
          </div>
        ))}
      </div>

      {/* Brands Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
        {brands.map((brand) => (
          <div
            key={brand.id}
            className="bg-white rounded-2xl border border-[#ECE4DA] card-shadow hover:card-shadow-hover transition-all p-5"
          >
            {/* Brand Header */}
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-center gap-3">
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center text-white font-bold text-sm flex-shrink-0"
                  style={{ backgroundColor: brand.logoColor }}
                >
                  {brand.name[0]}
                </div>
                <div>
                  <p className="text-sm font-bold text-[#2D241C]">{brand.name}</p>
                  <Badge variant="default" size="xs">{brand.type}</Badge>
                </div>
              </div>
              <div className={cn("flex items-center gap-1 text-xs font-semibold", brand.trend >= 0 ? "text-green-600" : "text-red-600")}>
                {brand.trend >= 0 ? <TrendingUp className="w-3.5 h-3.5" /> : <TrendingDown className="w-3.5 h-3.5" />}
                {Math.abs(brand.trend)}%
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-3 mb-4">
              <div className="bg-[#FCF8F3] rounded-xl p-3">
                <div className="flex items-center gap-1.5 mb-1">
                  <Star className="w-3 h-3 text-[#D69E2E]" />
                  <p className="text-[10px] text-[#6F6258]">Avg Rating</p>
                </div>
                <p className="text-lg font-bold text-[#2D241C]">{brand.rating}</p>
              </div>
              <div className="bg-[#FCF8F3] rounded-xl p-3">
                <div className="flex items-center gap-1.5 mb-1">
                  <MessageSquare className="w-3 h-3 text-[#D97542]" />
                  <p className="text-[10px] text-[#6F6258]">Reviews</p>
                </div>
                <p className="text-lg font-bold text-[#2D241C]">{brand.reviews.toLocaleString()}</p>
              </div>
            </div>

            {/* Sentiment Bar */}
            <div className="mb-4">
              <div className="flex justify-between text-[10px] mb-1.5">
                <span className="text-[#6F6258]">AI Sentiment Score</span>
                <span className={cn("font-bold", brand.sentiment >= 80 ? "text-green-600" : brand.sentiment >= 65 ? "text-amber-600" : "text-red-600")}>
                  {brand.sentiment}%
                </span>
              </div>
              <div className="h-2 bg-[#F3EDE6] rounded-full overflow-hidden">
                <div
                  className="h-full rounded-full"
                  style={{
                    width: `${brand.sentiment}%`,
                    backgroundColor: brand.sentiment >= 80 ? "#16A34A" : brand.sentiment >= 65 ? "#D69E2E" : "#DC2626",
                  }}
                />
              </div>
            </div>

            {/* Properties */}
            <div className="flex items-center justify-between border-t border-[#F3EDE6] pt-3">
              <div className="flex items-center gap-1.5">
                <Building2 className="w-3.5 h-3.5 text-[#9E8F83]" />
                <span className="text-xs text-[#6F6258]">{brand.properties} properties</span>
              </div>
              <button className="text-xs font-semibold text-[#D97542] hover:text-[#C86433]">
                View details →
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Brand Comparison Table */}
      <Card padding="none">
        <div className="px-6 py-4 border-b border-[#ECE4DA]">
          <h3 className="text-sm font-semibold text-[#2D241C]">Brand Performance Comparison</h3>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-[#ECE4DA] bg-[#FCF8F3]">
                {["Brand", "Type", "Properties", "Reviews", "Avg Rating", "Sentiment", "Trend"].map(h => (
                  <th key={h} className="text-left text-[10px] font-semibold text-[#6F6258] uppercase tracking-wide px-5 py-3 first:pl-6 last:pr-6">
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {brands.sort((a, b) => b.rating - a.rating).map((brand, i) => (
                <tr key={brand.id} className={cn("border-b border-[#F3EDE6] hover:bg-[#FFFDF9]", i % 2 === 0 ? "" : "bg-[#FCF8F3]/30")}>
                  <td className="px-5 py-3.5 pl-6">
                    <div className="flex items-center gap-2">
                      <div
                        className="w-6 h-6 rounded-lg flex items-center justify-center text-white text-xs font-bold flex-shrink-0"
                        style={{ backgroundColor: brand.logoColor }}
                      >
                        {brand.name[0]}
                      </div>
                      <span className="text-sm font-semibold text-[#2D241C]">{brand.name}</span>
                    </div>
                  </td>
                  <td className="px-5 py-3.5"><Badge variant="default" size="xs">{brand.type}</Badge></td>
                  <td className="px-5 py-3.5 text-sm text-[#2D241C]">{brand.properties}</td>
                  <td className="px-5 py-3.5 text-sm text-[#2D241C]">{brand.reviews.toLocaleString()}</td>
                  <td className="px-5 py-3.5">
                    <div className="flex items-center gap-1">
                      <Star className="w-3 h-3 text-[#D69E2E] fill-[#D69E2E]" />
                      <span className="text-sm font-semibold text-[#2D241C]">{brand.rating}</span>
                    </div>
                  </td>
                  <td className="px-5 py-3.5">
                    <Badge
                      variant={brand.sentiment >= 80 ? "success" : brand.sentiment >= 65 ? "warning" : "danger"}
                      size="xs"
                    >
                      {brand.sentiment}%
                    </Badge>
                  </td>
                  <td className="px-5 py-3.5 pr-6">
                    <span className={cn("text-xs font-semibold", brand.trend >= 0 ? "text-green-600" : "text-red-600")}>
                      {brand.trend >= 0 ? "+" : ""}{brand.trend}%
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
