"use client";
import { cn } from "@/lib/utils";
import {
  Search,
  Bell,
  CalendarDays,
  ChevronDown,
  SlidersHorizontal,
  Store,
} from "lucide-react";
import type { ReactNode } from "react";

interface TopbarProps {
  title: string;
  subtitle?: string;
  actions?: ReactNode;
  showFilters?: boolean;
  showBrandSelector?: boolean;
  showPropertySelector?: boolean;
}

export default function Topbar({
  title,
  subtitle,
  actions,
  showFilters = true,
  showBrandSelector = true,
  showPropertySelector = true,
}: TopbarProps) {
  return (
    <header className="bg-white border-b border-[#ECE4DA] px-6 py-3 sticky top-0 z-40">
      <div className="flex items-center gap-4">
        {/* Title */}
        <div className="flex-1 min-w-0">
          <h1 className="text-base font-bold text-[#2D241C] leading-tight truncate">
            {title}
          </h1>
          {subtitle && (
            <p className="text-xs text-[#9E8F83] mt-0.5 truncate">{subtitle}</p>
          )}
        </div>

        {/* Controls */}
        <div className="flex items-center gap-2 flex-shrink-0">
          {/* Search */}
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-[#9E8F83]" />
            <input
              type="text"
              placeholder="Search reviews, properties..."
              className="h-8 pl-8 pr-4 w-56 text-xs rounded-xl border border-[#ECE4DA] bg-[#FCF8F3] placeholder:text-[#B5A89E] text-[#2D241C] focus:outline-none focus:ring-2 focus:ring-[#D97542]/30 focus:border-[#D97542] transition-colors"
            />
          </div>

          {/* Brand Selector */}
          {showBrandSelector && (
            <button className="flex items-center gap-1.5 h-8 px-3 rounded-xl border border-[#ECE4DA] bg-white hover:bg-[#FCF8F3] transition-colors text-xs font-medium text-[#6F6258]">
              <Building2Icon className="w-3 h-3 text-[#9E8F83]" />
              All Brands
              <ChevronDown className="w-3 h-3 text-[#9E8F83]" />
            </button>
          )}

          {/* Property Selector */}
          {showPropertySelector && (
            <button className="flex items-center gap-1.5 h-8 px-3 rounded-xl border border-[#ECE4DA] bg-white hover:bg-[#FCF8F3] transition-colors text-xs font-medium text-[#6F6258]">
              <Store className="w-3 h-3 text-[#9E8F83]" />
              All Properties
              <ChevronDown className="w-3 h-3 text-[#9E8F83]" />
            </button>
          )}

          {/* Date Range */}
          <button className="flex items-center gap-1.5 h-8 px-3 rounded-xl border border-[#ECE4DA] bg-white hover:bg-[#FCF8F3] transition-colors text-xs font-medium text-[#6F6258]">
            <CalendarDays className="w-3 h-3 text-[#9E8F83]" />
            Last 30 days
            <ChevronDown className="w-3 h-3 text-[#9E8F83]" />
          </button>

          {/* Filters */}
          {showFilters && (
            <button className="flex items-center gap-1.5 h-8 px-3 rounded-xl border border-[#ECE4DA] bg-white hover:bg-[#FCF8F3] transition-colors text-xs font-medium text-[#6F6258]">
              <SlidersHorizontal className="w-3 h-3 text-[#9E8F83]" />
              Filters
            </button>
          )}

          {/* Actions */}
          {actions}

          {/* Notifications */}
          <button className="relative w-8 h-8 rounded-xl border border-[#ECE4DA] bg-white hover:bg-[#FCF8F3] transition-colors flex items-center justify-center">
            <Bell className="w-3.5 h-3.5 text-[#6F6258]" />
            <span className="absolute -top-0.5 -right-0.5 w-3.5 h-3.5 bg-[#DC2626] rounded-full flex items-center justify-center">
              <span className="text-[8px] font-bold text-white">5</span>
            </span>
          </button>
        </div>
      </div>
    </header>
  );
}

function Building2Icon({ className }: { className?: string }) {
  return (
    <svg className={cn("", className)} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
    </svg>
  );
}
