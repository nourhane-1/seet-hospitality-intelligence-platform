"use client";
import { Sparkles, Menu, X } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import Button from "@/components/ui/Button";

export default function LandingNav() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-[#ECE4DA]">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between gap-6">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2.5 flex-shrink-0">
          <div className="w-8 h-8 rounded-xl ai-gradient flex items-center justify-center">
            <Sparkles className="w-4 h-4 text-white" />
          </div>
          <span className="text-xl font-bold text-[#2D241C] tracking-tight">SEET</span>
          <span className="hidden sm:inline text-xs text-[#9E8F83] font-medium border-l border-[#ECE4DA] pl-2.5 ml-0.5">
            Reputation AI
          </span>
        </Link>

        {/* Nav Links */}
        <nav className="hidden md:flex items-center gap-1">
          {["Features", "AI Platform", "Pricing", "Customers", "Resources"].map((item) => (
            <Link
              key={item}
              href={`#${item.toLowerCase().replace(" ", "-")}`}
              className="px-3 py-2 text-sm text-[#6F6258] hover:text-[#2D241C] hover:bg-[#FCF8F3] rounded-lg transition-colors"
            >
              {item}
            </Link>
          ))}
        </nav>

        {/* Actions */}
        <div className="hidden md:flex items-center gap-2">
          <Link href="/login">
            <Button variant="ghost" size="sm">Sign In</Button>
          </Link>
          <Link href="/demo">
            <Button variant="primary" size="sm">Book a Demo</Button>
          </Link>
        </div>

        {/* Mobile menu */}
        <button
          className="md:hidden p-2 rounded-lg hover:bg-[#FCF8F3]"
          onClick={() => setOpen(!open)}
        >
          {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      {open && (
        <div className="md:hidden border-t border-[#ECE4DA] bg-white px-6 pb-4">
          <nav className="flex flex-col gap-1 mt-3">
            {["Features", "AI Platform", "Pricing", "Customers", "Resources"].map((item) => (
              <Link
                key={item}
                href={`#${item.toLowerCase()}`}
                className="px-3 py-2 text-sm text-[#6F6258] hover:text-[#2D241C] rounded-lg"
                onClick={() => setOpen(false)}
              >
                {item}
              </Link>
            ))}
            <div className="flex gap-2 mt-2">
              <Link href="/login" className="flex-1">
                <Button variant="secondary" size="sm" className="w-full">Sign In</Button>
              </Link>
              <Link href="/demo" className="flex-1">
                <Button variant="primary" size="sm" className="w-full">Book Demo</Button>
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
