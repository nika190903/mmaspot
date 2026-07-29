const events = [
  {
    id: 1,
    organization: "UFC",
    date: "AUG 15, 2026",
    title: "UFC 330",
    mainEvent: "Islam Makhachev vs. Ian Machado Garry",
    division: "Welterweight Championship",
    location: "Philadelphia, Pennsylvania, USA",
    button: "Fight Center",
  },
  {
    id: 2,
    organization: "PFL",
    date: "OCT 18, 2026",
    title: "PFL Champions Series",
    mainEvent: "Lightweight Main Event",
    division: "Main Event",
    location: "Dubai, UAE",
    button: "Event Details",
  },
  {
    id: 3,
    organization: "ONE",
    date: "NOV 01, 2026",
    title: "ONE Fight Night",
    mainEvent: "World Championship Bout",
    division: "Title Fight",
    location: "Bangkok, Thailand",
    button: "Event Details",
  },
];

export default function UpcomingEvents() {
  return (
    <section className="bg-zinc-950 px-6 py-24">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 flex items-end justify-between">
          <div>
            <p className="mb-3 text-sm font-bold uppercase tracking-[0.3em] text-red-500">
              Fight Calendar
            </p>

            <h2 className="text-4xl font-black uppercase text-white md:text-5xl">
              Upcoming Events
            </h2>
          </div>

          <button className="hidden text-sm font-bold uppercase tracking-wider text-zinc-400 transition hover:text-white md:block">
            View Full Calendar →
          </button>
        </div>

        <div className="space-y-6">
          {events.map((event) => (
            <article
              key={event.id}
              className="group rounded-3xl border border-white/10 bg-black p-8 transition-all duration-300 hover:border-red-600 hover:bg-zinc-900"
            >
              <div className="grid items-center gap-8 lg:grid-cols-[140px_1.6fr_1fr_auto]">

                <div>
                  <p className="text-sm font-black uppercase tracking-[0.25em] text-red-500">
                    {event.organization}
                  </p>

                  <p className="mt-3 text-sm font-semibold text-zinc-500">
                    {event.date}
                  </p>
                </div>

                <div>
                  <h3 className="text-3xl font-black uppercase text-white">
                    {event.title}
                  </h3>

                  <p className="mt-3 text-xl font-bold text-zinc-200">
                    {event.mainEvent}
                  </p>

                  <p className="mt-2 text-sm uppercase tracking-wider text-red-500">
                    {event.division}
                  </p>
                </div>

                <div>
                  <p className="text-xs font-bold uppercase tracking-widest text-zinc-600">
                    Location
                  </p>

                  <p className="mt-3 text-base font-semibold text-zinc-300">
                    {event.location}
                  </p>
                </div>

                <button className="rounded-full border border-red-600 px-6 py-3 text-sm font-bold uppercase tracking-wider text-white transition-all hover:bg-red-600">
                  {event.button}
                </button>

              </div>
            </article>
          ))}
        </div>

        <button className="mt-10 w-full rounded-full border border-red-600 px-6 py-4 text-sm font-bold uppercase tracking-wider text-white transition hover:bg-red-600 md:hidden">
          View Full Calendar
        </button>
      </div>
    </section>
  );
}