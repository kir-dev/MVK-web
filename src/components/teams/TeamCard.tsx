import { Card, CardContent } from "../ui/card";
import Image from "next/image";
import { urlForImage } from "@/lib/sanity.image";
import { Team } from "@/lib/sanity.types";
import Link from "next/link";

export default function TeamCard({ team }: { team: Team }) {
  return (
    <Link
      className="w-60 h-96 relative flex flex-row items-center justify-center"
      href={`/teams/${team.slug.current}`}
    >
      <Image
        src={
          team.thumbnail
            ? urlForImage(team.thumbnail)?.width(450).height(800).url() ??
              "/images/card-example-2.jpeg"
            : "/images/card-example-2.jpeg"
        }
        alt={team.name}
        className="absolute top-0 left-0 w-full h-full z-0 object-cover brightness-50"
        width={450}
        height={800}
        //9:16 aspect ratio
      />
      <div className="bg-transparent z-10 relative px-4 text-center">
        <h1 className="text-3xl text-white">{team.name}</h1>
      </div>
    </Link>
  );
}
