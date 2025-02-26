"use client";
import { RaceResult } from "@/lib/sanity.types";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import RaceResultCard from "./RaceResultCard";
import React from "react";

export default function RaceCarousel({ races }: { races: RaceResult[] }) {
  return (
    <div className="flex flex-row justify-center">
      <Carousel>
        <CarouselContent>
          {races.map((race) => (
            <CarouselItem className="basis-1/3" key={race._id}>
              <RaceResultCard race={race} />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
}
