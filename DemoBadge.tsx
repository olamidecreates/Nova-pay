export default function DemoBadge({ className = "" }: { className?: string }) {
  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full border border-gold/40 bg-gold/10 px-3 py-1 text-xs font-medium text-[#8a6c22] dark:text-gold-light ${className}`}
    >
      <span className="h-1.5 w-1.5 rounded-full bg-gold" />
      Demo mode — simulated funds, no real bank connected
    </span>
  );
}
