import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <section className="flex min-h-screen flex-col items-center justify-center px-6 pb-16 pt-24 text-center">
      <span className="mb-5 rounded-full border border-red-600 px-4 py-1 text-sm font-medium text-red-500">
        THE HOME OF MMA
      </span>

      <h1 className="text-5xl font-extrabold tracking-tight text-white sm:text-6xl md:text-7xl">
        MMA Spot
      </h1>

      <p className="mt-6 max-w-2xl text-base leading-7 text-zinc-400 sm:text-lg">
        Latest MMA news, UFC events, rankings, fantasy, predictions and
        everything a true fight fan needs.
      </p>

      <div className="mt-10 flex flex-col gap-4 sm:flex-row">
        <Button className="bg-red-600 px-7 text-white hover:bg-red-700">
          Explore
        </Button>

        <Button
          variant="outline"
          className="border-zinc-700 bg-transparent px-7 text-white hover:bg-zinc-900 hover:text-white"
        >
          Latest News
        </Button>
      </div>
    </section>
  );
}
