import { ReactNode } from "react";
import Link from "next/link";
import Logo from "./Logo";
import DemoBadge from "./DemoBadge";

export default function AuthShell({
  children,
  eyebrow,
  title,
  subtitle,
}: {
  children: ReactNode;
  eyebrow: string;
  title: string;
  subtitle: string;
}) {
  return (
    <main className="grid min-h-screen md:grid-cols-2">
      <section className="relative hidden flex-col justify-between bg-nova-gradient p-10 text-white md:flex">
        <Link href="/">
          <Logo className="[&_span]:text-white" />
        </Link>
        <div className="max-w-sm animate-fade-up">
          <DemoBadge className="mb-6 border-white/25 bg-white/10 text-white" />
          <h2 className="font-display text-3xl font-bold leading-tight">
            The wallet built for how you actually move money.
          </h2>
          <p className="mt-4 text-sm text-white/60">
            Every screen here — balance, card, transfers, admin console — is
            simulated for demonstration. Explore freely.
          </p>
        </div>
        <p className="text-xs text-white/40">
          © 2026 NovaPay Studio · Portfolio project by Olamide Creative Studio
        </p>
      </section>

      <section className="flex items-center justify-center bg-mist px-6 py-12 dark:bg-nova-950">
        <div className="w-full max-w-sm animate-fade-up">
          <div className="mb-8 md:hidden">
            <Link href="/">
              <Logo />
            </Link>
          </div>
          <p className="text-xs font-semibold uppercase tracking-widest text-nova-400">
            {eyebrow}
          </p>
          <h1 className="mt-2 font-display text-2xl font-bold text-ink dark:text-white">
            {title}
          </h1>
          <p className="mt-1 text-sm text-ink/50 dark:text-white/50">{subtitle}</p>
          <div className="mt-8">{children}</div>
        </div>
      </section>
    </main>
  );
}
