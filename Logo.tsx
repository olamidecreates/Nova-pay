import { Zap } from "lucide-react";

export default function Logo({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-nova-gradient text-white shadow-soft">
        <Zap size={16} strokeWidth={2.5} fill="currentColor" />
      </span>
      <span className="font-display text-lg font-bold tracking-tight text-ink dark:text-white">
        Nova<span className="text-nova-400">Pay</span>
      </span>
    </div>
  );
}
