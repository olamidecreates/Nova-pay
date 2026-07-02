import Link from "next/link";
import { LucideIcon } from "lucide-react";

export default function QuickAction({
  href,
  icon: Icon,
  label,
}: {
  href: string;
  icon: LucideIcon;
  label: string;
}) {
  return (
    <Link
      href={href}
      className="flex flex-col items-center gap-2 rounded-2xl border border-ink/5 bg-white px-4 py-4 text-center shadow-soft transition hover:-translate-y-0.5 hover:shadow-card dark:border-white/5 dark:bg-nova-900"
    >
      <span className="flex h-11 w-11 items-center justify-center rounded-full bg-nova-gradient text-white">
        <Icon size={18} />
      </span>
      <span className="text-xs font-medium text-ink/70 dark:text-white/70">{label}</span>
    </Link>
  );
}
