"use client";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import type { ReactNode } from "react";
import {
  LayoutDashboard,
  Star,
  Bell,
  Building2,
  Store,
  BarChart3,
  MessageSquare,
  Brain,
  TrendingUp,
  Settings,
  Users,
  Globe,
  ChevronDown,
  Sparkles,
  FlaskConical,
  Shield,
  FileText,
  Bot,
} from "lucide-react";

interface NavItem {
  label: string;
  href: string;
  icon: ReactNode;
  badge?: string;
  badgeVariant?: "ai" | "warning" | "danger";
  isAI?: boolean;
  children?: NavItem[];
}

const mainNav: NavItem[] = [
  {
    label: "Dashboard",
    href: "/dashboard",
    icon: <LayoutDashboard className="w-4 h-4" />,
  },
  {
    label: "Reviews",
    href: "/dashboard/reviews",
    icon: <Star className="w-4 h-4" />,
    badge: "2.4K",
  },
  {
    label: "Alerts",
    href: "/dashboard/alerts",
    icon: <Bell className="w-4 h-4" />,
    badge: "14",
    badgeVariant: "danger",
  },
  {
    label: "Brands",
    href: "/dashboard/brands",
    icon: <Building2 className="w-4 h-4" />,
  },
  {
    label: "Properties",
    href: "/dashboard/properties",
    icon: <Store className="w-4 h-4" />,
  },
  {
    label: "Departments",
    href: "/dashboard/departments",
    icon: <Users className="w-4 h-4" />,
  },
];

const analyticsNav: NavItem[] = [
  {
    label: "Benchmark",
    href: "/dashboard/benchmark",
    icon: <BarChart3 className="w-4 h-4" />,
  },
  {
    label: "Platform Analytics",
    href: "/dashboard/platform-analytics",
    icon: <Globe className="w-4 h-4" />,
  },
];

const aiNav: NavItem[] = [
  {
    label: "AI Assistant",
    href: "/dashboard/ai-assistant",
    icon: <Bot className="w-4 h-4" />,
    isAI: true,
  },
  {
    label: "Smart Reply",
    href: "/dashboard/smart-reply",
    icon: <MessageSquare className="w-4 h-4" />,
    isAI: true,
  },
  {
    label: "Predictive Analytics",
    href: "/dashboard/predictive",
    icon: <TrendingUp className="w-4 h-4" />,
    isAI: true,
  },
  {
    label: "What-if Simulator",
    href: "/dashboard/simulator",
    icon: <FlaskConical className="w-4 h-4" />,
    isAI: true,
  },
  {
    label: "Arabic Sentiment",
    href: "/dashboard/arabic-sentiment",
    icon: <Brain className="w-4 h-4" />,
    isAI: true,
  },
];

const settingsNav: NavItem[] = [
  {
    label: "Settings",
    href: "/dashboard/settings",
    icon: <Settings className="w-4 h-4" />,
  },
  {
    label: "Audit Logs",
    href: "/dashboard/audit-logs",
    icon: <FileText className="w-4 h-4" />,
  },
];

const superAdminNav: NavItem[] = [
  {
    label: "Organizations",
    href: "/admin/organizations",
    icon: <Building2 className="w-4 h-4" />,
  },
  {
    label: "Demo Requests",
    href: "/admin/demos",
    icon: <MessageSquare className="w-4 h-4" />,
    badge: "3",
    badgeVariant: "warning",
  },
  {
    label: "Users & Roles",
    href: "/admin/users",
    icon: <Users className="w-4 h-4" />,
  },
  {
    label: "Subscriptions",
    href: "/admin/subscriptions",
    icon: <Shield className="w-4 h-4" />,
  },
];

