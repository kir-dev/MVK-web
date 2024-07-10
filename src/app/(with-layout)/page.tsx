import Introduction from "@/components/Introduction";
import NewsSection from "@/components/news/NewsSection";
import Slideshow from "@/components/Slideshow";
import TeamCardSection from "@/components/teams/TeamCardSection";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-start overflow-x-hidden">
      <Slideshow />
      <Introduction />
      <TeamCardSection />
      <NewsSection />
    </main>
  );
}
