"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { LayoutDashboard, Users, ArrowLeft, X } from "lucide-react";
import Logo from "./Logo";

const items = [
  { href: "/admin", label: "Analytics", icon: LayoutDashboard },
  { href: "/admin/users", label: "User management", icon: Users },
];

export default function AdminSidebar({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  const pathname = usePathname();

  return (
    <>
      {open && (
        <div
          className="fixed inset-0 z-30 bg-ink/40 backdrop-blur-sm md:hidden"
          onClick={onClose}
        />
      )}
      <aside
        className={`fixed inset-y-0 left-0 z-40 flex w-64 flex-col border-r border-white/5 bg-nova-950 p-5 transition-transform md:sticky md:top-0 md:h-screen md:translate-x-0 ${
          open ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between">
          <Logo className="[&_span]:text-white" />
          <button
            onClick={onClose}
            className="rounded-lg p-1 text-white/50 hover:bg-white/5 md:hidden"
          >
            <X size={18} />
          </button>
        </div>
        <p className="mt-1 text-xs font-medium uppercase tracking-widest text-white/30">
          Admin console
        </p>

        <nav className="mt-8 flex flex-1 flex-col gap-1">
          {items.map(({ href, label, icon: Icon }) => {
            const active = pathname === href;
            return (
              <Link
                key={href}
                href={href}
                onClick={onClose}
                className={`flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium transition ${
                  active
                    ? "bg-nova-400/15 text-nova-300"
                    : "text-white/50 hover:bg-white/5 hover:text-white"
                }`}
              >
                <Icon size={17} />
                {label}
              </Link>
            );
          })}
        </nav>

        <Link
          href="/dashboard"
          className="flex items-center gap-2 rounded-xl border-t border-white/5 pt-4 text-sm font-medium text-white/50 hover:text-white"
        >
          <ArrowLeft size={15} /> Back to wallet
        </Link>
      </aside>
    </>
  );
}
