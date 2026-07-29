import FantasyChallenge from "@/components/FantasyChallenge";
import Footer from "@/components/Footer";
import GeorgianFighters from "@/components/GeorgianFighters";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import NewsSection from "@/components/NewsSection";
import RankingsSection from "@/components/RankingsSection";
import UpcomingEvents from "@/components/UpcomingEvents";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Navbar />
      <Hero />
      <FantasyChallenge />
      <NewsSection />
      <UpcomingEvents />
      <GeorgianFighters />
      <RankingsSection />
      <Footer />
    </main>
  );
}