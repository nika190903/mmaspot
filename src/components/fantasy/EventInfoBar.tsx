const eventDetails = [
  {
    label: "Event Date",
    value: "August 15, 2026",
  },
  {
    label: "Location",
    value: "Philadelphia",
  },
  {
    label: "Picks Lock",
    value: "Before First Fight",
  },
  {
    label: "Players Joined",
    value: "2,381",
  },
];

export default function EventInfoBar() {
  return (
    <section className="border-b border-white/10 bg-black px-6 py-6">
      <div className="mx-auto max-w-7xl">
        <div className="grid overflow-hidden rounded-3xl border border-white/10 bg-zinc-950 sm:grid-cols-2 lg:grid-cols-4">
          {eventDetails.map((detail, index) => (
            <div
              key={detail.label}
              className={`p-6 ${
                index !== eventDetails.length - 1
                  ? "border-b border-white/10 sm:border-b-0 sm:border-r"
                  : ""
              }`}
            >
              <p className="text-[10px] font-black uppercase tracking-[0.2em] text-zinc-600">
                {detail.label}
              </p>

              <p className="mt-2 text-base font-black uppercase text-white">
                {detail.value}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}