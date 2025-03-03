export const dynamic = "force-dynamic";
export const fetchCache = "force-no-store";

import { getTeam } from "@/lib/queries/team.queries";
import { getClient } from "@/lib/sanity.client";
import { teamDescriptionSerializer } from "@/utils/serializers/team.description.serializer";
import { PortableText } from "next-sanity";
import { notFound } from "next/navigation";
import Image from "next/image";
import { urlForImage } from "@/lib/sanity.image";
import LinkCard from "@/components/teams/LinkCard";
import RaceCarousel from "@/components/teams/RaceCarousel";
import Gallery from "@/components/teams/Gallery";

export default async function TeamPage({
  params,
}: {
  params: { slug: string };
}) {
  const client = getClient();
  const team = await getTeam(client, params.slug);
  if (!team) return notFound();
  return (
    <main
      className="flex flex-col flex-1 items-center relative bg-cover"
      style={
        team.background && {
          background: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${urlForImage(team.background)?.url()})`,
          backgroundSize: "cover",
          color: "white",
        }
      }
    >
      <div className="p-4 px-10 flex flex-col lg:flex-row w-full items-center gap-10 h-full">
        <div className="flex flex-col w-fit p-8 min-h-[50dvh]">
          <div className=" flex-1 flex flex-col items-center justify-center gap-4">
            <div className=" p-2 bg-white rounded-md">
              <Image
                src={(team.logo ? urlForImage(team.logo)?.url() : "") ?? ""}
                alt={""}
                className="object-cover"
                height={150}
                width={150}
              />
            </div>
            <h1 className="text-5xl italic text-center w-fit">{team.name}</h1>
            <div className="flex flex-row flex-wrap justify-center gap-4 py-4 w-full">
              {team.Links &&
                team.Links.map((link) => (
                  <LinkCard key={link._key} link={link} color={team.color} />
                ))}
            </div>
          </div>
          <Gallery team={team}></Gallery>
        </div>
        <div className="flex flex-col lg:w-2/3 justify-center">
          <div>
            <PortableText
              value={team.description}
              components={teamDescriptionSerializer}
            />
          </div>
        </div>
        {team.races && (
          <div className="p-4 text-center">
            <h2 className="text-2xl font-bold mb-4">Versenyek</h2>
            <RaceCarousel races={team.races} />
          </div>
        )}
      </div>
    </main>
  );
}
