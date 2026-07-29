"use client";

export type FightPrediction = {
  winner: string | null;
  method: string | null;
  round: number | null;
};

type Fighter = {
  name: string;
  record: string;
  country: string;
};

type FightCardProps = {
  fightId: number;
  fightNumber: number;
  label: string;
  division: string;
  fighterOne: Fighter;
  fighterTwo: Fighter;
  prediction: FightPrediction;
  onPredictionChange: (
    fightId: number,
    prediction: FightPrediction,
  ) => void;
  isTitleFight?: boolean;
  rounds?: 3 | 5;
};

const methods = ["KO/TKO", "Submission", "Decision"];

export default function FightCard({
  fightId,
  fightNumber,
  label,
  division,
  fighterOne,
  fighterTwo,
  prediction,
  onPredictionChange,
  isTitleFight = false,
  rounds = 3,
}: FightCardProps) {
  const updatePrediction = (updates: Partial<FightPrediction>) => {
    onPredictionChange(fightId, {
      ...prediction,
      ...updates,
    });
  };

  const selectMethod = (method: string) => {
    const nextPrediction: FightPrediction = {
      ...prediction,
      method,
    };

    // Decision-ს კონკრეტული რაუნდი არ სჭირდება.
    if (method === "Decision") {
      nextPrediction.round = null;
    }

    onPredictionChange(fightId, nextPrediction);
  };

  return (
    <article className="overflow-hidden rounded-3xl border border-white/10 bg-black">
      <div className="flex flex-col gap-4 border-b border-white/10 px-6 py-5 md:flex-row md:items-center md:justify-between">
        <div>
          <div className="flex flex-wrap items-center gap-3">
            <p className="text-xs font-black uppercase tracking-[0.2em] text-red-500">
              {label}
            </p>

            {isTitleFight && (
              <span className="rounded-full border border-yellow-500/30 bg-yellow-500/10 px-3 py-1 text-[9px] font-black uppercase tracking-[0.16em] text-yellow-400">
                Title Fight
              </span>
            )}
          </div>

          <p className="mt-2 text-sm font-bold uppercase tracking-wider text-zinc-500">
            {division} · {rounds} Rounds
          </p>
        </div>

        <span className="text-xs font-black uppercase tracking-[0.18em] text-zinc-600">
          Fight {fightNumber}
        </span>
      </div>

      <div className="grid md:grid-cols-[1fr_auto_1fr]">
        <button
          type="button"
          onClick={() =>
            updatePrediction({
              winner: fighterOne.name,
            })
          }
          className={`p-6 text-left transition md:p-8 ${
            prediction.winner === fighterOne.name
              ? "bg-red-600/15 ring-1 ring-inset ring-red-500"
              : "hover:bg-white/[0.04]"
          }`}
        >
          <p className="text-[10px] font-black uppercase tracking-[0.18em] text-zinc-600">
            {fighterOne.country}
          </p>

          <h3 className="mt-3 text-2xl font-black uppercase text-white">
            {fighterOne.name}
          </h3>

          <p className="mt-2 text-sm font-bold text-zinc-500">
            {fighterOne.record}
          </p>

          <div className="mt-5">
            <span
              className={`inline-flex rounded-full border px-4 py-2 text-xs font-black uppercase tracking-wider ${
                prediction.winner === fighterOne.name
                  ? "border-red-500 bg-red-600 text-white"
                  : "border-white/15 text-zinc-300"
              }`}
            >
              {prediction.winner === fighterOne.name
                ? "Selected"
                : "Pick Fighter"}
            </span>
          </div>
        </button>

        <div className="flex items-center justify-center border-y border-white/10 px-5 py-3 md:border-x md:border-y-0">
          <span className="text-sm font-black uppercase tracking-[0.2em] text-zinc-600">
            VS
          </span>
        </div>

        <button
          type="button"
          onClick={() =>
            updatePrediction({
              winner: fighterTwo.name,
            })
          }
          className={`p-6 text-left transition md:p-8 md:text-right ${
            prediction.winner === fighterTwo.name
              ? "bg-red-600/15 ring-1 ring-inset ring-red-500"
              : "hover:bg-white/[0.04]"
          }`}
        >
          <p className="text-[10px] font-black uppercase tracking-[0.18em] text-zinc-600">
            {fighterTwo.country}
          </p>

          <h3 className="mt-3 text-2xl font-black uppercase text-white">
            {fighterTwo.name}
          </h3>

          <p className="mt-2 text-sm font-bold text-zinc-500">
            {fighterTwo.record}
          </p>

          <div className="mt-5">
            <span
              className={`inline-flex rounded-full border px-4 py-2 text-xs font-black uppercase tracking-wider ${
                prediction.winner === fighterTwo.name
                  ? "border-red-500 bg-red-600 text-white"
                  : "border-white/15 text-zinc-300"
              }`}
            >
              {prediction.winner === fighterTwo.name
                ? "Selected"
                : "Pick Fighter"}
            </span>
          </div>
        </button>
      </div>

      <div className="grid gap-6 border-t border-white/10 bg-zinc-950 p-6 md:grid-cols-2 md:p-8">
        <div>
          <p className="text-xs font-black uppercase tracking-[0.18em] text-zinc-500">
            Winning Method
          </p>

          <div className="mt-4 flex flex-wrap gap-3">
            {methods.map((item) => (
              <button
                key={item}
                type="button"
                onClick={() => selectMethod(item)}
                className={`rounded-full border px-4 py-2 text-xs font-black uppercase tracking-wider transition ${
                  prediction.method === item
                    ? "border-red-500 bg-red-600 text-white"
                    : "border-white/10 bg-black text-zinc-400 hover:border-white/30"
                }`}
              >
                {item}
              </button>
            ))}
          </div>
        </div>

        <div>
          <p className="text-xs font-black uppercase tracking-[0.18em] text-zinc-500">
            Winning Round
          </p>

          {prediction.method === "Decision" ? (
            <div className="mt-4 rounded-2xl border border-white/10 bg-black px-4 py-3">
              <p className="text-xs font-semibold text-zinc-500">
                Round selection is not required for a decision.
              </p>
            </div>
          ) : (
            <div className="mt-4 flex flex-wrap gap-3">
              {Array.from(
                { length: rounds },
                (_, index) => index + 1,
              ).map((roundNumber) => (
                <button
                  key={roundNumber}
                  type="button"
                  onClick={() =>
                    updatePrediction({
                      round: roundNumber,
                    })
                  }
                  className={`flex h-10 w-10 items-center justify-center rounded-full border text-xs font-black transition ${
                    prediction.round === roundNumber
                      ? "border-red-500 bg-red-600 text-white"
                      : "border-white/10 bg-black text-zinc-400 hover:border-white/30"
                  }`}
                >
                  {roundNumber}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>
    </article>
  );
}