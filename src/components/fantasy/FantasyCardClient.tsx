"use client";

import { useMemo, useState } from "react";

import FightCard, {
  type FightPrediction,
} from "@/components/fantasy/FightCard";
import ProgressBar from "@/components/fantasy/ProgressBar";
import {
  fightsData,
  type FightSection,
} from "@/components/fantasy/fightsData";

const createEmptyPrediction = (): FightPrediction => ({
  winner: null,
  method: null,
  round: null,
});

const sections: FightSection[] = [
  "Main Card",
  "Prelims",
  "Early Prelims",
];

const sectionDescriptions: Record<FightSection, string> = {
  "Main Card": "The biggest fights of the night.",
  Prelims: "Build your card with the preliminary bouts.",
  "Early Prelims": "Complete every opening fight prediction.",
};

export default function FantasyCardClient() {
  const initialPredictions = useMemo(() => {
    return fightsData.reduce<Record<number, FightPrediction>>(
      (predictions, fight) => {
        predictions[fight.id] = createEmptyPrediction();
        return predictions;
      },
      {},
    );
  }, []);

  const [predictions, setPredictions] =
    useState<Record<number, FightPrediction>>(
      initialPredictions,
    );

  const [submitted, setSubmitted] = useState(false);

  const totalFights = fightsData.length;

  const handlePredictionChange = (
    fightId: number,
    prediction: FightPrediction,
  ) => {
    setSubmitted(false);

    setPredictions((currentPredictions) => ({
      ...currentPredictions,
      [fightId]: prediction,
    }));
  };

  const isPredictionComplete = (
    prediction: FightPrediction | undefined,
  ): boolean => {
    if (!prediction?.winner || !prediction.method) {
      return false;
    }

    if (prediction.method === "Decision") {
      return true;
    }

    return prediction.round !== null;
  };

  const completedFights = fightsData.filter((fight) =>
    isPredictionComplete(predictions[fight.id]),
  ).length;

  const cardIsComplete = completedFights === totalFights;

  const handleSubmit = () => {
    if (!cardIsComplete) {
      return;
    }

    setSubmitted(true);

    console.log("Submitted predictions:", predictions);
  };

  return (
    <>
      <ProgressBar
        completed={completedFights}
        total={totalFights}
      />

      <section className="px-6 py-16">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12">
            <p className="text-sm font-black uppercase tracking-[0.3em] text-red-500">
              UFC 330 Fantasy
            </p>

            <h2 className="mt-3 text-4xl font-black uppercase text-white md:text-5xl">
              Make Your Predictions
            </h2>

            <p className="mt-4 max-w-2xl text-sm leading-6 text-zinc-500">
              Select the winner, winning method, and round for all
              {` ${totalFights} `} fights.
            </p>
          </div>

          <div className="space-y-20">
            {sections.map((section) => {
              const sectionFights = fightsData.filter(
                (fight) => fight.section === section,
              );

              return (
                <div key={section}>
                  <div className="mb-8 flex flex-col gap-4 border-b border-white/10 pb-6 md:flex-row md:items-end md:justify-between">
                    <div>
                      <p className="text-xs font-black uppercase tracking-[0.3em] text-red-500">
                        Fight Card
                      </p>

                      <h3 className="mt-2 text-3xl font-black uppercase text-white">
                        {section}
                      </h3>

                      <p className="mt-2 text-sm text-zinc-500">
                        {sectionDescriptions[section]}
                      </p>
                    </div>

                    <p className="text-xs font-black uppercase tracking-[0.18em] text-zinc-600">
                      {sectionFights.length} Fights
                    </p>
                  </div>

                  <div className="space-y-6">
                    {sectionFights.map((fight) => (
                      <FightCard
                        key={fight.id}
                        fightId={fight.id}
                        fightNumber={fight.fightNumber}
                        label={fight.label}
                        division={fight.division}
                        rounds={fight.rounds}
                        isTitleFight={fight.isTitleFight}
                        prediction={
                          predictions[fight.id] ??
                          createEmptyPrediction()
                        }
                        onPredictionChange={
                          handlePredictionChange
                        }
                        fighterOne={fight.fighterOne}
                        fighterTwo={fight.fighterTwo}
                      />
                    ))}
                  </div>
                </div>
              );
            })}
          </div>

          <div className="sticky bottom-5 z-30 mt-16 rounded-3xl border border-white/10 bg-black/95 p-5 shadow-2xl backdrop-blur-xl md:p-7">
            <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
              <div>
                <p className="text-sm font-black uppercase text-white">
                  Your Fantasy Card
                </p>

                <p className="mt-2 text-sm text-zinc-500">
                  {completedFights} of {totalFights} predictions
                  completed.
                </p>

                {!cardIsComplete && (
                  <p className="mt-2 text-xs font-semibold text-red-400">
                    Complete every fight before submitting your card.
                  </p>
                )}

                {submitted && (
                  <p className="mt-2 text-xs font-black uppercase tracking-wider text-green-400">
                    Predictions submitted successfully
                  </p>
                )}
              </div>

              <button
                type="button"
                disabled={!cardIsComplete}
                onClick={handleSubmit}
                className="rounded-full bg-red-600 px-8 py-4 text-sm font-black uppercase tracking-wider text-white transition hover:bg-red-500 disabled:cursor-not-allowed disabled:bg-zinc-800 disabled:text-zinc-600"
              >
                {submitted
                  ? "Predictions Submitted"
                  : `Submit ${completedFights}/${totalFights}`}
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}