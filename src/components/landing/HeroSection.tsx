import Link from "next/link";
import Button from "@/components/ui/Button";
import { Sparkles, Star, ArrowRight, TrendingUp, Shield, Zap } from "lucide-react";

const floatingReviews = [
  {
    platform: "Google Reviews",
    rating: 5,
    text: "Exceptional hospitality — the concierge team was outstanding.",
    author: "Sarah M.",
    color: "#4285F4",
    letter: "G",
  },
  {
    platform: "Booking.com",
    rating: 4,
    text: "Beautiful resort, breakfast was superb. Highly recommend.",
    author: "Jean-Pierre D.",
    color: "#003580",
    letter: "B",
  },
  {
    platform: "Talabat",
    rating: 2,
    text: "Delivery was late again. Need to improve the service.",
    author: "Ahmed K.",
    color: "#FF6600",
    letter: "T",
  },
  {
    platform: "TripAdvisor",
    rating: 5,
    text: "Best hotel in Cairo. Will definitely return next year.",
    author: "Emma L.",
    color: "#00AA6C",
    letter: "T",
  },
];

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5">
      {[1, 2, 3, 4, 5].map((s) => (
        <Star
          key={s}
          className={`w-3 h-3 ${s <= rating ? "text-[#D69E2E] fill-[#D69E2E]" : "text-[#ECE4DA]"}`}
        />
      ))}
    </div>
  );
}

function FloatingReviewCard({
  review,
  className,
}: {
  review: (typeof floatingReviews)[0];
  className?: string;
}) {
  return (
    <div
      className={`absolute bg-white rounded-2xl p-3.5 card-shadow border border-[#ECE4DA] w-56 ${className}`}
    >
      <div className="flex items-center gap-2 mb-2">
        <div
          className="w-6 h-6 rounded-lg flex items-center justify-center text-white text-[10px] font-bold flex-shrink-0"
          style={{ backgroundColor: review.color }}
        >
          {review.letter}
        </div>
        <span className="text-[10px] font-semibold text-[#9E8F83]">
          {review.platform}
        </span>
        <StarRating rating={review.rating} />
      </div>
      <p className="text-xs text-[#2D241C] leading-relaxed mb-1.5">
        &ldquo;{review.text}&rdquo;
      </p>
      <p className="text-[10px] text-[#9E8F83]">— {review.author}</p>
    </div>
  );
}

