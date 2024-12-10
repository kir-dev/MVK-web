export const dynamic = "force-dynamic";
import Introduction from "@/components/Introduction";
import MapsSection from "@/components/map/MapsSection";
import NewsSection from "@/components/news/NewsSection";
import TeamCardSection from "@/components/teams/TeamCardSection";

export default async function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-start overflow-x-hidden">
      <Introduction />
      <TeamCardSection />
      <NewsSection />
      <MapsSection />
    </main>
  );
}
