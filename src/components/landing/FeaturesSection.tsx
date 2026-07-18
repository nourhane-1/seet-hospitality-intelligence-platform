import {
  BarChart3,
  Bell,
  Brain,
  Globe,
  MessageSquare,
  Shield,
  TrendingUp,
  Users,
  Zap,
} from "lucide-react";

const features = [
  {
    icon: <Globe className="w-5 h-5" />,
    title: "Multi-Platform Aggregation",
    description:
      "Automatically collect reviews from Google, TripAdvisor, Booking.com, Agoda, Talabat, Elmenus, and 4 more platforms — all in one unified feed.",
    color: "#4285F4",
    bg: "bg-blue-50",
  },
  {
    icon: <Brain className="w-5 h-5" />,
    title: "Arabic Sentiment AI",
    description:
      "Deep NLP trained on Egyptian Arabic (Masri) and MENA dialects. Understands colloquial expressions, sarcasm, and regional sentiment nuances.",
    color: "#D97542",
    bg: "bg-orange-50",
  },
  {
    icon: <Bell className="w-5 h-5" />,
    title: "Predictive Alerts",
    description:
      "SEET's AI detects emerging issues before they escalate — alerting the right department 3–7 days ahead of a rating drop.",
    color: "#DC2626",
    bg: "bg-red-50",
  },
  {
    icon: <MessageSquare className="w-5 h-5" />,
    title: "Smart Reply Generator",
    description:
      "AI generates brand-appropriate, empathetic responses in Arabic and English for every review — ready to approve with one click.",
    color: "#16A34A",
    bg: "bg-green-50",
  },
  {
    icon: <BarChart3 className="w-5 h-5" />,
    title: "Executive Dashboards",
    description:
      "Purpose-built for hospitality leaders — property comparisons, brand benchmarking, department-level heatmaps, and trend analysis.",
    color: "#D69E2E",
    bg: "bg-amber-50",
  },
  {
    icon: <Users className="w-5 h-5" />,
    title: "Department Routing",
    description:
      "Issues are automatically routed to Front Office, Housekeeping, F&B, Kitchen, Delivery, or Guest Relations with full context.",
    color: "#3B82F6",
    bg: "bg-blue-50",
  },
  {
    icon: <TrendingUp className="w-5 h-5" />,
    title: "Competitive Benchmarking",
    description:
      "Compare your properties and brands against competitors across the same city, region, or category — powered by real review data.",
    color: "#D97542",
    bg: "bg-orange-50",
  },
  {
    icon: <Zap className="w-5 h-5" />,
    title: "What-if Simulator",
    description:
      "Model the reputation impact of operational changes before you make them — staffing increases, new policies, menu changes.",
    color: "#9333EA",
    bg: "bg-purple-50",
  },
  {
    icon: <Shield className="w-5 h-5" />,
    title: "Multi-Brand, Multi-Property",
    description:
      "Designed for enterprise hospitality groups. Manage 1 or 100+ properties across multiple brands and countries from a single platform.",
    color: "#6F6258",
    bg: "bg-stone-50",
  },
];

export default function FeaturesSection() {
  return (
    <section id="features" className="py-24 bg-[#FFFDF9]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-xs font-semibold text-[#D97542] uppercase tracking-widest mb-3">
            Platform Capabilities
          </p>
          <h2 className="text-4xl font-bold text-[#2D241C] mb-4">
            Everything your hospitality group needs
          </h2>
          <p className="text-lg text-[#6F6258] max-w-2xl mx-auto">
            From a single café branch to a portfolio of 50+ hotels — SEET gives
            every level of your organization the intelligence to act fast.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="bg-white rounded-2xl p-6 card-shadow border border-[#ECE4DA] hover:card-shadow-hover transition-all duration-200 group"
            >
              <div
                className={`w-10 h-10 rounded-xl ${feature.bg} flex items-center justify-center mb-4`}
                style={{ color: feature.color }}
              >
                {feature.icon}
              </div>
              <h3 className="text-base font-semibold text-[#2D241C] mb-2">
                {feature.title}
              </h3>
              <p className="text-sm text-[#6F6258] leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Comparison table */}
        <div className="mt-20 bg-white rounded-3xl card-shadow border border-[#ECE4DA] overflow-hidden">
          <div className="px-8 py-6 border-b border-[#ECE4DA]">
            <h3 className="text-xl font-bold text-[#2D241C]">
              SEET vs. Generic Review Tools
            </h3>
            <p className="text-sm text-[#6F6258] mt-1">
              Purpose-built for hospitality. Not an afterthought.
            </p>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-[#ECE4DA] bg-[#FCF8F3]">
                  <th className="text-left text-xs font-semibold text-[#6F6258] px-8 py-3">
                    Capability
                  </th>
                  <th className="text-center text-xs font-bold text-[#D97542] px-6 py-3">
                    SEET
                  </th>
                  <th className="text-center text-xs font-semibold text-[#9E8F83] px-6 py-3">
                    Generic Tools
                  </th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["Arabic NLP (Egyptian Dialect)", true, false],
                  ["Hospitality-Specific Department Routing", true, false],
                  ["Predictive Reputation Alerts (3–7 days ahead)", true, false],
                  ["Talabat & Elmenus Integration", true, false],
                  ["Multi-Brand / Multi-Property Hierarchy", true, false],
                  ["AI Smart Reply in Arabic + English", true, false],
                  ["What-if Scenario Simulator", true, false],
                  ["Executive Hospitality Dashboards", true, false],
                  ["Basic Review Aggregation", true, true],
                  ["Response Management", true, true],
                ].map(([feature, seet, generic], i) => (
                  <tr
                    key={String(feature)}
                    className={`border-b border-[#F3EDE6] ${i % 2 === 0 ? "" : "bg-[#FFFDF9]"}`}
                  >
                    <td className="px-8 py-3.5 text-sm text-[#2D241C]">
                      {String(feature)}
                    </td>
                    <td className="px-6 py-3.5 text-center">
                      {seet ? (
                        <span className="text-green-600 font-bold text-base">✓</span>
                      ) : (
                        <span className="text-[#ECE4DA] font-bold">—</span>
                      )}
                    </td>
                    <td className="px-6 py-3.5 text-center">
                      {generic ? (
                        <span className="text-green-600 font-bold text-base">✓</span>
                      ) : (
                        <span className="text-red-400 font-bold text-base">✕</span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
}
