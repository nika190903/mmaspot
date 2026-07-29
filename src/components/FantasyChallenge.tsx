const fights = [
  {
    id: 1,
    label: "Main Event",
    fighterOne: "Islam Makhachev",
    fighterTwo: "Ian Machado Garry",
  },
  {
    id: 2,
    label: "Co-Main Event",
    fighterOne: "Fighter Name",
    fighterTwo: "Fighter Name",
  },
  {
    id: 3,
    label: "Main Card",
    fighterOne: "Fighter Name",
    fighterTwo: "Fighter Name",
  },
];

const leaderboard = [
  {
    position: 1,
    name: "FightOracle",
    points: 185,
  },
  {
    position: 2,
    name: "CageMaster",
    points: 175,
  },
  {
    position: 3,
    name: "GeoPredator",
    points: 165,
  },
];

export default function FantasyChallenge() {
  return (
    <section className="relative overflow-hidden bg-zinc-950 px-6 py-20">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(220,38,38,0.18),transparent_38%)]" />

      <div className="absolute -left-24 bottom-0 h-72 w-72 rounded-full bg-red-700/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl">
        <div className="grid gap-8 lg:grid-cols-[1.4fr_0.8fr]">
          <div className="overflow-hidden rounded-3xl border border-red-500/20 bg-black">
            <div className="border-b border-white/10 p-7 md:p-9">
              <div className="flex flex-col justify-between gap-6 md:flex-row md:items-start">
                <div>
                  <p className="mb-3 text-sm font-bold uppercase tracking-[0.3em] text-red-500">
                    UFC Fantasy
                  </p>

                  <h2 className="max-w-3xl text-4xl font-black uppercase leading-[0.95] text-white md:text-6xl">
                    Predict The Full Fight Card
                  </h2>

                  <p className="mt-5 max-w-2xl text-base leading-7 text-zinc-400">
                    Pick the winner of every fight, predict the method and
                    round, earn points, and compete against other MMA fans.
                  </p>
                </div>

                <div className="self-start rounded-2xl border border-red-500/30 bg-red-500/10 px-5 py-4 text-center">
                  <p className="text-3xl font-black text-white">12</p>

                  <p className="mt-1 text-[10px] font-bold uppercase tracking-[0.2em] text-red-400">
                    Total Fights
                  </p>
                </div>
              </div>
            </div>

            <div className="p-7 md:p-9">
              <div className="mb-6 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.2em] text-zinc-500">
                    Featured Event
                  </p>

                  <h3 className="mt-2 text-2xl font-black uppercase text-white md:text-3xl">
                    UFC 330
                  </h3>

                  <p className="mt-1 text-sm font-semibold text-zinc-500">
                    Makhachev vs. Machado Garry
                  </p>
                </div>

                <div className="rounded-full border border-white/10 bg-white/[0.04] px-5 py-3">
                  <p className="text-xs font-black uppercase tracking-wider text-white">
                    Picks Open
                  </p>
                </div>
              </div>

              <div className="space-y-4">
                {fights.map((fight, index) => (
                  <article
                    key={fight.id}
                    className="group rounded-2xl border border-white/10 bg-white/[0.03] p-5 transition hover:border-red-500/40 hover:bg-white/[0.05]"
                  >
                    <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
                      <div className="flex items-center gap-4">
                        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-red-500/30 bg-red-500/10 text-sm font-black text-red-400">
                          {index + 1}
                        </div>

                        <div>
                          <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-red-500">
                            {fight.label}
                          </p>

                          <div className="mt-2 flex flex-wrap items-center gap-2 text-lg font-black uppercase text-white">
                            <span>{fight.fighterOne}</span>

                            <span className="text-sm text-zinc-600">vs.</span>

                            <span>{fight.fighterTwo}</span>
                          </div>
                        </div>
                      </div>

                      <button className="rounded-full border border-white/15 px-5 py-3 text-xs font-black uppercase tracking-wider text-white transition hover:border-red-500 hover:bg-red-600">
                        Make Pick
                      </button>
                    </div>
                  </article>
                ))}
              </div>

              <div className="mt-7 rounded-2xl border border-white/10 bg-white/[0.03] p-5">
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <p className="text-sm font-black uppercase text-white">
                      Card Progress
                    </p>

                    <p className="mt-1 text-xs font-semibold text-zinc-500">
                      Complete all fight predictions before the event starts.
                    </p>
                  </div>

                  <p className="text-lg font-black text-white">0 / 12</p>
                </div>

                <div className="mt-4 h-2 overflow-hidden rounded-full bg-white/10">
                  <div className="h-full w-0 rounded-full bg-red-600" />
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-5 border-t border-white/10 p-7 md:flex-row md:items-center md:justify-between md:p-9">
              <div>
                <p className="text-sm font-bold uppercase tracking-wider text-white">
                  Predict Every Fight
                </p>

                <p className="mt-1 text-sm text-zinc-500">
                  Earn additional points for the correct method and round.
                </p>
              </div>

              <button className="rounded-full bg-red-600 px-8 py-4 text-sm font-black uppercase tracking-wider text-white transition hover:bg-red-500">
                Build Your Fantasy Card
              </button>
            </div>
          </div>

          <aside className="rounded-3xl border border-white/10 bg-black p-7 md:p-9">
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-sm font-bold uppercase tracking-[0.25em] text-red-500">
                  Event Leaderboard
                </p>

                <h3 className="mt-3 text-3xl font-black uppercase text-white">
                  Standings
                </h3>
              </div>

              <span className="rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-[10px] font-black uppercase tracking-[0.18em] text-zinc-400">
                Current Event
              </span>
            </div>

            <p className="mt-4 text-sm leading-6 text-zinc-500">
              Every UFC event has its own leaderboard. Points reset when the
              next fight card opens.
            </p>

            <div className="mt-8 space-y-4">
              {leaderboard.map((player) => (
                <div
                  key={player.position}
                  className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/[0.03] p-4"
                >
                  <div className="flex items-center gap-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-sm font-black text-black">
                      {player.position}
                    </div>

                    <div>
                      <p className="font-black text-white">{player.name}</p>

                      <p className="mt-1 text-xs uppercase tracking-wider text-zinc-600">
                        UFC 330 Player
                      </p>
                    </div>
                  </div>

                  <div className="text-right">
                    <p className="text-lg font-black text-white">
                      {player.points}
                    </p>

                    <p className="text-[10px] font-bold uppercase tracking-wider text-zinc-600">
                      Event Points
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-6 rounded-2xl border border-red-500/20 bg-red-500/10 p-5">
              <p className="text-xs font-black uppercase tracking-[0.2em] text-red-400">
                Scoring System
              </p>

              <div className="mt-4 space-y-3 text-sm font-semibold text-zinc-300">
                <div className="flex justify-between gap-4">
                  <span>Correct winner</span>
                  <span className="font-black text-white">+10</span>
                </div>

                <div className="flex justify-between gap-4">
                  <span>Correct method</span>
                  <span className="font-black text-white">+5</span>
                </div>

                <div className="flex justify-between gap-4">
                  <span>Correct round</span>
                  <span className="font-black text-white">+5</span>
                </div>
              </div>
            </div>

            <div className="mt-6 rounded-2xl border border-white/10 bg-white/[0.03] p-5">
              <p className="text-xs font-black uppercase tracking-[0.2em] text-zinc-400">
                New Event, New Winners
              </p>

              <p className="mt-3 text-sm leading-6 text-zinc-500">
                After UFC 330 ends, the final standings will be saved in Past
                Winners. The next event starts with everyone on zero points.
              </p>
            </div>

            <button className="mt-6 w-full rounded-full border border-white/15 px-5 py-4 text-sm font-black uppercase tracking-wider text-white transition hover:border-red-500 hover:bg-red-600">
              View UFC 330 Leaderboard
            </button>
          </aside>
        </div>
      </div>
    </section>
  );
}