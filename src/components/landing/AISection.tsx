import { Sparkles, TrendingUp, Brain, Bell, MessageSquare } from "lucide-react";

const aiCapabilities = [
  {
    icon: <Brain className="w-4 h-4" />,
    title: "Sentiment Analysis",
    desc: "Understands Arabic & English reviews with context-aware NLP",
  },
  {
    icon: <Bell className="w-4 h-4" />,
    title: "Predictive Alerts",
    desc: "Flags risks 3–7 days before rating drops occur",
  },
  {
    icon: <TrendingUp className="w-4 h-4" />,
    title: "Trend Forecasting",
    desc: "Projects reputation trajectory based on current patterns",
  },
  {
    icon: <MessageSquare className="w-4 h-4" />,
    title: "Smart Reply",
    desc: "Brand-appropriate response generation in seconds",
  },
];

export default function AISection() {
  return (
    <section id="ai-platform" className="py-24 bg-[#FCF8F3]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left */}
          <div>
            <div className="inline-flex items-center gap-2 bg-[#F4E0A3]/60 border border-[#D69E2E]/20 rounded-full px-3 py-1.5 mb-6">
              <Sparkles className="w-3.5 h-3.5 text-[#D97542]" />
              <span className="text-xs font-semibold text-[#B07A10]">
                AI Intelligence Engine
              </span>
            </div>

            <h2 className="text-4xl font-bold text-[#2D241C] mb-6 leading-tight">
              Reputation intelligence that thinks ahead of the problem
            </h2>

            <p className="text-base text-[#6F6258] leading-relaxed mb-8">
              SEET&apos;s AI doesn&apos;t just analyze what happened — it predicts
              what&apos;s about to happen. Using patterns across thousands of
              hospitality reviews, SEET gives your team a 3–7 day early warning
              on reputation risks before they reach your guests.
            </p>

            <div className="space-y-3">
              {aiCapabilities.map((cap) => (
                <div
                  key={cap.title}
                  className="flex items-start gap-3 bg-white rounded-xl p-4 card-shadow border border-[#ECE4DA]"
                >
                  <div className="w-8 h-8 rounded-xl ai-gradient flex items-center justify-center text-white flex-shrink-0">
                    {cap.icon}
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-[#2D241C]">
                      {cap.title}
                    </p>
                    <p className="text-xs text-[#6F6258] mt-0.5">{cap.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right — AI Card Showcase */}
          <div className="space-y-4">
            {/* Prediction Card */}
            <div className="bg-white rounded-2xl p-5 card-shadow border border-[#ECE4DA]">
              <div className="flex items-start justify-between mb-3">
                <div className="flex items-center gap-2">
                  <div className="w-7 h-7 rounded-xl ai-gradient flex items-center justify-center">
                    <Sparkles className="w-3.5 h-3.5 text-white" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-[#2D241C]">SEET AI Prediction</p>
                    <p className="text-[10px] text-[#9E8F83]">Confidence: 92%</p>
                  </div>
                </div>
                <span className="text-[10px] font-semibold bg-amber-50 text-amber-700 px-2 py-0.5 rounded-full">
                  ⚠ Warning
                </span>
              </div>
              <p className="text-sm font-semibold text-[#2D241C] mb-1">
                Housekeeping Score Drop Predicted
              </p>
              <p className="text-xs text-[#6F6258] leading-relaxed mb-3">
                Based on the last 72 hours of review patterns at Sofitel Sharm,
                SEET predicts a 0.4-point drop in the Cleanliness score on
                Booking.com within 5 days unless corrective action is taken.
              </p>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-1.5">
                  <div className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
                  <span className="text-[10px] text-[#9E8F83]">Sofitel Sharm El Sheikh</span>
                </div>
                <button className="text-xs font-semibold text-[#D97542] hover:text-[#C86433]">
                  Alert Housekeeping →
                </button>
              </div>
            </div>

            {/* Smart Reply Card */}
            <div className="bg-white rounded-2xl p-5 card-shadow border border-[#ECE4DA]">
              <div className="flex items-center gap-2 mb-3">
                <div className="w-7 h-7 rounded-xl ai-gradient flex items-center justify-center">
                  <MessageSquare className="w-3.5 h-3.5 text-white" />
                </div>
                <p className="text-xs font-bold text-[#2D241C]">Smart Reply — Generated</p>
              </div>
              <div className="bg-[#FCF8F3] rounded-xl p-3 mb-3">
                <p className="text-xs text-[#6F6258] italic">
                  &quot;The room service was extremely slow — waited over 45 minutes for
                  breakfast...&quot;
                </p>
              </div>
              <div className="bg-[#F4E0A3]/30 border border-[#D69E2E]/20 rounded-xl p-3">
                <p className="text-[10px] font-semibold text-[#B07A10] mb-1.5 uppercase tracking-wide">
                  ✦ AI Suggested Reply
                </p>
                <p className="text-xs text-[#2D241C] leading-relaxed">
                  Dear Ahmed, thank you for taking the time to share your
                  experience. We sincerely apologize for the delay in your room
                  service and the missed housekeeping visits — this falls well
                  below our standards. We have shared your feedback directly
                  with our F&B and Housekeeping managers...
                </p>
              </div>
              <div className="flex gap-2 mt-3">
                <button className="flex-1 text-xs font-semibold bg-[#D97542] text-white rounded-lg py-1.5 hover:bg-[#C86433] transition-colors">
                  Approve & Post
                </button>
                <button className="flex-1 text-xs font-semibold border border-[#ECE4DA] text-[#6F6258] rounded-lg py-1.5 hover:bg-[#FCF8F3] transition-colors">
                  Edit Reply
                </button>
              </div>
            </div>

            {/* Arabic Sentiment */}
            <div className="bg-white rounded-2xl p-5 card-shadow border border-[#ECE4DA]">
              <div className="flex items-center gap-2 mb-3">
                <div className="w-7 h-7 rounded-xl ai-gradient flex items-center justify-center">
                  <Brain className="w-3.5 h-3.5 text-white" />
                </div>
                <div>
                  <p className="text-xs font-bold text-[#2D241C]">Arabic Sentiment Analysis</p>
                  <p className="text-[10px] text-[#9E8F83]">Egyptian Arabic NLP</p>
                </div>
              </div>
              <div className="bg-[#FCF8F3] rounded-xl p-3 mb-3 text-right" dir="rtl">
                <p className="text-sm text-[#2D241C]">
                  الأكل كان تمام بس الخدمة كانت بطيئة جداً وده مش مناسب للسعر ده
                </p>
              </div>
              <div className="grid grid-cols-3 gap-2">
                {[
                  { label: "Food", sentiment: "Positive", pct: 85, color: "green" },
                  { label: "Service", sentiment: "Negative", pct: 28, color: "red" },
                  { label: "Value", sentiment: "Negative", pct: 35, color: "red" },
                ].map((item) => (
                  <div
                    key={item.label}
                    className="bg-[#FCF8F3] rounded-xl p-2.5 text-center"
                  >
                    <p className="text-[10px] text-[#9E8F83]">{item.label}</p>
                    <p
                      className={`text-xs font-bold mt-0.5 ${
                        item.color === "green" ? "text-green-600" : "text-red-600"
                      }`}
                    >
                      {item.sentiment}
                    </p>
                    <p className="text-[10px] text-[#9E8F83]">{item.pct}%</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
