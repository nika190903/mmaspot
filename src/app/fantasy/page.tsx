import Navbar from "@/components/Navbar";
import FantasyHero from "@/components/fantasy/FantasyHero";
import FantasyCardClient from "@/components/fantasy/FantasyCardClient";

export default function FantasyPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Navbar />

      <div className="pt-16">
        <FantasyHero />
        <FantasyCardClient />
      </div>
    </main>
  );
}