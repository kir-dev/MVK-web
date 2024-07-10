import { Carousel, CarouselContent, CarouselItem } from "../ui/carousel";
import { getClient } from "@/lib/sanity.client";
import { getTeams } from "@/lib/queries/team.queries";
import TeamCard from "./TeamCard";

export default async function TeamCardSection() {
  const client = getClient();
  const teams = await getTeams(client);
  if (!teams) return <div className="bg-fuchsia-300">Nem adta be</div>;
  return (
    <div className="w-screen h-fit px-10 py-4">
      <h1 className="text-3xl">Csapatok</h1>
      <div className="flex flex-row items-center w-screen  gap-4 justify-center mt-8">
        {teams.map((data, index) => (
          <TeamCard key={index} team={data} />
        ))}
      </div>
    </div>
  );
}
