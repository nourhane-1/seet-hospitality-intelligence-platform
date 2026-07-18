"use client";
import { useState } from "react";
import Link from "next/link";
import { Sparkles, Eye, EyeOff, Mail, Lock } from "lucide-react";
import Button from "@/components/ui/Button";
import Input from "@/components/ui/Input";

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({ email: "", password: "" });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    await new Promise((r) => setTimeout(r, 1000));
    window.location.href = "/dashboard";
  };

  return (
    <div className="min-h-screen bg-[#FFFDF9] flex">
      {/* Left — Form */}
      <div className="flex-1 flex items-center justify-center px-8 py-12">
        <div className="w-full max-w-sm">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5 mb-10">
            <div className="w-9 h-9 rounded-xl ai-gradient flex items-center justify-center">
              <Sparkles className="w-4.5 h-4.5 text-white" />
            </div>
            <span className="text-xl font-bold text-[#2D241C]">SEET</span>
          </Link>

          <h1 className="text-2xl font-bold text-[#2D241C] mb-1.5">
            Welcome back
          </h1>
          <p className="text-sm text-[#6F6258] mb-8">
            Sign in to your SEET dashboard
          </p>

          <form onSubmit={handleSubmit} className="space-y-4">
            <Input
              label="Email Address"
              type="email"
              placeholder="sara@company.com"
              icon={<Mail className="w-4 h-4" />}
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              required
            />
            <Input
              label="Password"
              type={showPassword ? "text" : "password"}
              placeholder="••••••••"
              icon={<Lock className="w-4 h-4" />}
              iconRight={
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="hover:text-[#6F6258]"
                >
                  {showPassword ? (
                    <EyeOff className="w-4 h-4" />
                  ) : (
                    <Eye className="w-4 h-4" />
                  )}
                </button>
              }
              value={form.password}
              onChange={(e) => setForm({ ...form, password: e.target.value })}
              required
            />

            <div className="flex items-center justify-between">
              <label className="flex items-center gap-2 cursor-pointer">
                <input type="checkbox" className="w-4 h-4 accent-[#D97542]" />
                <span className="text-xs text-[#6F6258]">Remember me</span>
              </label>
              <Link
                href="/forgot-password"
                className="text-xs text-[#D97542] hover:text-[#C86433] font-medium"
              >
                Forgot password?
              </Link>
            </div>

            <Button
              variant="primary"
              size="lg"
              className="w-full"
              type="submit"
              loading={loading}
            >
              Sign In
            </Button>
          </form>

          <div className="mt-6 text-center">
            <p className="text-xs text-[#9E8F83]">
              Don&apos;t have an account?{" "}
              <Link
                href="/demo"
                className="text-[#D97542] hover:text-[#C86433] font-medium"
              >
                Book a demo
              </Link>
            </p>
          </div>

          <div className="mt-8 pt-6 border-t border-[#F3EDE6]">
            <p className="text-[10px] text-[#9E8F83] text-center">
              Protected by enterprise-grade security. All data is encrypted at
              rest and in transit.
            </p>
          </div>
        </div>
      </div>

      {/* Right — Visual */}
      <div className="hidden lg:flex flex-1 bg-[#FCF8F3] border-l border-[#ECE4DA] items-center justify-center p-12 relative">
        <div
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage:
              "radial-gradient(circle at 30% 70%, rgba(217,117,66,0.15) 0%, transparent 50%)",
          }}
        />
        <div className="relative max-w-md text-center z-10">
          <div className="bg-white rounded-3xl p-8 card-shadow border border-[#ECE4DA] mb-6">
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl ai-gradient flex items-center justify-center">
                <Sparkles className="w-5 h-5 text-white" />
              </div>
              <div className="text-left">
                <p className="text-sm font-bold text-[#2D241C]">
                  AI Morning Brief
                </p>
                <p className="text-[10px] text-[#9E8F83]">Dec 15, 2024 — 9:00 AM</p>
              </div>
            </div>

            <div className="space-y-3 text-left">
              {[
                {
                  label: "Critical alert",
                  text: "Cairo Kitchen Maadi: 7 negative reviews in 3 hours — delivery issues",
                  color: "text-red-600 bg-red-50",
                },
                {
                  label: "Prediction",
                  text: "Sofitel Sharm: Housekeeping score predicted to drop in 5 days",
                  color: "text-amber-700 bg-amber-50",
                },
                {
                  label: "Opportunity",
                  text: "Hilton Hurghada: Breakfast praised in 41% of 4-star reviews",
                  color: "text-green-700 bg-green-50",
                },
              ].map((item) => (
                <div
                  key={item.label}
                  className="flex items-start gap-2.5 p-3 bg-[#FCF8F3] rounded-xl"
                >
                  <span
                    className={`text-[9px] font-bold px-1.5 py-0.5 rounded-full uppercase ${item.color} flex-shrink-0`}
                  >
                    {item.label}
                  </span>
                  <p className="text-xs text-[#2D241C]">{item.text}</p>
                </div>
              ))}
            </div>
          </div>

          <p className="text-sm font-semibold text-[#2D241C] mb-1">
            Your AI reputation team, always on.
          </p>
          <p className="text-xs text-[#9E8F83]">
            SEET monitors 47,832 reviews so you don&apos;t miss a single insight.
          </p>
        </div>
      </div>
    </div>
  );
}
