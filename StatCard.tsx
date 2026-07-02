import { LucideIcon } from "lucide-react";

export default function StatCard({
  icon: Icon,
  label,
  value,
  trend,
}: {
  icon: LucideIcon;
  label: string;
  value: string;
  trend?: { positive: boolean; text: string };
}) {
  return (
    <div className="rounded-2xl border border-ink/5 bg-white p-5 shadow-soft dark:border-white/5 dark:bg-nova-900">
      <div className="flex items-center justify-between">
        <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-nova-100 text-nova-500 dark:bg-nova-800 dark:text-nova-300">
          <Icon size={16} />
        </span>
        {trend && (
          <span className={`text-xs font-medium ${trend.positive ? "text-emerald-500" : "text-rose-500"}`}>
            {trend.text}
          </span>
        )}
      </div>
      <p className="mt-4 text-xs text-ink/45 dark:text-white/45">{label}</p>
      <p className="ledger mt-1 text-xl font-semibold text-ink dark:text-white">{value}</p>
    </div>
  );
}
