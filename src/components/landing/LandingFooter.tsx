import { Sparkles } from "lucide-react";
import Link from "next/link";

const footerLinks = {
  Product: ["Features", "AI Platform", "Pricing", "Changelog", "Roadmap"],
  Company: ["About SEET", "Careers", "Press", "Partners", "Contact"],
  Resources: ["Documentation", "API Reference", "Blog", "Case Studies", "Webinars"],
  Legal: ["Privacy Policy", "Terms of Service", "GDPR", "Cookie Policy"],
};

export default function LandingFooter() {
  return (
    <footer className="bg-[#FCF8F3] border-t border-[#ECE4DA]">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-xl ai-gradient flex items-center justify-center">
                <Sparkles className="w-4 h-4 text-white" />
              </div>
              <span className="text-xl font-bold text-[#2D241C]">SEET</span>
            </div>
            <p className="text-sm text-[#6F6258] leading-relaxed mb-4">
              AI-powered hospitality reputation intelligence for the MENA
              region. Built for restaurants, hotels, and resorts.
            </p>
            <div className="flex gap-2">
              {["LinkedIn", "Twitter", "YouTube"].map((social) => (
                <a
                  key={social}
                  href="#"
                  className="w-8 h-8 rounded-xl border border-[#ECE4DA] bg-white flex items-center justify-center text-[10px] font-bold text-[#9E8F83] hover:text-[#D97542] hover:border-[#D97542] transition-colors"
                >
                  {social[0]}
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <p className="text-xs font-semibold text-[#2D241C] uppercase tracking-wider mb-4">
                {category}
              </p>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link}>
                    <Link
                      href="#"
                      className="text-sm text-[#6F6258] hover:text-[#D97542] transition-colors"
                    >
                      {link}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 pt-8 border-t border-[#ECE4DA] flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-[#9E8F83]">
            © 2024 SEET Technologies. All rights reserved. Built for the MENA
            hospitality industry.
          </p>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-1.5">
              <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              <span className="text-xs text-[#9E8F83]">All systems operational</span>
            </div>
            <span className="text-xs text-[#9E8F83]">Cairo, Egypt 🇪🇬</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
