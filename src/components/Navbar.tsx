import { Button } from "@/components/ui/button";

export default function Navbar() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-zinc-900 bg-black/90 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 sm:px-6">
        <a href="#" className="flex items-center gap-3">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-red-600 text-sm font-black text-white">
            M
          </div>

          <span className="text-xl font-extrabold tracking-tight text-white">
            MMA <span className="text-red-500">Spot</span>
          </span>
        </a>

        <nav className="hidden items-center gap-8 text-sm font-semibold text-zinc-400 md:flex">
          <a href="#news" className="transition hover:text-white">
            News
          </a>

          <a href="#events" className="transition hover:text-white">
            Events
          </a>

          <a href="#fighters" className="transition hover:text-white">
            Fighters
          </a>

          <a href="#rankings" className="transition hover:text-white">
            Rankings
          </a>

          <a href="#fantasy" className="transition hover:text-white">
            Fantasy
          </a>
        </nav>

        <div className="flex items-center gap-3">
          <button
            type="button"
            aria-label="Change language"
            className="rounded-lg border border-zinc-800 px-3 py-2 text-xs font-bold text-white transition hover:border-red-500"
          >
            KA / EN
          </button>

          <Button className="hidden bg-red-600 text-white hover:bg-red-700 sm:inline-flex">
            Sign In
          </Button>
        </div>
      </div>
    </header>
  );
}