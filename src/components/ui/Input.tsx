"use client";
import { cn } from "@/lib/utils";
import { type InputHTMLAttributes, forwardRef, type ReactNode } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  hint?: string;
  icon?: ReactNode;
  iconRight?: ReactNode;
  containerClassName?: string;
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      label,
      error,
      hint,
      icon,
      iconRight,
      className,
      containerClassName,
      ...props
    },
    ref
  ) => {
    return (
      <div className={cn("flex flex-col gap-1.5", containerClassName)}>
        {label && (
          <label className="text-sm font-medium text-[#2D241C]">{label}</label>
        )}
        <div className="relative">
          {icon && (
            <div className="absolute left-3 top-1/2 -translate-y-1/2 text-[#9E8F83]">
              {icon}
            </div>
          )}
          <input
            ref={ref}
            className={cn(
              "w-full h-10 rounded-xl border border-[#ECE4DA] bg-white px-3 text-sm text-[#2D241C] placeholder:text-[#B5A89E]",
              "focus:outline-none focus:ring-2 focus:ring-[#D97542]/30 focus:border-[#D97542]",
              "transition-colors duration-150",
              "disabled:opacity-50 disabled:cursor-not-allowed",
              error && "border-[#DC2626] focus:ring-[#DC2626]/30 focus:border-[#DC2626]",
              icon && "pl-9",
              iconRight && "pr-9",
              className
            )}
            {...props}
          />
          {iconRight && (
            <div className="absolute right-3 top-1/2 -translate-y-1/2 text-[#9E8F83]">
              {iconRight}
            </div>
          )}
        </div>
        {error && <p className="text-xs text-[#DC2626]">{error}</p>}
        {hint && !error && <p className="text-xs text-[#9E8F83]">{hint}</p>}
      </div>
    );
  }
);
Input.displayName = "Input";
export default Input;
