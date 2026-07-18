"use client";
import { cn } from "@/lib/utils";
import { type ButtonHTMLAttributes, forwardRef } from "react";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "ghost" | "danger" | "outline" | "ai";
  size?: "xs" | "sm" | "md" | "lg";
  loading?: boolean;
  icon?: React.ReactNode;
  iconRight?: React.ReactNode;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant = "primary",
      size = "md",
      loading = false,
      icon,
      iconRight,
      children,
      disabled,
      ...props
    },
    ref
  ) => {
    const base =
      "inline-flex items-center justify-center gap-2 font-medium transition-all duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D97542] focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none select-none whitespace-nowrap rounded-xl";

    const variants = {
      primary:
        "bg-[#D97542] text-white hover:bg-[#C86433] active:bg-[#B45528] shadow-sm",
      secondary:
        "bg-[#FCF8F3] text-[#2D241C] border border-[#ECE4DA] hover:bg-[#F3EDE6] active:bg-[#ECE4DA]",
      ghost: "text-[#6F6258] hover:bg-[#FCF8F3] active:bg-[#F3EDE6]",
      danger:
        "bg-[#DC2626] text-white hover:bg-[#B91C1C] active:bg-[#991B1B] shadow-sm",
      outline:
        "border border-[#D97542] text-[#D97542] hover:bg-[#D97542]/5 active:bg-[#D97542]/10",
      ai: "ai-gradient text-white hover:opacity-90 active:opacity-80 shadow-sm",
    };

    const sizes = {
      xs: "h-7 px-3 text-xs",
      sm: "h-8 px-3.5 text-sm",
      md: "h-10 px-4 text-sm",
      lg: "h-11 px-6 text-base",
    };

    return (
      <button
        ref={ref}
        className={cn(base, variants[variant], sizes[size], className)}
        disabled={disabled || loading}
        {...props}
      >
        {loading ? (
          <svg
            className="animate-spin h-4 w-4"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            />
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
            />
          </svg>
        ) : (
          icon
        )}
        {children}
        {iconRight}
      </button>
    );
  }
);
Button.displayName = "Button";
export default Button;
