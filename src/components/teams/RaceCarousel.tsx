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
    <div className="w-full flex justify-center my-16 h-fit">
      <Carousel
        orientation="vertical"
        opts={{
          align: "start",
        }}
      >
        <CarouselContent className="h-[65dvh]">
          {races.map((race) => (
            <CarouselItem key={race._id} className="basis-1/2">
              <RaceResultCard race={race} />
            </CarouselItem>
          ))}
        </CarouselContent>
        {races.length > 2 && (
          <>
            <CarouselPrevious className="text-black" />
            <CarouselNext className="text-black" />
          </>
        )}
      </Carousel>
    </div>
  );
}
