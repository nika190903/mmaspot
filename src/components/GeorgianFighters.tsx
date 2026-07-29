import Image from "next/image";

const fighters = [
  {
    id: 1,
    name: "Ilia Topuria",
    nickname: "El Matador",
    record: "17-0-0",
    division: "Lightweight",
    ranking: "#1",
    image: "/fighters/ilia-topuria.png",
  },
  {
    id: 2,
    name: "Merab Dvalishvili",
    nickname: "The Machine",
    record: "20-4-0",
    division: "Bantamweight",
    ranking: "Champion",
    image: "/fighters/merab-dvalishvili.png",
  },
  {
    id: 3,
    name: "Roman Dolidze",
    nickname: "The Caucasian",
    record: "15-4-0",
    division: "Middleweight",
    ranking: "Top 10",
    image: "/fighters/roman-dolidze.png",
  },
];

export default function GeorgianFighters() {
  return (
    <section className="relative overflow-hidden bg-black px-6 py-24">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(220,38,38,0.12),transparent_35%)]" />

      <div className="relative mx-auto max-w-7xl">
        <div className="mb-12 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p className="mb-3 text-sm font-bold uppercase tracking-[0.3em] text-red-500">
              Georgia Corner
            </p>

            <h2 className="text-4xl font-black uppercase tracking-tight text-white md:text-5xl">
              Georgian Fighters
            </h2>

            <p className="mt-4 max-w-2xl text-base leading-7 text-zinc-400">
              Follow Georgia&apos;s leading MMA fighters, their rankings,
              records, and upcoming fights.
            </p>
          </div>

          <button className="self-start rounded-full border border-white/15 px-6 py-3 text-sm font-bold uppercase tracking-wider text-white transition hover:border-red-500 hover:bg-red-600 md:self-auto">
            View All Fighters
          </button>
        </div>

        <div className="grid gap-7 lg:grid-cols-3">
          {fighters.map((fighter) => (
            <article
              key={fighter.id}
              className="group relative overflow-hidden rounded-3xl border border-white/10 bg-zinc-950 transition duration-500 hover:-translate-y-2 hover:border-red-500/60"
            >
              <div className="relative h-[390px] overflow-hidden bg-gradient-to-b from-red-950/35 via-zinc-950 to-black">
                <div className="absolute left-4 top-4 z-20">
                  <span className="rounded-full border border-red-500/30 bg-black/70 px-3 py-1.5 text-[9px] font-black uppercase tracking-[0.16em] text-red-400 backdrop-blur-md">
                    Georgian Fighter
                  </span>
                </div>

                <div className="absolute right-4 top-4 z-20">
                  <span className="rounded-full border border-white/10 bg-black/70 px-3 py-1.5 text-[9px] font-black uppercase tracking-[0.16em] text-white backdrop-blur-md">
                    Georgia
                  </span>
                </div>

                <Image
                  src={fighter.image}
                  alt={fighter.name}
                  fill
                  priority={fighter.id === 1}
                  className="object-contain object-bottom transition duration-700 group-hover:scale-105"
                  sizes="(max-width: 1024px) 100vw, 33vw"
                />

                <div className="absolute inset-x-0 bottom-0 h-36 bg-gradient-to-t from-zinc-950 via-zinc-950/85 to-transparent" />
              </div>

              <div className="relative p-7 pt-5">
                <p className="text-xs font-bold uppercase tracking-[0.28em] text-zinc-500">
                  {fighter.nickname}
                </p>

                <h3 className="mt-3 min-h-[72px] text-3xl font-black uppercase leading-[0.95] text-white md:text-4xl">
                  {fighter.name}
                </h3>

                <div className="mt-7 grid grid-cols-3 gap-3">
                  <div className="flex min-h-[92px] flex-col items-center justify-center rounded-2xl border border-white/10 bg-white/[0.03] px-2 text-center">
                    <p className="text-lg font-black text-white">
                      {fighter.record}
                    </p>

                    <p className="mt-2 text-[10px] font-bold uppercase tracking-[0.16em] text-zinc-500">
                      Record
                    </p>
                  </div>

                  <div className="flex min-h-[92px] flex-col items-center justify-center rounded-2xl border border-white/10 bg-white/[0.03] px-2 text-center">
                    <p className="text-base font-black leading-tight text-white">
                      {fighter.ranking}
                    </p>

                    <p className="mt-2 text-[10px] font-bold uppercase tracking-[0.16em] text-zinc-500">
                      Ranking
                    </p>
                  </div>

                  <div className="flex min-h-[92px] flex-col items-center justify-center rounded-2xl border border-white/10 bg-white/[0.03] px-2 text-center">
                    <p className="break-words text-sm font-black leading-tight text-white">
                      {fighter.division}
                    </p>

                    <p className="mt-2 text-[10px] font-bold uppercase tracking-[0.16em] text-zinc-500">
                      Division
                    </p>
                  </div>
                </div>

                <button className="mt-6 w-full rounded-full bg-white px-5 py-4 text-sm font-black uppercase tracking-wider text-black transition hover:bg-red-600 hover:text-white">
                  View Profile
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}