export default function HeroSection() {
  return (
    <section className="relative bg-[#FFFDF9] overflow-hidden">
      {/* Subtle background pattern */}
      <div
        className="absolute inset-0 opacity-40"
        style={{
          backgroundImage:
            "radial-gradient(circle at 20% 50%, rgba(217,117,66,0.06) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(214,158,46,0.05) 0%, transparent 50%)",
        }}
      />

      <div className="max-w-7xl mx-auto px-6 pt-20 pb-32 relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="relative z-10">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-[#F4E0A3]/50 border border-[#D69E2E]/20 rounded-full px-3 py-1.5 mb-8">
              <Sparkles className="w-3.5 h-3.5 text-[#D97542]" />
              <span className="text-xs font-semibold text-[#B07A10]">
                AI-Powered Hospitality Intelligence
              </span>
            </div>

            <h1 className="text-5xl lg:text-6xl font-bold text-[#2D241C] leading-[1.08] tracking-tight mb-6">
              Your Reputation.{" "}
              <span className="ai-gradient-text">Intelligently</span>{" "}
              Managed.
            </h1>

            <p className="text-lg text-[#6F6258] leading-relaxed mb-8 max-w-lg">
              SEET aggregates reviews from 9+ platforms, uses AI to detect
              issues before they escalate, and gives hospitality leaders
              actionable intelligence — across every restaurant, café, hotel,
              and resort.
            </p>

            {/* Stats row */}
            <div className="flex flex-wrap gap-6 mb-10">
              {[
                { label: "Reviews Analyzed", value: "2.4M+" },
                { label: "Properties Monitored", value: "850+" },
                { label: "Platforms Connected", value: "9+" },
                { label: "MENA Countries", value: "14" },
              ].map((stat) => (
                <div key={stat.label}>
                  <p className="text-2xl font-bold text-[#2D241C]">
                    {stat.value}
                  </p>
                  <p className="text-xs text-[#9E8F83]">{stat.label}</p>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-3">
              <Link href="/demo">
                <Button variant="primary" size="lg">
                  Book a Free Demo
                  <ArrowRight className="w-4 h-4 ml-1" />
                </Button>
              </Link>
              <Link href="/dashboard">
                <Button variant="secondary" size="lg">
                  View Live Dashboard
                </Button>
              </Link>
            </div>

            {/* Trust badges */}
            <div className="flex flex-wrap items-center gap-4 mt-8">
              {[
                { icon: <Shield className="w-3.5 h-3.5" />, text: "GDPR Compliant" },
                { icon: <Zap className="w-3.5 h-3.5" />, text: "Real-time Sync" },
                { icon: <TrendingUp className="w-3.5 h-3.5" />, text: "Predictive AI" },
              ].map((item) => (
                <div
                  key={item.text}
                  className="flex items-center gap-1.5 text-xs text-[#9E8F83]"
                >
                  <span className="text-[#D97542]">{item.icon}</span>
                  {item.text}
                </div>
              ))}
            </div>
          </div>

          {/* Right — Hero Image + Floating Cards */}
          <div className="relative h-[520px] hidden lg:block">
            {/* Main image */}
            <div className="absolute inset-8 rounded-3xl overflow-hidden card-shadow border border-[#ECE4DA]">
              <img
                src="https://images.pexels.com/photos/26729406/pexels-photo-26729406.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200"
                alt="Luxury hospitality interior"
                className="w-full h-full object-cover"
              />
              {/* Light overlay to keep it warm */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#FFFDF9]/20 to-transparent" />
            </div>

            {/* Floating review cards */}
            <FloatingReviewCard
              review={floatingReviews[0]}
              className="-left-4 top-16 shadow-lg"
            />
            <FloatingReviewCard
              review={floatingReviews[1]}
              className="-right-4 top-32 shadow-lg"
            />
            <FloatingReviewCard
              review={floatingReviews[2]}
              className="-left-4 bottom-32 shadow-lg"
            />
            <FloatingReviewCard
              review={floatingReviews[3]}
              className="-right-4 bottom-16 shadow-lg"
            />

            {/* AI Analysis Badge */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white rounded-2xl p-4 card-shadow border border-[#ECE4DA] z-10 min-w-[180px]">
              <div className="flex items-center gap-2 mb-2">
                <div className="w-7 h-7 rounded-xl ai-gradient flex items-center justify-center">
                  <Sparkles className="w-3.5 h-3.5 text-white" />
                </div>
                <span className="text-xs font-bold text-[#2D241C]">
                  AI Analysis
                </span>
              </div>
              <div className="space-y-1.5">
                <div>
                  <div className="flex justify-between text-[10px] mb-0.5">
                    <span className="text-[#6F6258]">Sentiment</span>
                    <span className="font-bold text-green-600">78%</span>
                  </div>
                  <div className="h-1.5 bg-[#F3EDE6] rounded-full overflow-hidden">
                    <div
                      className="h-full bg-green-500 rounded-full"
                      style={{ width: "78%" }}
                    />
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-[10px] mb-0.5">
                    <span className="text-[#6F6258]">Response Rate</span>
                    <span className="font-bold text-[#D97542]">68%</span>
                  </div>
                  <div className="h-1.5 bg-[#F3EDE6] rounded-full overflow-hidden">
                    <div
                      className="h-full bg-[#D97542] rounded-full"
                      style={{ width: "68%" }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Wave divider */}
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-[#FCF8F3]" 
        style={{clipPath: "ellipse(60% 100% at 50% 100%)"}} />
    </section>
  );
}
