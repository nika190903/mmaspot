import { Button } from "@/components/ui/button";

export default function FeaturedFight() {
  return (
    <section id="events" className="mx-auto max-w-7xl px-6 py-24">
      <div className="overflow-hidden rounded-3xl border border-zinc-800 bg-zinc-950">
        <div className="grid min-h-[460px] lg:grid-cols-2">
          <div className="flex flex-col justify-center p-8 sm:p-12">
            <span className="w-fit rounded-full bg-red-600/10 px-4 py-2 text-xs font-bold uppercase tracking-widest text-red-500">
              Featured Event
            </span>

            <p className="mt-8 text-sm font-semibold uppercase tracking-[0.25em] text-zinc-500">
              Main Event
            </p>

            <h2 className="mt-4 text-4xl font-black text-white sm:text-5xl">
              Championship Fight Night
            </h2>

            <p className="mt-5 max-w-lg text-base leading-7 text-zinc-400">
              Follow the upcoming main event, fighter statistics, predictions,
              live results and full event coverage on MMA Spot.
            </p>

            <div className="mt-8 flex flex-wrap gap-3 text-sm">
              <span className="rounded-lg border border-zinc-800 px-4 py-2 text-zinc-300">
                August 2026
              </span>

              <span className="rounded-lg border border-zinc-800 px-4 py-2 text-zinc-300">
                Main Card
              </span>

              <span className="rounded-lg border border-zinc-800 px-4 py-2 text-zinc-300">
                Championship
              </span>
            </div>

            <div className="mt-10">
              <Button className="bg-red-600 px-7 text-white hover:bg-red-700">
                View Event
              </Button>
            </div>
          </div>

          <div className="relative flex min-h-[360px] items-center justify-center border-t border-zinc-800 bg-gradient-to-br from-red-950 via-zinc-950 to-black p-8 lg:border-l lg:border-t-0">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(220,38,38,0.22),transparent_60%)]" />

            <div className="relative text-center">
              <p className="text-sm font-bold uppercase tracking-[0.4em] text-red-500">
                Main Event
              </p>

              <div className="mt-8 flex items-center justify-center gap-5 sm:gap-8">
                <div>
                  <div className="flex h-24 w-24 items-center justify-center rounded-full border border-zinc-700 bg-zinc-900 text-3xl font-black text-white sm:h-32 sm:w-32">
                    A
                  </div>
                  <p className="mt-4 font-bold text-white">Fighter One</p>
                </div>

                <span className="text-3xl font-black text-red-500">VS</span>

                <div>
                  <div className="flex h-24 w-24 items-center justify-center rounded-full border border-zinc-700 bg-zinc-900 text-3xl font-black text-white sm:h-32 sm:w-32">
                    B
                  </div>
                  <p className="mt-4 font-bold text-white">Fighter Two</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}