function NavLink({ item }: { item: NavItem }) {
  const pathname = usePathname();
  const isActive = pathname === item.href || pathname.startsWith(item.href + "/");

  return (
    <Link
      href={item.href}
      className={cn(
        "flex items-center gap-2.5 px-3 py-2 rounded-xl text-sm font-medium transition-all duration-150 group",
        isActive
          ? "bg-[#D97542]/10 text-[#D97542]"
          : "text-[#6F6258] hover:bg-[#FCF8F3] hover:text-[#2D241C]"
      )}
    >
      <span
        className={cn(
          "flex-shrink-0 transition-colors",
          isActive ? "text-[#D97542]" : "text-[#9E8F83] group-hover:text-[#6F6258]"
        )}
      >
        {item.icon}
      </span>
      <span className="flex-1 min-w-0 truncate">{item.label}</span>
      <div className="flex items-center gap-1">
        {item.isAI && (
          <span className="text-[9px] font-bold px-1.5 py-0.5 rounded-full bg-[#F4E0A3]/70 text-[#B07A10] uppercase tracking-wide">
            AI
          </span>
        )}
        {item.badge && (
          <span
            className={cn(
              "text-[10px] font-semibold px-1.5 py-0.5 rounded-full min-w-[18px] text-center",
              item.badgeVariant === "danger"
                ? "bg-red-100 text-red-700"
                : item.badgeVariant === "warning"
                ? "bg-amber-100 text-amber-700"
                : "bg-[#F3EDE6] text-[#6F6258]"
            )}
          >
            {item.badge}
          </span>
        )}
      </div>
    </Link>
  );
}

function NavSection({ label, items }: { label: string; items: NavItem[] }) {
  return (
    <div className="mb-4">
      <p className="text-[10px] font-semibold text-[#9E8F83] uppercase tracking-widest px-3 mb-1.5">
        {label}
      </p>
      <div className="space-y-0.5">
        {items.map((item) => (
          <NavLink key={item.href} item={item} />
        ))}
      </div>
    </div>
  );
}

interface SidebarProps {
  isSuperAdmin?: boolean;
}

export default function Sidebar({ isSuperAdmin = false }: SidebarProps) {
  return (
    <aside className="w-56 bg-white border-r border-[#ECE4DA] flex flex-col h-screen sticky top-0 flex-shrink-0">
      {/* Logo */}
      <div className="px-5 py-4 border-b border-[#F3EDE6]">
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-xl ai-gradient flex items-center justify-center flex-shrink-0">
            <Sparkles className="w-4 h-4 text-white" />
          </div>
          <div>
            <span className="text-lg font-bold text-[#2D241C] tracking-tight">
              SEET
            </span>
            <div className="text-[9px] text-[#9E8F83] font-medium uppercase tracking-widest leading-none">
              Reputation AI
            </div>
          </div>
        </div>
      </div>

      {/* Organization Selector */}
      <div className="px-3 py-3 border-b border-[#F3EDE6]">
        <button className="w-full flex items-center gap-2 px-3 py-2 rounded-xl bg-[#FCF8F3] hover:bg-[#F3EDE6] transition-colors group">
          <div className="w-6 h-6 rounded-lg bg-[#D97542]/15 flex items-center justify-center flex-shrink-0">
            <Building2 className="w-3 h-3 text-[#D97542]" />
          </div>
          <div className="flex-1 min-w-0 text-left">
            <p className="text-xs font-semibold text-[#2D241C] truncate">Marriott Egypt</p>
            <p className="text-[10px] text-[#9E8F83]">Enterprise Plan</p>
          </div>
          <ChevronDown className="w-3 h-3 text-[#9E8F83] group-hover:text-[#6F6258] flex-shrink-0" />
        </button>
      </div>

      {/* Navigation */}
      <nav className="flex-1 overflow-y-auto px-3 py-3 space-y-0">
        <NavSection label="Overview" items={mainNav} />
        <NavSection label="Analytics" items={analyticsNav} />
        <NavSection label="AI Intelligence" items={aiNav} />
        <NavSection label="System" items={settingsNav} />
        {isSuperAdmin && (
          <NavSection label="Super Admin" items={superAdminNav} />
        )}
      </nav>

      {/* User Profile */}
      <div className="px-3 py-3 border-t border-[#F3EDE6]">
        <button className="w-full flex items-center gap-2.5 px-3 py-2 rounded-xl hover:bg-[#FCF8F3] transition-colors group">
          <div className="w-7 h-7 rounded-full bg-gradient-to-br from-[#D97542] to-[#D69E2E] flex items-center justify-center flex-shrink-0">
            <span className="text-xs font-bold text-white">SA</span>
          </div>
          <div className="flex-1 min-w-0 text-left">
            <p className="text-xs font-semibold text-[#2D241C] truncate">Sara Ahmed</p>
            <p className="text-[10px] text-[#9E8F83]">Org Manager</p>
          </div>
          <ChevronDown className="w-3 h-3 text-[#9E8F83] flex-shrink-0" />
        </button>
      </div>
    </aside>
  );
}
