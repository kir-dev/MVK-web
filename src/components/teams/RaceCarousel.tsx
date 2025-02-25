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
    <div className="w-full flex justify-center my-8">
      <Carousel className="w-full max-w-2xl">
        <CarouselContent>
          {races.map((race) => (
            <CarouselItem key={race._id}>
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
