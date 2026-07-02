"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import AdminSidebar from "@/components/AdminSidebar";
import Topbar from "@/components/Topbar";

const titles: Record<string, string> = {
  "/admin": "Analytics",
  "/admin/users": "User management",
};

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();
  const title = titles[pathname] ?? "Admin console";

  return (
    <div className="flex min-h-screen bg-mist dark:bg-nova-950">
      <AdminSidebar open={menuOpen} onClose={() => setMenuOpen(false)} />
      <div className="flex min-h-screen flex-1 flex-col">
        <Topbar onMenuClick={() => setMenuOpen(true)} title={title} />
        <main className="flex-1 px-5 py-6 md:px-8 md:py-8">{children}</main>
      </div>
    </div>
  );
}
