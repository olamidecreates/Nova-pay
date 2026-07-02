# NovaPay — Demo Fintech Wallet

A portfolio project: a modern, premium fintech wallet UI built with **Next.js 14 (App Router), TypeScript, and Tailwind CSS**.

> ⚠️ **This is a demo only.** No real bank, card network, or payment gateway is connected. All balances, transactions, and users are simulated in local state and reset on refresh.

## Stack

- Next.js 14 (App Router) + TypeScript
- Tailwind CSS (custom deep-blue / white "NovaPay" theme, dark mode via class strategy)
- Recharts (analytics charts)
- Framer-motion-ready (Tailwind keyframes used for the lightweight animations already in place)
- lucide-react icons

## Structure

```
app/
  page.tsx                 landing page
  login/ signup/ forgot-password/
  dashboard/                wallet app (sidebar shell)
    page.tsx                 overview
    send/ receive/ add-money/ withdraw/
    transactions/ card/ notifications/ profile/ settings/
  admin/                    admin console (separate shell)
    page.tsx                 analytics
    users/                   user management
components/                shared UI (VirtualCard, TransactionRow, charts, forms…)
context/                    ThemeProvider (dark mode) + WalletProvider (simulated state)
lib/mockData.ts             all sample users, transactions, notifications, analytics data
```

## Run locally

```bash
npm install
npm run dev
```

Open http://localhost:3000. The login page has demo credentials pre-filled — just hit **Continue**.

## Deploy (GitHub + Netlify, works from mobile)

1. Create a new GitHub repo and push this folder to it (GitHub's mobile web UI or the GitHub app supports creating a repo and uploading files if you don't have git on your phone; alternatively use a Git client app like Working Copy/Termux).
2. In Netlify: **Add new site → Import an existing project → GitHub** → pick the repo.
3. Build command: `npm run build` — Publish directory: `.next` (already set in `netlify.toml`, along with the `@netlify/plugin-nextjs` plugin Netlify needs for Next.js).
4. Deploy. Every push to `main` will auto-deploy, same as your other NovaPay/Olamide Creative Studio sites.

## Customizing

- **Colors/fonts**: `tailwind.config.ts` (the `nova` color scale + `gold` accent) and `app/layout.tsx` (Google Fonts: Space Grotesk, Inter, IBM Plex Mono).
- **Sample data**: everything lives in `lib/mockData.ts` — swap in your own names, amounts, and dates.
- **Simulated actions**: `context/WalletProvider.tsx` holds the balance/transactions/notifications state and the `simulate()` function used by Send/Receive/Add Money/Withdraw.
