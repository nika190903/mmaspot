export default function RankingsSection() {
  const fighters = [
    {
      rank: 1,
      name: "Fighter One",
      division: "Lightweight",
      record: "18-0",
    },
    {
      rank: 2,
      name: "Fighter Two",
      division: "Bantamweight",
      record: "22-4",
    },
    {
      rank: 3,
      name: "Fighter Three",
      division: "Featherweight",
      record: "17-2",
    },
    {
      rank: 4,
      name: "Fighter Four",
      division: "Welterweight",
      record: "20-3",
    },
  ];

  return (
    <section id="rankings" className="mx-auto max-w-7xl px-6 py-24">
      <div className="mb-12 flex items-end justify-between gap-6">
        <div>
          <p className="text-sm font-bold uppercase tracking-[0.25em] text-red-500">
            UFC P4P Standings
          </p>

          <h2 className="mt-3 text-3xl font-black text-white sm:text-4xl">
            Rankings
          </h2>
        </div>

        <button className="text-sm font-semibold text-red-500 transition hover:text-red-400">
          Full Rankings →
        </button>
      </div>

      <div className="overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-950">
        {fighters.map((fighter) => (
          <div
            key={fighter.rank}
            className="grid grid-cols-[50px_1fr_auto] items-center gap-4 border-b border-zinc-800 px-5 py-5 last:border-b-0 sm:grid-cols-[70px_1fr_160px_100px]"
          >
            <span className="text-2xl font-black text-red-500">
              {fighter.rank}
            </span>

            <div>
              <h3 className="font-bold text-white">{fighter.name}</h3>
              <p className="mt-1 text-sm text-zinc-500 sm:hidden">
                {fighter.division}
              </p>
            </div>

            <span className="hidden text-sm text-zinc-400 sm:block">
              {fighter.division}
            </span>

            <span className="text-right text-sm font-bold text-zinc-300">
              {fighter.record}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}