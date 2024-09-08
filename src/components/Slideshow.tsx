"use client";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";
import Autoplay from "embla-carousel-autoplay";
import React from "react";
import { Card, CardContent } from "./ui/card";
import { SlideshowVideoData } from "@/types";
const images = [
  "/bme-formula-racing-team.jpg",
  "/bme-formula-racing-team.jpg",
  "/bme-formula-racing-team.jpg",
  "/bme-formula-racing-team.jpg",
  "/bme-formula-racing-team.jpg",
];
const elements: SlideshowVideoData[] = [
  {
    title: "FS",
    id: "mxI8X09jeag",
  },
  {
    title: "MVK",
    id: "5PokC77YMwA",
  },
  {
    title: "MVK",
    id: "GngIHa2aunA",
  },
];
export default function Slideshow() {
  const plugin = React.useRef(
    Autoplay({ delay: 6000, stopOnInteraction: false })
  );
  return (
    <div className="w-screen relative h-[56vh] overflow-hidden flex flex-row items-center">
      <div className="w-screen h-full absolute z-20"></div>

      <Carousel
        className="w-screen z-10"
        // plugins={[plugin.current]}
        // onMouseEnter={plugin.current.stop}
        // onMouseLeave={plugin.current.reset}
      >
        <CarouselContent>
          {elements.map((data, index) => (
            <CarouselItem
              key={index}
              className="flex items-center flex-col w-screen"
            >
              <div>
                <iframe
                  width="100%"
                  height="1000"
                  //src={`https://www.youtube.com/embed/${data.id}?autoplay=1&mute=1&controls=0&disablekb=1&loop=1&playsinline=0`}
                  src={`https://www.youtube.com/embed/${data.id}?&mute=1&controls=0&disablekb=1&loop=1&playsinline=0`}
                  title={data.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen={false}
                  className="z-0 w-screen"
                />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        {/* <CarouselPrevious className="left-4" />
      <CarouselNext className="right-4" /> */}
      </Carousel>
    </div>
  );
}
