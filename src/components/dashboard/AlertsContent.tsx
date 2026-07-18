"use client";
import { useState } from "react";
import { AlertTriangle, CheckCircle2, Info, Sparkles, Bell, ArrowRight } from "lucide-react";
import Card from "@/components/ui/Card";
import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";
import { alerts } from "@/lib/data";
import { cn } from "@/lib/utils";

export default function AlertsContent() {
  const [filter, setFilter] = useState("all");

  const filtered =
    filter === "all"
      ? alerts
      : alerts.filter((a) => a.type === filter);

  const counts = {
    all: alerts.length,
    critical: alerts.filter((a) => a.type === "critical").length,
    warning: alerts.filter((a) => a.type === "warning").length,
    info: alerts.filter((a) => a.type === "info").length,
  };

  return (
    <div className="p-6 space-y-5">
      {/* Summary Cards */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {[
          {
            label: "Critical",
            count: counts.critical,
            color: "text-red-600",
            bg: "bg-red-50",
            icon: <AlertTriangle className="w-4 h-4" />,
          },
          {
            label: "Warning",
            count: counts.warning,
            color: "text-amber-600",
            bg: "bg-amber-50",
            icon: <Bell className="w-4 h-4" />,
          },
          {
            label: "Info",
            count: counts.info,
            color: "text-blue-600",
            bg: "bg-blue-50",
            icon: <Info className="w-4 h-4" />,
          },
          {
            label: "Resolved Today",
            count: 6,
            color: "text-green-600",
            bg: "bg-green-50",
            icon: <CheckCircle2 className="w-4 h-4" />,
          },
        ].map((s) => (
          <div
            key={s.label}
            className="bg-white rounded-2xl border border-[#ECE4DA] card-shadow p-5 flex items-center gap-3"
          >
            <div className={cn("w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0", s.bg, s.color)}>
              {s.icon}
            </div>
            <div>
              <p className="text-2xl font-bold text-[#2D241C]">{s.count}</p>
              <p className="text-xs text-[#9E8F83]">{s.label}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Filter Tabs */}
      <div className="flex items-center gap-2">
        {["all", "critical", "warning", "info"].map((type) => (
          <button
            key={type}
            onClick={() => setFilter(type)}
            className={cn(
              "px-4 py-2 rounded-xl text-xs font-medium capitalize transition-all",
              filter === type
                ? "bg-[#D97542] text-white"
                : "bg-white border border-[#ECE4DA] text-[#6F6258] hover:bg-[#FCF8F3]"
            )}
          >
            {type === "all" ? `All (${counts.all})` : `${type.charAt(0).toUpperCase() + type.slice(1)} (${counts[type as keyof typeof counts]})`}
          </button>
        ))}
      </div>

      {/* Alerts List */}
      <div className="space-y-3">
        {filtered.map((alert) => (
          <div
            key={alert.id}
            className={cn(
              "bg-white rounded-2xl border card-shadow hover:card-shadow-hover transition-all",
              alert.type === "critical" && "border-l-4 border-red-400",
              alert.type === "warning" && "border-l-4 border-amber-400",
              alert.type === "info" && "border-l-4 border-blue-400",
              !alert.isRead && "bg-[#FFFDF9]"
            )}
          >
            <div className="p-5">
              <div className="flex items-start gap-4">
                <div
                  className={cn(
                    "w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0",
                    alert.type === "critical" && "bg-red-50 text-red-600",
                    alert.type === "warning" && "bg-amber-50 text-amber-600",
                    alert.type === "info" && "bg-blue-50 text-blue-600"
                  )}
                >
                  {alert.type === "critical" ? (
                    <AlertTriangle className="w-4 h-4" />
                  ) : alert.type === "warning" ? (
                    <Bell className="w-4 h-4" />
                  ) : (
                    <Info className="w-4 h-4" />
                  )}
                </div>

                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between gap-4 mb-1.5">
                    <div className="flex items-center gap-2 flex-wrap">
                      <h3 className="text-sm font-bold text-[#2D241C]">
                        {alert.title}
                      </h3>
                      {!alert.isRead && (
                        <Badge variant="primary" size="xs">New</Badge>
                      )}
                    </div>
                    <div className="flex items-center gap-2 flex-shrink-0">
                      <span className="text-xs text-[#9E8F83]">{alert.time}</span>
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
                    </div>
                  </div>

                  <p className="text-xs text-[#6F6258] mb-3">
                    {alert.description}
                  </p>

                  {/* AI Prediction Impact */}
                  <div className="flex items-start gap-2 bg-[#F4E0A3]/20 border border-[#D69E2E]/15 rounded-xl px-3 py-2 mb-3">
                    <Sparkles className="w-3 h-3 text-[#D97542] flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="text-[10px] font-semibold text-[#B07A10] uppercase tracking-wide mb-0.5">
                        AI Predicted Impact
                      </p>
                      <p className="text-xs text-[#6F6258]">
                        {alert.predictedImpact}
                      </p>
                    </div>
                    <div className="ml-auto flex-shrink-0">
                      <Badge variant="ai" size="xs">
                        {alert.confidence}% confidence
                      </Badge>
                    </div>
                  </div>

                  <div className="flex items-center justify-between flex-wrap gap-2">
                    <div className="flex items-center gap-2 flex-wrap">
                      <Badge variant="default" size="xs">{alert.property}</Badge>
                      <Badge variant="default" size="xs">{alert.department}</Badge>
                      <Badge variant="default" size="xs">{alert.platform}</Badge>
                    </div>
                    <div className="flex items-center gap-2">
                      <Button variant="ghost" size="xs">Mark Read</Button>
                      <Button variant="outline" size="xs">
                        Assign →
                      </Button>
                      <Button variant="primary" size="xs">
                        Take Action
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
