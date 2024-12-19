export const dynamic = "force-dynamic";
import { getClient } from "@/lib/sanity.client";
import { getTeams } from "@/lib/queries/team.queries";
import TeamCard from "./TeamCard";

export default async function TeamCardSection() {
  const client = getClient();
  const teams = await getTeams(client);
  if (!teams) return null;
  return (
    <div className="w-screen h-fit p-10 bg-gray-200">
      <h1 className="text-3xl">Csapatok</h1>
      <div className=" overflow-x-scroll">
        <div className="flex flex-row items-center w-screen gap-4 justify-center no-scrollbar">
          {teams.map((data, index) => (
            <TeamCard key={index} team={data} />
          ))}
        </div>
      </div>
    </div>
  );
}
