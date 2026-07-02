import { ArrowDownLeft, ArrowUpRight, Download, Upload } from "lucide-react";
import { Transaction, formatMoney } from "@/lib/mockData";

const typeMeta: Record<
  Transaction["type"],
  { icon: typeof ArrowDownLeft; label: string; credit: boolean; tint: string }
> = {
  receive: { icon: ArrowDownLeft, label: "Received", credit: true, tint: "bg-emerald-500/10 text-emerald-500" },
  send: { icon: ArrowUpRight, label: "Sent", credit: false, tint: "bg-rose-500/10 text-rose-500" },
  "add-money": { icon: Download, label: "Added money", credit: true, tint: "bg-nova-400/10 text-nova-400" },
  withdraw: { icon: Upload, label: "Withdrew", credit: false, tint: "bg-amber-500/10 text-amber-500" },
};

const statusTint: Record<Transaction["status"], string> = {
  completed: "text-emerald-500",
  pending: "text-amber-500",
  failed: "text-rose-500",
};

export default function TransactionRow({ txn }: { txn: Transaction }) {
  const meta = typeMeta[txn.type];
  const Icon = meta.icon;
  const date = new Date(txn.date);

  return (
    <div className="flex items-center justify-between gap-3 border-b border-ink/5 py-3.5 last:border-0 dark:border-white/5">
      <div className="flex min-w-0 items-center gap-3">
        <span className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full ${meta.tint}`}>
          <Icon size={16} />
        </span>
        <div className="min-w-0">
          <p className="truncate text-sm font-medium text-ink dark:text-white">
            {txn.counterparty}
          </p>
          <p className="truncate text-xs text-ink/45 dark:text-white/45">
            {meta.label} · {date.toLocaleDateString("en-NG", { day: "numeric", month: "short" })}
          </p>
        </div>
      </div>
      <div className="shrink-0 text-right">
        <p className={`ledger text-sm font-semibold ${meta.credit ? "text-emerald-500" : "text-ink dark:text-white"}`}>
          {meta.credit ? "+" : "-"}
          {formatMoney(txn.amount)}
        </p>
        <p className={`text-[11px] capitalize ${statusTint[txn.status]}`}>{txn.status}</p>
      </div>
    </div>
  );
}
