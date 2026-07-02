"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutGrid,
  Send,
  Download,
  PlusCircle,
  ArrowUpFromLine,
  Receipt,
  CreditCard,
  Bell,
  User,
  Settings,
  ShieldCheck,
  X,
} from "lucide-react";
import Logo from "./Logo";

const navItems = [
  { href: "/dashboard", label: "Overview", icon: LayoutGrid },
  { href: "/dashboard/send", label: "Send", icon: Send },
  { href: "/dashboard/receive", label: "Receive", icon: Download },
  { href: "/dashboard/add-money", label: "Add money", icon: PlusCircle },
  { href: "/dashboard/withdraw", label: "Withdraw", icon: ArrowUpFromLine },
  { href: "/dashboard/transactions", label: "Transactions", icon: Receipt },
  { href: "/dashboard/card", label: "Card", icon: CreditCard },
  { href: "/dashboard/notifications", label: "Notifications", icon: Bell },
];

const bottomItems = [
  { href: "/dashboard/profile", label: "Profile", icon: User },
  { href: "/dashboard/settings", label: "Settings", icon: Settings },
  { href: "/admin", label: "Admin console", icon: ShieldCheck },
];

export default function Sidebar({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  const pathname = usePathname();

  const NavLink = ({
    href,
    label,
    icon: Icon,
  }: {
    href: string;
    label: string;
    icon: typeof LayoutGrid;
  }) => {
    const active = pathname === href;
    return (
      <Link
        href={href}
        onClick={onClose}
        className={`flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium transition ${
          active
            ? "bg-nova-400/10 text-nova-400"
            : "text-ink/60 hover:bg-ink/5 hover:text-ink dark:text-white/60 dark:hover:bg-white/5 dark:hover:text-white"
        }`}
      >
        <Icon size={17} strokeWidth={2} />
        {label}
      </Link>
    );
  };

  return (
    <>
      {open && (
        <div
          className="fixed inset-0 z-30 bg-ink/40 backdrop-blur-sm md:hidden"
          onClick={onClose}
        />
      )}
      <aside
        className={`fixed inset-y-0 left-0 z-40 flex w-64 flex-col border-r border-ink/5 bg-white p-5 transition-transform dark:border-white/5 dark:bg-nova-900 md:sticky md:top-0 md:h-screen md:translate-x-0 ${
          open ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between">
          <Logo />
          <button
            onClick={onClose}
            className="rounded-lg p-1 text-ink/50 hover:bg-ink/5 dark:text-white/50 md:hidden"
          >
            <X size={18} />
          </button>
        </div>

        <nav className="mt-8 flex flex-1 flex-col gap-1">
          {navItems.map((item) => (
            <NavLink key={item.href} {...item} />
          ))}
        </nav>

        <div className="flex flex-col gap-1 border-t border-ink/5 pt-3 dark:border-white/5">
          {bottomItems.map((item) => (
            <NavLink key={item.href} {...item} />
          ))}
        </div>
      </aside>
    </>
  );
}
