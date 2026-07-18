import Sidebar from "./Sidebar";
import type { ReactNode } from "react";

interface DashboardLayoutProps {
  children: ReactNode;
  isSuperAdmin?: boolean;
}

export default function DashboardLayout({
  children,
  isSuperAdmin = false,
}: DashboardLayoutProps) {
  return (
    <div className="flex h-screen bg-[#FFFDF9] overflow-hidden">
      <Sidebar isSuperAdmin={isSuperAdmin} />
      <main className="flex-1 overflow-y-auto">
        {children}
      </main>
    </div>
  );
}
