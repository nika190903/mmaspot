export default function Footer() {
  return (
    <footer className="border-t border-zinc-900 bg-zinc-950">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-14 md:grid-cols-3">
        <div>
          <div className="flex items-center gap-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-red-600 text-sm font-black text-white">
              M
            </div>

            <span className="text-xl font-extrabold text-white">
              MMA <span className="text-red-500">Spot</span>
            </span>
          </div>

          <p className="mt-5 max-w-sm text-sm leading-6 text-zinc-500">
            MMA news, events, rankings, fantasy and fighter statistics in
            Georgian and English.
          </p>
        </div>

        <div>
          <h3 className="font-bold text-white">Platform</h3>

          <div className="mt-5 flex flex-col gap-3 text-sm text-zinc-500">
            <a href="#news" className="transition hover:text-white">
              News
            </a>
            <a href="#events" className="transition hover:text-white">
              Events
            </a>
            <a href="#rankings" className="transition hover:text-white">
              Rankings
            </a>
            <a href="#fantasy" className="transition hover:text-white">
              Fantasy
            </a>
          </div>
        </div>

        <div>
          <h3 className="font-bold text-white">Languages</h3>

          <p className="mt-5 text-sm leading-6 text-zinc-500">
            Georgian and English versions will be available through the
            language switcher.
          </p>
        </div>
      </div>

      <div className="border-t border-zinc-900 px-6 py-6 text-center text-xs text-zinc-600">
        © 2026 MMA Spot. All rights reserved.
      </div>
    </footer>
  );
}