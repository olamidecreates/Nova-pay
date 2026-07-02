import { CheckCircle2 } from "lucide-react";
import { ReactNode } from "react";

export default function SuccessState({
  title,
  amount,
  detail,
  actions,
}: {
  title: string;
  amount: string;
  detail: string;
  actions: ReactNode;
}) {
  return (
    <div className="flex flex-col items-center gap-4 rounded-3xl border border-ink/5 bg-white p-10 text-center shadow-soft animate-fade-up dark:border-white/5 dark:bg-nova-900">
      <span className="flex h-14 w-14 items-center justify-center rounded-full bg-emerald-500/10 text-emerald-500">
        <CheckCircle2 size={28} />
      </span>
      <div>
        <p className="text-sm text-ink/50 dark:text-white/50">{title}</p>
        <p className="ledger mt-1 text-3xl font-semibold text-ink dark:text-white">{amount}</p>
        <p className="mt-2 text-sm text-ink/50 dark:text-white/50">{detail}</p>
      </div>
      <div className="mt-2 flex w-full flex-col gap-2 sm:flex-row sm:justify-center">{actions}</div>
    </div>
  );
}
