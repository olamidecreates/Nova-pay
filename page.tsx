"use client";

import { useMemo, useState } from "react";
import { Search, MoreVertical } from "lucide-react";
import { adminUsers as seedUsers, AdminUser, formatMoney } from "@/lib/mockData";

const statusStyle: Record<AdminUser["status"], string> = {
  active: "bg-emerald-500/10 text-emerald-500",
  suspended: "bg-rose-500/10 text-rose-500",
};

const kycStyle: Record<AdminUser["kyc"], string> = {
  verified: "bg-nova-400/10 text-nova-400",
  pending: "bg-amber-500/10 text-amber-500",
  unverified: "bg-ink/10 text-ink/50 dark:bg-white/10 dark:text-white/50",
};

export default function AdminUsersPage() {
  const [users, setUsers] = useState<AdminUser[]>(seedUsers);
  const [query, setQuery] = useState("");
  const [menuFor, setMenuFor] = useState<string | null>(null);

  const filtered = useMemo(
    () =>
      users.filter(
        (u) =>
          u.name.toLowerCase().includes(query.toLowerCase()) ||
          u.email.toLowerCase().includes(query.toLowerCase())
      ),
    [users, query]
  );

  const toggleStatus = (id: string) => {
    setUsers((prev) =>
      prev.map((u) =>
        u.id === id ? { ...u, status: u.status === "active" ? "suspended" : "active" } : u
      )
    );
    setMenuFor(null);
  };

  return (
    <div className="mx-auto max-w-6xl">
      <div className="mb-5 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div className="relative w-full sm:max-w-xs">
          <Search size={15} className="absolute left-3 top-1/2 -translate-y-1/2 text-ink/40 dark:text-white/40" />
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search by name or email"
            className="w-full rounded-xl border border-ink/10 bg-white py-2.5 pl-9 pr-3 text-sm outline-none focus:border-nova-400 focus:ring-2 focus:ring-nova-400/20 dark:border-white/10 dark:bg-nova-900 dark:text-white"
          />
        </div>
        <p className="text-sm text-ink/45 dark:text-white/45">{filtered.length} users</p>
      </div>

      <div className="overflow-x-auto rounded-2xl border border-ink/5 bg-white shadow-soft dark:border-white/5 dark:bg-nova-900">
        <table className="w-full min-w-[720px] text-sm">
          <thead>
            <tr className="border-b border-ink/5 text-left text-xs uppercase tracking-wide text-ink/40 dark:border-white/5 dark:text-white/40">
              <th className="px-5 py-3 font-medium">User</th>
              <th className="px-5 py-3 font-medium">Joined</th>
              <th className="px-5 py-3 font-medium">Balance</th>
              <th className="px-5 py-3 font-medium">KYC</th>
              <th className="px-5 py-3 font-medium">Status</th>
              <th className="px-5 py-3" />
            </tr>
          </thead>
          <tbody>
            {filtered.map((u) => (
              <tr key={u.id} className="border-b border-ink/5 last:border-0 dark:border-white/5">
                <td className="px-5 py-3.5">
                  <div className="flex items-center gap-3">
                    <span className="flex h-8 w-8 items-center justify-center rounded-full bg-nova-gradient text-xs font-semibold text-white">
                      {u.name.split(" ").map((n) => n[0]).slice(0, 2).join("")}
                    </span>
                    <div className="min-w-0">
                      <p className="truncate font-medium text-ink dark:text-white">{u.name}</p>
                      <p className="truncate text-xs text-ink/45 dark:text-white/45">{u.email}</p>
                    </div>
                  </div>
                </td>
                <td className="px-5 py-3.5 text-ink/60 dark:text-white/60">
                  {new Date(u.joined).toLocaleDateString("en-NG", { day: "numeric", month: "short", year: "numeric" })}
                </td>
                <td className="ledger px-5 py-3.5 text-ink dark:text-white">{formatMoney(u.balance)}</td>
                <td className="px-5 py-3.5">
                  <span className={`rounded-full px-2.5 py-1 text-xs font-medium capitalize ${kycStyle[u.kyc]}`}>
                    {u.kyc}
                  </span>
                </td>
                <td className="px-5 py-3.5">
                  <span className={`rounded-full px-2.5 py-1 text-xs font-medium capitalize ${statusStyle[u.status]}`}>
                    {u.status}
                  </span>
                </td>
                <td className="relative px-5 py-3.5 text-right">
                  <button
                    onClick={() => setMenuFor(menuFor === u.id ? null : u.id)}
                    className="rounded-lg p-1.5 text-ink/40 hover:bg-ink/5 dark:text-white/40 dark:hover:bg-white/5"
                  >
                    <MoreVertical size={16} />
                  </button>
                  {menuFor === u.id && (
                    <div className="absolute right-5 top-11 z-10 w-40 rounded-xl border border-ink/5 bg-white py-1 text-left shadow-card dark:border-white/5 dark:bg-nova-800">
                      <button
                        onClick={() => toggleStatus(u.id)}
                        className="block w-full px-4 py-2 text-left text-sm text-ink hover:bg-ink/5 dark:text-white dark:hover:bg-white/5"
                      >
                        {u.status === "active" ? "Suspend user" : "Reactivate user"}
                      </button>
                      <button
                        onClick={() => setMenuFor(null)}
                        className="block w-full px-4 py-2 text-left text-sm text-ink/60 hover:bg-ink/5 dark:text-white/60 dark:hover:bg-white/5"
                      >
                        View details
                      </button>
                    </div>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="mt-3 text-xs text-ink/40 dark:text-white/40">
        Actions here are simulated for demonstration and only affect local state.
      </p>
    </div>
  );
}
