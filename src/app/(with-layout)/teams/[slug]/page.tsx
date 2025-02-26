import { getTeam } from "@/lib/queries/team.queries";
import { getClient } from "@/lib/sanity.client";
import { teamDescriptionSerializer } from "@/utils/serializers/team.description.serializer";
import { PortableText } from "next-sanity";
import { notFound } from "next/navigation";
import Image from "next/image";
import { urlForImage } from "@/lib/sanity.image";
import LinkCard from "@/components/teams/LinkCard";
import RaceCarousel from "@/components/teams/RaceCarousel";
import { useState } from "react";
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
    <main className="flex flex-col flex-1 items-center relative">
      <div className="p-4 px-10 flex flex-row w-full  gap-10 h-full">
        <div className="flex flex-col gap-4 items-center justify-center w-fit p-8 min-h-[50dvh]">
          <Image
            src={(team.logo ? urlForImage(team.logo)?.url() : "") ?? ""}
            alt={""}
            className="object-cover"
            height={150}
            width={150}
          />
          <h1 className="text-5xl italic text-center w-fit">{team.name}</h1>
          <div className="flex flex-row flex-wrap justify-center gap-4 py-4 w-full">
            {team.Links &&
              team.Links.map((link) => (
                <LinkCard key={link._key} link={link} color={team.color} />
              ))}
          </div>
          <Gallery team={team}></Gallery>
        </div>
        <div className="flex flex-col w-2/3 justify-center">
          <p className="py-4">
            A BME Solar Boat Team 2014-ben alakult meg azzal a céllal, hogy
            megtervezze és megépítse Magyarország első kizárólag napenergiával
            működő, ember által vezetett, teljesen elektromos hajtással
            rendelkező versenyhajóját.
          </p>
          <p className="py-4">
            Számunkra nagyon fontos, hogy a hallgatók a környezettudatosság
            valamint a megújuló energiák ismeretében közel kerülhessenek egy
            valós mérnöki projekthez, ezáltal nem csak szakmai tapasztalatra
            tesznek szert, de csapatban is megtanulnak dolgozni. Mindemellett
            nemzetközi kapcsolatokra is szert téve rengeteg tapasztalattal
            kerülnek ki az iskolapadból az iparba.
          </p>
          <p className="py-4">
            Az évek során 150-nél is több hallgató fordult meg a csapatnál az
            egyetem különböző karjairól, mint például a gépészmérnöki,
            közlekedés és járműmérnöki, villamosmérnöki valamint
            gazdaságtudományi karról.
          </p>
          {team.races && <RaceCarousel races={team.races} />}
        </div>
      </div>
      {team.races && (
        <div className="p-4 text-center">
          <h2 className="text-2xl font-bold mb-4">Versenyek</h2>
          <RaceCarousel races={team.races} />
        </div>
      )}
    </main>
  );
}
