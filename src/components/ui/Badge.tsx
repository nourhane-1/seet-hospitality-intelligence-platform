import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

export interface BadgeProps {
  children: ReactNode;
  variant?:
    | "default"
    | "success"
    | "warning"
    | "danger"
    | "info"
    | "ai"
    | "primary"
    | "muted";
  size?: "xs" | "sm" | "md";
  className?: string;
  dot?: boolean;
}

export default function Badge({
  children,
  variant = "default",
  size = "sm",
  className,
  dot = false,
}: BadgeProps) {
  const base =
    "inline-flex items-center gap-1.5 font-medium rounded-full leading-none";

  const variants = {
    default: "bg-[#F3EDE6] text-[#6F6258]",
    primary: "bg-[#D97542]/10 text-[#D97542]",
    success: "bg-green-50 text-green-700",
    warning: "bg-amber-50 text-amber-700",
    danger: "bg-red-50 text-red-700",
    info: "bg-blue-50 text-blue-700",
    ai: "bg-[#F4E0A3]/60 text-[#B07A10]",
    muted: "bg-[#F3EDE6] text-[#9E8F83]",
  };

  const sizes = {
    xs: "text-[10px] px-1.5 py-0.5",
    sm: "text-xs px-2 py-1",
    md: "text-sm px-2.5 py-1",
  };

  const dotColors = {
    default: "bg-[#9E8F83]",
    primary: "bg-[#D97542]",
    success: "bg-green-500",
    warning: "bg-amber-500",
    danger: "bg-red-500",
    info: "bg-blue-500",
    ai: "bg-[#D97542]",
    muted: "bg-[#9E8F83]",
  };

  return (
    <span className={cn(base, variants[variant], sizes[size], className)}>
      {dot && (
        <span
          className={cn("w-1.5 h-1.5 rounded-full", dotColors[variant])}
        />
      )}
      {children}
    </span>
  );
}
