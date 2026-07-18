import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

interface StatCardProps {
  title: string;
  value: string | number;
  subtitle?: string;
  trend?: number;
  trendLabel?: string;
  icon?: ReactNode;
  iconBg?: string;
  comparison?: string;
  className?: string;
  accent?: boolean;
}

export default function StatCard({
  title,
  value,
  subtitle,
  trend,
  trendLabel,
  icon,
  iconBg = "bg-[#D97542]/10",
  comparison,
  className,
  accent = false,
}: StatCardProps) {
  const isPositive = trend !== undefined && trend >= 0;
  const isNegative = trend !== undefined && trend < 0;

  return (
    <div
      className={cn(
        "bg-white rounded-2xl border border-[#ECE4DA] p-5 card-shadow",
        "hover:card-shadow-hover transition-all duration-200 group",
        accent && "border-l-4 border-l-[#D97542]",
        className
      )}
    >
      <div className="flex items-start justify-between mb-3">
        <div className="flex-1 min-w-0">
          <p className="text-xs font-medium text-[#6F6258] uppercase tracking-wide truncate">
            {title}
          </p>
        </div>
        {icon && (
          <div className={cn("w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0 ml-2", iconBg)}>
            {icon}
          </div>
        )}
      </div>

      <div className="flex items-end justify-between">
        <div>
          <p className="text-2xl font-bold text-[#2D241C] leading-none mb-1">
            {value}
          </p>
          {subtitle && (
            <p className="text-xs text-[#9E8F83] mt-1">{subtitle}</p>
          )}
        </div>

        {trend !== undefined && (
          <div
            className={cn(
              "flex items-center gap-0.5 text-xs font-semibold rounded-lg px-2 py-1",
              isPositive && "bg-green-50 text-green-700",
              isNegative && "bg-red-50 text-red-700",
              !isPositive && !isNegative && "bg-[#F3EDE6] text-[#9E8F83]"
            )}
          >
            {isPositive && (
              <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 10l7-7m0 0l7 7m-7-7v18" />
              </svg>
            )}
            {isNegative && (
              <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            )}
            {Math.abs(trend)}%
          </div>
        )}
      </div>

      {(comparison || trendLabel) && (
        <p className="text-xs text-[#9E8F83] mt-2">
          {trendLabel || comparison}
        </p>
      )}
    </div>
  );
}
