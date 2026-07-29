export default function NewsSection() {
  const news = [
    {
      title: "Topuria prepares for another title defense",
      category: "UFC",
      date: "July 29, 2026",
    },
    {
      title: "PFL announces new lightweight tournament",
      category: "PFL",
      date: "July 28, 2026",
    },
    {
      title: "Merab remains the bantamweight king",
      category: "UFC",
      date: "July 27, 2026",
    },
  ];

  return (
    <section
      id="news"
      className="mx-auto max-w-7xl px-6 py-24"
    >
      <div className="mb-12 flex items-center justify-between">
        <h2 className="text-4xl font-bold text-white">
          Latest News
        </h2>

        <button className="text-red-500 transition hover:text-red-400">
          View All →
        </button>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        {news.map((item) => (
          <article
            key={item.title}
            className="rounded-2xl border border-zinc-800 bg-zinc-950 p-6 transition duration-300 hover:-translate-y-1 hover:border-red-600"
          >
            <span className="text-xs font-semibold uppercase tracking-widest text-red-500">
              {item.category}
            </span>

            <h3 className="mt-4 text-xl font-bold text-white">
              {item.title}
            </h3>

            <p className="mt-6 text-sm text-zinc-500">
              {item.date}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}