import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-4 p-24">
      <h1 className="text-2xl font-semibold">MMA Spot — Foundation OK</h1>
      <p className="text-muted-foreground">
        Next.js 15 + TypeScript + Tailwind + shadcn/ui are wired up correctly.
      </p>
      <Button>It works</Button>
    </main>
  );
}
