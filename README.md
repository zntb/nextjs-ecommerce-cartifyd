
# Cartifyd – A Next.js E-commerce Starter

[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)](#license)
[![Built with Next.js](https://img.shields.io/badge/Built%20with-Next.js-black.svg)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-ready-blue.svg)](https://www.typescriptlang.org/)

**Live preview:** <https://nextjs-ecommerce-cartifyd-hwyh.vercel.app>

---

## Problem

Most e-commerce starters fall into two buckets:

- **Too barebones**: you spend days wiring routing, state, auth, and a CMS before you can add features.
- **Too monolithic/opinionated**: difficult to customize or swap parts (UI, auth, or CMS) without rewriting core flows.
- **Unclear architecture**: newcomers struggle to find where data, UI, and state actually live.
- **Slow to iterate**: no clear seed data or local setup, so onboarding is painful.

## Solution

**Cartifyd** is a composable starter that focuses on the essentials of a store—catalog, product details, and a shopping cart—while keeping the stack modern and swappable:

- **Next.js (App Router) + TypeScript** for performance and DX.
- **Sanity** as a content-first product catalog (products, categories, rich content).
- **Clerk** for authentication pages and session management (opt-in).
- **Tailwind + shadcn/ui** for a clean, extensible component system.

Use it as a learning project, a prototype, or the base for a full storefront.

---

## Features

- ✅ Modern **Next.js App Router** structure with server-first data loading.
- ✅ **Product catalog** and content types backed by **Sanity**.
- ✅ **Auth-ready** via **Clerk** (sign-in/up components wired and middleware scaffolded).
- ✅ **Shopping cart primitives** and UI components to power add/remove/update flows.
- ✅ **Accessible, responsive UI** using **Tailwind** and **shadcn/ui**.
- ✅ Developer-friendly patterns: colocated components, reusable hooks, and typed utilities.

> Note: Payment/checkout is intentionally left unopinionated so you can integrate Stripe, Paddle, or your provider of choice.

---

## Tech Stack

- **Framework:** Next.js (App Router), TypeScript  
- **UI:** Tailwind CSS, shadcn/ui  
- **Auth:** Clerk  
- **CMS:** Sanity  
- **Tooling:** ESLint, Prettier

---

## Getting Started

### 1) Clone & Install

```bash
git clone https://github.com/zntb/nextjs-ecommerce-cartifyd.git
cd nextjs-ecommerce-cartifyd
# Choose one:
pnpm install
# or
yarn install
# or
npm install
# or
bun install
```

### 2) Configure environment variables

Create a `.env.local` at the project root and supply the required keys for Sanity and Clerk.

```bash
# .env.local (example — adjust to your setup)
# Clerk
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=pk_***************
CLERK_SECRET_KEY=sk_***************

# Sanity
NEXT_PUBLIC_SANITY_PROJECT_ID=xxxxxx
NEXT_PUBLIC_SANITY_DATASET=production
SANITY_API_READ_TOKEN=***************
```

> Tip: Double-check `sanity.config.ts`, any auth middleware, and API utilities to confirm variable names used in this repo.

### 3) (Optional) Seed content

If you intend to use the provided sample data, import it into your Sanity project (see the `sanity/` folder and any included seed files).

### 4) Run the app

```bash
# Dev
pnpm dev
# or
yarn dev
# or
npm run dev
# or
bun dev

# Build & start
pnpm build && pnpm start
```

Open `http://localhost:3000` in your browser.

---

## Project Structure

```text
.
├─ app/                # App Router routes, layouts, and server components
├─ components/         # Reusable UI & feature components (shadcn/ui-based)
├─ constants/          # Shared constants (routes, enums, etc.)
├─ hooks/              # Reusable React/Next hooks (client/server)
├─ lib/                # Utilities (Sanity client, helpers, types)
├─ sanity/             # Sanity schema & config
├─ images/             # Static assets
├─ middleware.ts       # Auth & route protection (Clerk)
├─ store.ts            # UI/state primitives (e.g., cart)
└─ ...
```

---

## Customization

* **Design system:** Extend Tailwind and shadcn/ui components for consistent theming.
* **Auth:** Swap Clerk for another provider if preferred—keep the middleware contract.
* **CMS:** Sanity schemas are modular; add fields and content types as your catalog grows.
* **Payments:** Integrate Stripe or your gateway of choice; wire it into the cart/checkout pages.

---

## Roadmap (suggested)

* [ ] Product search & filters
* [ ] Wishlists / saved items
* [ ] Server-side cart with persistence
* [ ] Checkout integration (Stripe)
* [ ] Webhooks for order lifecycle
* [ ] E2E tests (Playwright)

---

## Contributing

Contributions are welcome!
Open a PR with a clear description and screenshots/GIFs when UI changes are involved.

---

## License

MIT — see [LICENSE](./LICENSE) for details.

---

## Acknowledgements

* [Next.js](https://nextjs.org/)
* [Sanity](https://www.sanity.io/)
* [Clerk](https://clerk.com/)
* [shadcn/ui](https://ui.shadcn.com/)
* [Tailwind CSS](https://tailwindcss.com/)

---

**Suggested branch & PR**

* Branch name: `docs/readme-overhaul`
* PR title: `docs(readme): overhaul README with clear problem statement, setup, and roadmap`

**One-liner to create the branch, commit, and push**


```bash
git checkout -b docs/readme-overhaul \
&& mv /path/to/Downloaded/README.md README.md \
&& git add README.md \
&& git commit -m "docs(readme): add comprehensive README with problem, solution, setup, and roadmap" \
&& git push -u origin docs/readme-overhaul
```

