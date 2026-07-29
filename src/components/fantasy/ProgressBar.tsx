type ProgressBarProps = {
  completed: number;
  total: number;
};

export default function ProgressBar({
  completed,
  total,
}: ProgressBarProps) {
  const progress =
    total > 0 ? Math.min((completed / total) * 100, 100) : 0;

  return (
    <section className="border-b border-white/10 bg-zinc-950 px-6 py-8">
      <div className="mx-auto max-w-7xl">
        <div className="rounded-3xl border border-white/10 bg-black p-6 md:p-8">
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-xs font-black uppercase tracking-[0.2em] text-red-500">
                Your Progress
              </p>

              <h2 className="mt-2 text-2xl font-black uppercase text-white md:text-3xl">
                Complete Your Fight Card
              </h2>

              <p className="mt-2 text-sm leading-6 text-zinc-500">
                Select a winner, method, and round for every fight before
                submitting your predictions.
              </p>
            </div>

            <div className="text-left md:text-right">
              <p className="text-3xl font-black text-white">
                {completed} / {total}
              </p>

              <p className="mt-1 text-xs font-black uppercase tracking-[0.16em] text-zinc-500">
                Picks Completed
              </p>
            </div>
          </div>

          <div className="mt-6 h-3 overflow-hidden rounded-full bg-white/10">
            <div
              className="h-full rounded-full bg-red-600 transition-all duration-500"
              style={{ width: `${progress}%` }}
            />
          </div>

          <div className="mt-4 flex items-center justify-between text-xs font-bold text-zinc-500">
            <span>{Math.round(progress)}% complete</span>
            <span>{total - completed} remaining</span>
          </div>
        </div>
      </div>
    </section>
  );
}