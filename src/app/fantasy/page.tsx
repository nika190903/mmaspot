import FantasyCardClient from "@/components/fantasy/FantasyCardClient";
import FantasyHero from "@/components/fantasy/FantasyHero";

export default function FantasyPage() {
  return (
    <main className="min-h-screen bg-zinc-950 text-white">
      <FantasyHero />
      <FantasyCardClient />
    </main>
  );
}