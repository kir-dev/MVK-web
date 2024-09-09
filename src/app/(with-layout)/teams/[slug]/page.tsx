import { getTeam } from "@/lib/queries/team.queries";
import { getClient } from "@/lib/sanity.client";
import { teamDescriptionSerializer } from "@/utils/serializers/team.description.serializer";
import { PortableText } from "next-sanity";
import { notFound } from "next/navigation";
import Image from "next/image";
import { urlForImage } from "@/lib/sanity.image";
import LinkCard from "@/components/teams/LinkCard";
import RaceCarousel from "@/components/teams/RaceCarousel";

export default async function TeamPage({
  params,
}: {
  params: { slug: string };
}) {
  const client = getClient();
  const team = await getTeam(client, params.slug);
  if (!team) return notFound();
  return (
    <main className="flex flex-col flex-1">
      <div className="p-4 px-40 flex-1">
        <div className="flex flex-row items-center justify-center gap-4">
          <Image
            src={(team.logo ? urlForImage(team.logo)?.url() : "") ?? ""}
            alt={""}
            className="object-cover"
            height={50}
            width={50}
          />
          <h1 className="text-3xl font-bold">{team.name}</h1>
        </div>

        <PortableText
          value={team.description}
          components={teamDescriptionSerializer}
        />
      </div>
      {team.races && <RaceCarousel races={team.races} />}
      <div className="w-screen flex flex-row flex-wrap justify-center gap-4 p-4">
        {team.Links &&
          team.Links.map((link) => <LinkCard key={link._key} link={link} />)}
      </div>
    </main>
  );
}
