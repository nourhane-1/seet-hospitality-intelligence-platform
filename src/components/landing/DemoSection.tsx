"use client";
import { useState } from "react";
import Button from "@/components/ui/Button";
import Input from "@/components/ui/Input";
import { CheckCircle2, Sparkles } from "lucide-react";

export default function DemoSection() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    name: "",
    title: "",
    company: "",
    email: "",
    phone: "",
    properties: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    await new Promise((r) => setTimeout(r, 1200));
    setLoading(false);
    setSubmitted(true);
  };

  return (
    <section id="demo" className="py-24 bg-[#FFFDF9]">
      <div className="max-w-5xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left */}
          <div>
            <div className="inline-flex items-center gap-2 bg-[#F4E0A3]/60 border border-[#D69E2E]/20 rounded-full px-3 py-1.5 mb-6">
              <Sparkles className="w-3.5 h-3.5 text-[#D97542]" />
              <span className="text-xs font-semibold text-[#B07A10]">
                Free Personalized Demo
              </span>
            </div>
            <h2 className="text-4xl font-bold text-[#2D241C] mb-4 leading-tight">
              See SEET in action with your properties
            </h2>
            <p className="text-base text-[#6F6258] leading-relaxed mb-8">
              Our team will walk you through a live demo tailored to your
              hospitality group — using real data from your platforms and
              markets.
            </p>

            <div className="space-y-4">
              {[
                "Live walkthrough with your property data",
                "AI sentiment analysis demo in Arabic & English",
                "Predictive alerts configured for your brands",
                "Implementation timeline and pricing walkthrough",
                "Q&A with our hospitality product team",
              ].map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-[#D97542] flex-shrink-0 mt-0.5" />
                  <p className="text-sm text-[#6F6258]">{item}</p>
                </div>
              ))}
            </div>

            <div className="mt-10 bg-[#FCF8F3] rounded-2xl border border-[#ECE4DA] p-5">
              <p className="text-xs font-semibold text-[#6F6258] uppercase tracking-wide mb-3">
                Typical Onboarding Timeline
              </p>
              <div className="space-y-2">
                {[
                  { step: "Day 1", label: "Platforms connected & syncing" },
                  { step: "Day 2", label: "AI model calibrated for your brands" },
                  { step: "Day 3", label: "First actionable insights delivered" },
                  { step: "Day 7", label: "Full team trained & dashboard live" },
                ].map((s) => (
                  <div key={s.step} className="flex items-center gap-3">
                    <div className="w-12 flex-shrink-0">
                      <span className="text-xs font-bold text-[#D97542]">
                        {s.step}
                      </span>
                    </div>
                    <div className="flex-1 h-px bg-[#ECE4DA]" />
                    <span className="text-xs text-[#6F6258]">{s.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right — Form */}
          <div className="bg-white rounded-3xl card-shadow border border-[#ECE4DA] p-8">
            {submitted ? (
              <div className="text-center py-12">
                <div className="w-16 h-16 rounded-full bg-green-50 flex items-center justify-center mx-auto mb-4">
                  <CheckCircle2 className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-xl font-bold text-[#2D241C] mb-2">
                  Demo Request Received!
                </h3>
                <p className="text-sm text-[#6F6258]">
                  Our team will reach out within 24 hours to schedule your
                  personalized demo.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <h3 className="text-lg font-bold text-[#2D241C] mb-1">
                    Book Your Free Demo
                  </h3>
                  <p className="text-xs text-[#9E8F83]">
                    No commitment required. Response within 24 hours.
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <Input
                    label="Full Name"
                    placeholder="Sara Ahmed"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    required
                  />
                  <Input
                    label="Job Title"
                    placeholder="VP Operations"
                    value={form.title}
                    onChange={(e) => setForm({ ...form, title: e.target.value })}
                    required
                  />
                </div>
                <Input
                  label="Company / Group Name"
                  placeholder="Marriott Egypt Group"
                  value={form.company}
                  onChange={(e) => setForm({ ...form, company: e.target.value })}
                  required
                />
                <div className="grid grid-cols-2 gap-3">
                  <Input
                    label="Work Email"
                    type="email"
                    placeholder="sara@company.com"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    required
                  />
                  <Input
                    label="Phone"
                    type="tel"
                    placeholder="+20 100 000 0000"
                    value={form.phone}
                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                  />
                </div>
                <div>
                  <label className="text-sm font-medium text-[#2D241C] mb-1.5 block">
                    Number of Properties
                  </label>
                  <select
                    className="w-full h-10 rounded-xl border border-[#ECE4DA] bg-white px-3 text-sm text-[#2D241C] focus:outline-none focus:ring-2 focus:ring-[#D97542]/30 focus:border-[#D97542]"
                    value={form.properties}
                    onChange={(e) =>
                      setForm({ ...form, properties: e.target.value })
                    }
                  >
                    <option value="">Select range...</option>
                    <option>1–5 properties</option>
                    <option>6–20 properties</option>
                    <option>21–50 properties</option>
                    <option>50+ properties</option>
                  </select>
                </div>
                <div>
                  <label className="text-sm font-medium text-[#2D241C] mb-1.5 block">
                    Additional Notes
                  </label>
                  <textarea
                    className="w-full rounded-xl border border-[#ECE4DA] bg-white px-3 py-2.5 text-sm text-[#2D241C] placeholder:text-[#B5A89E] focus:outline-none focus:ring-2 focus:ring-[#D97542]/30 focus:border-[#D97542] resize-none"
                    placeholder="Tell us about your hospitality group..."
                    rows={3}
                    value={form.message}
                    onChange={(e) =>
                      setForm({ ...form, message: e.target.value })
                    }
                  />
                </div>

                <Button
                  variant="primary"
                  size="lg"
                  className="w-full"
                  type="submit"
                  loading={loading}
                >
                  {loading ? "Submitting..." : "Book Free Demo"}
                </Button>

                <p className="text-center text-[10px] text-[#9E8F83]">
                  By submitting, you agree to our Privacy Policy. We only use
                  your information to schedule your demo.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
