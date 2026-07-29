# MMA Spot

Premium MMA platform — Next.js 15 (App Router) + TypeScript + Tailwind + shadcn/ui + Supabase.

## Milestone 1 status: Project foundation ✅

- Next.js 15 project structure
- TypeScript (strict mode, `@/*` path alias to `src/*`)
- Tailwind CSS, configured for shadcn/ui's CSS-variable theming convention
- shadcn/ui wired up (`components.json`, `cn()` helper, first primitive: `Button`)

## Getting started locally

This project was generated in a sandboxed environment without npm registry
access, so dependencies aren't installed yet. On your machine:

```bash
npm install
npm run dev
```

Then open http://localhost:3000 — you should see "MMA Spot — Foundation OK"
with a working shadcn Button, confirming Tailwind and the component pipeline
are wired correctly.

## What's intentionally NOT here yet

- Supabase client setup (next milestone)
- next-intl / locale routing (next milestone — `src/app/page.tsx` and
  `layout.tsx` will move under `src/app/[locale]/`)
- Design system tokens (`globals.css` currently uses shadcn's generic neutral
  placeholder theme, not MMA Spot's brand palette/type)
- Navigation, footer, or any business features

## Scripts

| Command | Purpose |
|---|---|
| `npm run dev` | Start the dev server |
| `npm run build` | Production build |
| `npm run start` | Run the production build |
| `npm run lint` | ESLint |
| `npm run typecheck` | `tsc --noEmit` |
