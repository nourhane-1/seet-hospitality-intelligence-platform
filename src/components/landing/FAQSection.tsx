"use client";
import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { faqs } from "@/lib/data";
import { cn } from "@/lib/utils";

export default function FAQSection() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="py-24 bg-[#FCF8F3]">
      <div className="max-w-3xl mx-auto px-6">
        <div className="text-center mb-12">
          <p className="text-xs font-semibold text-[#D97542] uppercase tracking-widest mb-3">
            FAQ
          </p>
          <h2 className="text-4xl font-bold text-[#2D241C]">
            Frequently asked questions
          </h2>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl border border-[#ECE4DA] card-shadow overflow-hidden"
            >
              <button
                className="w-full flex items-center justify-between px-6 py-4 text-left"
                onClick={() => setOpen(open === i ? null : i)}
              >
                <span className="text-sm font-semibold text-[#2D241C]">
                  {faq.q}
                </span>
                <ChevronDown
                  className={cn(
                    "w-4 h-4 text-[#9E8F83] flex-shrink-0 ml-4 transition-transform duration-200",
                    open === i && "rotate-180"
                  )}
                />
              </button>
              {open === i && (
                <div className="px-6 pb-4 border-t border-[#F3EDE6] pt-3">
                  <p className="text-sm text-[#6F6258] leading-relaxed">
                    {faq.a}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
