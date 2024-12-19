export const dynamic = "force-dynamic";
import Introduction from "@/components/Introduction";
import MapsSection from "@/components/map/MapsSection";
import NewsSection from "@/components/news/NewsSection";
import TeamCardSection from "@/components/teams/TeamCardSection";

export default async function Home() {
  return (
    <div className="flex flex-col items-center justify-start overflow-x-hidden flex-1">
      <Introduction />
      <TeamCardSection />
      <NewsSection />
      <MapsSection />
    </div>
  );
}
