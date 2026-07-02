"use client";

import Link from "next/link";
import { Menu, Bell } from "lucide-react";
import ThemeToggle from "./ThemeToggle";
import { useWallet } from "@/context/WalletProvider";
import { currentUser } from "@/lib/mockData";

export default function Topbar({
  onMenuClick,
  title,
}: {
  onMenuClick: () => void;
  title: string;
}) {
  const { unreadCount } = useWallet();

  return (
    <header className="sticky top-0 z-20 flex items-center justify-between border-b border-ink/5 bg-mist/80 px-5 py-4 backdrop-blur dark:border-white/5 dark:bg-nova-950/80 md:px-8">
      <div className="flex items-center gap-3">
        <button
          onClick={onMenuClick}
          className="rounded-lg p-1.5 text-ink/70 hover:bg-ink/5 dark:text-white/70 dark:hover:bg-white/5 md:hidden"
        >
          <Menu size={20} />
        </button>
        <h1 className="font-display text-lg font-semibold text-ink dark:text-white">
          {title}
        </h1>
      </div>

      <div className="flex items-center gap-3">
        <ThemeToggle />
        <Link
          href="/dashboard/notifications"
          className="relative flex h-9 w-9 items-center justify-center rounded-full border border-ink/10 text-ink/70 transition hover:bg-ink/5 dark:border-white/10 dark:text-white/70 dark:hover:bg-white/5"
        >
          <Bell size={16} />
          {unreadCount > 0 && (
            <span className="absolute -right-0.5 -top-0.5 flex h-4 w-4 items-center justify-center rounded-full bg-nova-400 text-[10px] font-semibold text-white">
              {unreadCount}
            </span>
          )}
        </Link>
        <Link href="/dashboard/profile">
          <span className="flex h-9 w-9 items-center justify-center rounded-full bg-nova-gradient text-xs font-semibold text-white">
            {currentUser.avatarInitials}
          </span>
        </Link>
      </div>
    </header>
  );
}
