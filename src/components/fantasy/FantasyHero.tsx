import Image from "next/image";
import Link from "next/link";

const fantasyStats = [
  {
    value: "12,840",
    label: "Players",
  },
  {
    value: "6",
    label: "Fights",
  },
  {
    value: "100",
    label: "Max Points",
  },
];

export default function FantasyHero() {
  return (
    <section className="relative isolate min-h-[780px] overflow-hidden bg-[#050505] text-white lg:min-h-[880px]">
      {/* Arena background */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/fantasy/arena-bg.png')",
        }}
      />

      {/* Dark overlays */}
      <div className="absolute inset-0 bg-black/35" />

      <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/15 to-black/60" />
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-[#050505]" />

      {/* Red lighting */}
      <div className="absolute left-[-180px] top-[100px] h-[500px] w-[500px] rounded-full bg-red-700/20 blur-[140px]" />

      <div className="absolute right-[-180px] top-[100px] h-[500px] w-[500px] rounded-full bg-red-700/20 blur-[140px]" />

      <div className="absolute left-1/2 top-[80px] h-[400px] w-[550px] -translate-x-1/2 rounded-full bg-red-600/10 blur-[150px]" />

      {/* Decorative top lines */}
      <div className="absolute left-0 top-0 h-px w-full bg-gradient-to-r from-transparent via-red-600/80 to-transparent" />

      <div className="absolute left-1/2 top-0 h-[160px] w-px -translate-x-1/2 bg-gradient-to-b from-red-500/70 to-transparent" />

      {/* Background grid */}
      <div
        className="absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
          backgroundSize: "70px 70px",
        }}
      />

      {/* Left fighter glow */}
      <div className="absolute bottom-[80px] left-[-80px] hidden h-[500px] w-[380px] rounded-full bg-red-700/20 blur-[100px] md:block" />

      {/* Right fighter glow */}
      <div className="absolute bottom-[80px] right-[-80px] hidden h-[500px] w-[380px] rounded-full bg-red-700/20 blur-[100px] md:block" />

      {/* Islam Makhachev */}
      <div className="pointer-events-none absolute bottom-0 left-[-150px] z-10 hidden h-[720px] w-[580px] md:block lg:left-[-70px] lg:h-[800px] lg:w-[650px] xl:left-[10px] xl:h-[840px] xl:w-[680px]">
        <Image
  src="/fantasy/islam-makhachev.png"
  alt="Islam Makhachev"
  fill
  priority
  className="object-contain object-bottom brightness-[0.72] contrast-105 saturate-90 drop-shadow-[0_20px_40px_rgba(0,0,0,0.9)]"
  sizes="(max-width: 1024px) 50vw, 680px"
/>

        <div className="absolute inset-0 bg-gradient-to-r from-black/35 via-transparent to-transparent" />
      </div>

      {/* Ian Machado Garry */}
      <div className="pointer-events-none absolute bottom-0 right-[-150px] z-10 hidden h-[720px] w-[580px] md:block lg:right-[-70px] lg:h-[800px] lg:w-[650px] xl:right-[10px] xl:h-[840px] xl:w-[680px]">
       <Image
  src="/fantasy/ian-machado-garry.png"
  alt="Ian Machado Garry"
  fill
  priority
  className="object-contain object-bottom brightness-[0.72] contrast-105 saturate-90 drop-shadow-[0_20px_40px_rgba(0,0,0,0.9)]"
  sizes="(max-width: 1024px) 50vw, 680px"
