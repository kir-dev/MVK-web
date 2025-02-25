export const dynamic = "force-dynamic";
import { getClient } from "@/lib/sanity.client";
import { getTeams } from "@/lib/queries/team.queries";
import TeamCard from "./TeamCard";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../ui/carousel";

export default async function TeamCardSection() {
  const client = getClient();
  const teams = await getTeams(client);
  if (!teams) return null;
  return (
    <div className="w-full h-fit p-10 bg-gray-200">
      <h1 className="text-3xl mb-4">Csapatok</h1>
      <div className="flex flex-row flex-wrap items-center gap-4 justify-center">
        {teams.map((data, index) => (
          <TeamCard key={index} team={data} />
        ))}
      </div>
    </div>
  );
}
