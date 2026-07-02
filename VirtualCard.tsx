import { Sparkles, Wifi } from "lucide-react";
import { currentUser } from "@/lib/mockData";

export default function VirtualCard({ frozen = false }: { frozen?: boolean }) {
  return (
    <div
      className={`relative aspect-[16/10] w-full max-w-sm overflow-hidden rounded-3xl bg-nova-gradient p-6 text-white shadow-card transition ${
        frozen ? "grayscale" : ""
      }`}
    >
      <div className="card-sheen-anim absolute inset-0 bg-card-sheen bg-[length:200%_100%]" />
      <div className="relative flex h-full flex-col justify-between">
        <div className="flex items-start justify-between">
          <div>
            <p className="text-xs uppercase tracking-widest text-white/60">
              {currentUser.tier}
            </p>
            <p className="mt-0.5 text-sm font-medium text-white/85">NovaPay</p>
          </div>
          <div className="flex items-center gap-2">
            <Wifi size={18} className="rotate-90 text-white/70" />
            <Sparkles size={18} className="text-gold-light" />
          </div>
        </div>

        <div>
          <div className="mb-3 h-7 w-10 rounded-md bg-gold-light/80" />
          <p className="ledger text-xl tracking-widest text-white md:text-2xl">
            {currentUser.cardNumber}
          </p>
          <div className="mt-4 flex items-center justify-between text-xs text-white/70">
            <div>
              <p className="text-[10px] uppercase tracking-wide text-white/40">
                Card holder
              </p>
              <p className="ledger mt-0.5 text-sm text-white/90">
                {currentUser.cardHolder}
              </p>
            </div>
            <div className="text-right">
              <p className="text-[10px] uppercase tracking-wide text-white/40">
                Expires
              </p>
              <p className="ledger mt-0.5 text-sm text-white/90">
                {currentUser.cardExpiry}
              </p>
            </div>
          </div>
        </div>
      </div>
      {frozen && (
        <div className="absolute inset-0 flex items-center justify-center bg-ink/40 backdrop-blur-[2px]">
          <span className="rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-ink">
            Card frozen
          </span>
        </div>
      )}
    </div>
  );
}