/>
<div className="absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-l from-black/35 via-transparent to-transparent" />
      </div>

      {/* Mobile fighters */}
      <div className="pointer-events-none absolute bottom-0 left-[-150px] z-10 h-[440px] w-[370px] opacity-60 md:hidden">
        <Image
          src="/fantasy/islam-makhachev.png"
          alt=""
          fill
          priority
          className="object-contain object-bottom"
          sizes="370px"
        />
      </div>

      <div className="pointer-events-none absolute bottom-0 right-[-150px] z-10 h-[440px] w-[370px] opacity-60 md:hidden">
        <Image
          src="/fantasy/ian-machado-garry.png"
          alt=""
          fill
          priority
          className="object-contain object-bottom"
          sizes="370px"
        />
      </div>

      {/* Main content */}
      <div className="relative z-20 mx-auto flex min-h-[780px] max-w-7xl flex-col items-center px-4 pb-20 pt-28 text-center sm:px-6 lg:min-h-[880px] lg:px-8 lg:pt-32">
        {/* Label */}
        <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-red-500/30 bg-red-500/10 px-4 py-2 backdrop-blur-md">
          <span className="relative flex h-2.5 w-2.5">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-red-500 opacity-75" />
            <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-red-500" />
          </span>

          <span className="text-xs font-bold uppercase tracking-[0.24em] text-red-300 sm:text-sm">
            MMA Spot Fantasy
          </span>
        </div>

        {/* Heading */}
        <div className="max-w-3xl">
          <p className="mb-2 text-sm font-extrabold uppercase tracking-[0.4em] text-white/60 sm:text-base">
            Pick. Predict. Dominate.
          </p>

          <h1 className="text-5xl font-black uppercase leading-[0.88] tracking-[-0.055em] sm:text-6xl md:text-7xl lg:text-[88px]">
            Build Your
            <span className="block bg-gradient-to-r from-red-500 via-red-400 to-red-700 bg-clip-text text-transparent">
              Fight Night
            </span>
          </h1>

          <p className="mx-auto mt-6 max-w-xl text-sm leading-6 text-white/65 sm:text-base sm:leading-7">
            Predict every winner, method and round. Earn points, climb the
            event leaderboard and prove your MMA knowledge.
          </p>
        </div>

        {/* Stats */}
        <div className="mt-8 grid w-full max-w-2xl grid-cols-3 overflow-hidden rounded-2xl border border-white/10 bg-black/35 shadow-2xl backdrop-blur-xl">
          {fantasyStats.map((stat, index) => (
            <div
              key={stat.label}
              className={`px-3 py-4 sm:px-6 sm:py-5 ${
                index !== fantasyStats.length - 1
                  ? "border-r border-white/10"
                  : ""
              }`}
            >
              <p className="text-lg font-black text-white sm:text-2xl">
                {stat.value}
              </p>

              <p className="mt-1 text-[10px] font-bold uppercase tracking-[0.2em] text-white/40 sm:text-xs">
                {stat.label}
              </p>
            </div>
          ))}
        </div>

        {/* Main event card */}
        <div className="relative mt-8 w-full max-w-xl overflow-hidden rounded-3xl border border-white/10 bg-black/55 p-1 shadow-[0_30px_80px_rgba(0,0,0,0.65)] backdrop-blur-xl">
          <div className="absolute inset-x-16 top-0 h-px bg-gradient-to-r from-transparent via-red-500 to-transparent" />

          <div className="rounded-[20px] border border-white/[0.06] bg-gradient-to-b from-white/[0.07] to-transparent px-5 py-5 sm:px-8 sm:py-6">
            <div className="flex items-center justify-between gap-3">
              <div className="text-left">
                <p className="text-[10px] font-bold uppercase tracking-[0.28em] text-red-400 sm:text-xs">
                  Featured Event
                </p>

                <h2 className="mt-1 text-lg font-black uppercase tracking-tight sm:text-2xl">
                  UFC Fight Night
                </h2>
              </div>

              <div className="rounded-xl border border-red-500/20 bg-red-500/10 px-3 py-2 text-right">
                <p className="text-[9px] font-bold uppercase tracking-[0.2em] text-white/40">
                  Starts In
                </p>

                <p className="mt-0.5 text-sm font-black text-red-400 sm:text-base">
                  02D : 14H
                </p>
              </div>
            </div>

            <div className="my-5 h-px bg-gradient-to-r from-transparent via-white/15 to-transparent" />

            <div className="flex items-center justify-between gap-3">
              <div className="flex-1 text-left">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/40">
                  Main Event
                </p>

                <p className="mt-1 text-sm font-black uppercase sm:text-lg">
                  Makhachev
                </p>
              </div>

              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-red-500/30 bg-red-500/10">
                <span className="text-xs font-black italic text-red-400">
                  VS
                </span>
              </div>

              <div className="flex-1 text-right">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/40">
                  Challenger
                </p>

                <p className="mt-1 text-sm font-black uppercase sm:text-lg">
                  Garry
                </p>
              </div>
            </div>

            <div className="mt-5 grid grid-cols-2 gap-3 text-left">
              <div className="rounded-xl border border-white/[0.07] bg-white/[0.04] px-4 py-3">
                <p className="text-[9px] font-bold uppercase tracking-[0.2em] text-white/35">
                  Date
                </p>

                <p className="mt-1 text-xs font-bold text-white/85 sm:text-sm">
                  Saturday, August 9
                </p>
              </div>

              <div className="rounded-xl border border-white/[0.07] bg-white/[0.04] px-4 py-3">
                <p className="text-[9px] font-bold uppercase tracking-[0.2em] text-white/35">
                  Location
                </p>

                <p className="mt-1 text-xs font-bold text-white/85 sm:text-sm">
                  Las Vegas, Nevada
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Buttons */}
        <div className="mt-7 flex w-full max-w-md flex-col gap-3 sm:flex-row">
          <Link
            href="#fight-card"
            className="group relative flex flex-1 items-center justify-center overflow-hidden rounded-xl bg-red-600 px-7 py-4 text-sm font-black uppercase tracking-[0.15em] text-white shadow-[0_12px_35px_rgba(220,38,38,0.3)] transition duration-300 hover:-translate-y-1 hover:bg-red-500"
          >
            <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition duration-700 group-hover:translate-x-full" />

            <span className="relative">Make Predictions</span>
          </Link>

          <Link
            href="#leaderboard"
            className="flex flex-1 items-center justify-center rounded-xl border border-white/15 bg-white/[0.05] px-7 py-4 text-sm font-black uppercase tracking-[0.15em] text-white backdrop-blur-md transition duration-300 hover:-translate-y-1 hover:border-white/30 hover:bg-white/10"
          >
            Leaderboard
          </Link>
        </div>

        {/* Scroll indicator */}
        <div className="mt-auto hidden flex-col items-center gap-2 pt-10 lg:flex">
          <span className="text-[9px] font-bold uppercase tracking-[0.3em] text-white/30">
            Scroll to predict
          </span>

          <div className="flex h-9 w-6 justify-center rounded-full border border-white/20 p-1">
            <div className="h-2 w-1 animate-bounce rounded-full bg-red-500" />
          </div>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 z-30 h-40 bg-gradient-to-t from-[#050505] to-transparent" />
    </section>
  );
}