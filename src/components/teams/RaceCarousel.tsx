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
import Autoplay from "embla-carousel-autoplay";

export default function RaceCarousel({ races }: { races: RaceResult[] }) {
  const plugin = React.useRef(
    Autoplay({ delay: 4000, stopOnInteraction: false })
  );
  console.log("races", races);
  return (
    <div className="w-full flex justify-center my-8">
      <Carousel className="w-full max-w-md" plugins={[plugin.current]}>
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
