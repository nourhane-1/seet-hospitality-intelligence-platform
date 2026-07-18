import { Star } from "lucide-react";
import { testimonials } from "@/lib/data";

export default function TestimonialsSection() {
  return (
    <section id="customers" className="py-24 bg-[#FFFDF9]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-xs font-semibold text-[#D97542] uppercase tracking-widest mb-3">
            Customer Stories
          </p>
          <h2 className="text-4xl font-bold text-[#2D241C] mb-4">
            Trusted by hospitality leaders across MENA
          </h2>
          <p className="text-lg text-[#6F6258] max-w-xl mx-auto">
            From boutique hotels to international chains — SEET is the platform
            hospitality executives trust.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="bg-white rounded-2xl p-6 card-shadow border border-[#ECE4DA] hover:card-shadow-hover transition-shadow"
            >
              {/* Stars */}
              <div className="flex gap-0.5 mb-4">
                {[1, 2, 3, 4, 5].map((s) => (
                  <Star
                    key={s}
                    className="w-4 h-4 text-[#D69E2E] fill-[#D69E2E]"
                  />
                ))}
              </div>

              <p className="text-sm text-[#2D241C] leading-relaxed mb-6 italic">
                &ldquo;{t.text}&rdquo;
              </p>

              <div className="flex items-center gap-3 pt-4 border-t border-[#F3EDE6]">
                <div className="w-9 h-9 rounded-full bg-gradient-to-br from-[#D97542] to-[#D69E2E] flex items-center justify-center flex-shrink-0">
                  <span className="text-xs font-bold text-white">
                    {t.initials}
                  </span>
                </div>
                <div>
                  <p className="text-sm font-semibold text-[#2D241C]">
                    {t.name}
                  </p>
                  <p className="text-xs text-[#9E8F83]">{t.title}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Social proof bar */}
        <div className="mt-16 bg-[#FCF8F3] rounded-2xl border border-[#ECE4DA] p-8 text-center">
          <div className="flex flex-wrap justify-center gap-8 md:gap-16">
            {[
              { value: "850+", label: "Properties Monitored" },
              { value: "98%", label: "Customer Retention Rate" },
              { value: "4.8/5", label: "Average CSAT Score" },
              { value: "3 days", label: "Average Onboarding Time" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <p className="text-3xl font-bold text-[#D97542]">
                  {stat.value}
                </p>
                <p className="text-xs text-[#9E8F83] mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
