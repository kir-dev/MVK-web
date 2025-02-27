import { RaceResult } from "@/lib/sanity.types";
import { Card, CardContent, CardHeader } from "../ui/card";
import { CiCalendar } from "react-icons/ci";
import Image from "next/image";
import { urlForImage } from "@/lib/sanity.image";
import { CarouselItem } from "../ui/carousel";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";
import { InfoIcon } from "lucide-react";

export default function RaceResultCard({ race }: { race: RaceResult }) {
  return (
    <Dialog>
      <DialogTrigger>
        <Card className="relative flex flex-col p-6 gap-2 justify-between">
          <InfoIcon className="absolute top-2 right-2 text-gray-600"></InfoIcon>
          <div className="grid grid-cols-3 grid-rows-1 items-end justify-end">
            <div className="col-span-2 text-start">
              <h1>{race.title}</h1>
              <div className="flex flex-row items-center gap-2">
                <CiCalendar size={20} />
                {race.date}
              </div>
            </div>
            <div className="w-full flex justify-end row-span-2">
              <Image
                src={
                  race.logo
                    ? urlForImage(race.logo)?.height(50).url() ?? ""
                    : ""
                }
                alt={race.title}
                className="object-cover w-[50px]"
                width={100}
                height={50}
              />
            </div>
          </div>
          <CardContent className="flex flex-col items-center justify-end flex-1">
            <Image
              src={
                race.image
                  ? urlForImage(race.image)?.height(300).url() ?? ""
                  : ""
              }
              alt={race.title}
              className="object-cover  w-[230px] h-auto"
              height={300}
              width={200}
            />
          </CardContent>
        </Card>
      </DialogTrigger>
      <DialogContent className="w-full max-w-4xl overflow-y-auto max-h-[80vh] p-8">
        <DialogHeader>
          <DialogTitle>{race.title}</DialogTitle>
        </DialogHeader>
        <CardContent className="flex flex-col items-center">
          <p className="whitespace-pre-wrap mb-3">{race.description}</p>
          {race.image && (
            <Image
              src={urlForImage(race.image)?.width(500).url() ?? ""}
              alt={race.title}
              className="object-cover"
              width={500}
              height={300}
            />
          )}
        </CardContent>
      </DialogContent>
    </Dialog>
  );
}
