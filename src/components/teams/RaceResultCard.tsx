import { RaceResult } from "@/lib/sanity.types";
import { Card, CardContent, CardHeader } from "../ui/card";
import { Calendar } from "lucide-react";
import Image from "next/image";
import { urlForImage } from "@/lib/sanity.image";
import { CarouselItem } from "../ui/carousel";

export default function RaceResultCard({ race }: { race: RaceResult }) {
  return (
    <Card>
      <CardHeader className="grid grid-cols-2 grid-rows-1 h-1/3 items-end w-96 justify-end">
        <div>
          <h1>{race.title}</h1>
          <div className="flex flex-row items-center gap-2">
            <Calendar size={20} />
            {race.date}
          </div>
        </div>
        <div className="w-full flex justify-end">
          <Image
            src={
              race.logo ? urlForImage(race.logo)?.height(50).url() ?? "" : ""
            }
            alt={race.title}
            className="object-cover row-span-2"
            width={100}
            height={50}
          />
        </div>
      </CardHeader>
      <CardContent className="flex flex-col items-center">
        <p className="whitespace-pre-wrap mb-3">{race.description}</p>
        <Image
          src={
            race.image ? urlForImage(race.image)?.width(300).url() ?? "" : ""
          }
          alt={race.title}
          className="object-cover"
          width={300}
          height={200}
        />
      </CardContent>
    </Card>
  );
}
