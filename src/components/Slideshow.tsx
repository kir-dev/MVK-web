"use client";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { getVideos } from "@/lib/queries/video.queries";
import { getClient } from "@/lib/sanity.client";
import { SlideshowVideoData } from "@/lib/sanity.types";
import Autoplay from "embla-carousel-autoplay";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";

export default function Slideshow() {
  const plugin = React.useRef(
    Autoplay({ delay: 6000, stopOnInteraction: false })
  );
  const [elements, setElements] = useState<SlideshowVideoData[]>([]);
  useEffect(() => {
    const client = getClient();
    async function fetchVideos() {
      try {
        const data = await getVideos(client);
        if (data) {
          setElements(data);
        }
      } catch (error) {
        console.error("Error fetching videos:", error);
      }
    }

    fetchVideos();
  }, []);
  return (
    <>
      <div className="w-screen h-full absolute z-20"></div>

      <Carousel className="w-screen z-10" plugins={[plugin.current]}>
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
                  src={`https://www.youtube.com/embed/${data.videoId}?autoplay=1&mute=1&controls=0&disablekb=1&loop=1&playsinline=0`}
                  //src={`https://www.youtube.com/embed/${data.id}?&mute=1&controls=0&disablekb=1&loop=1&playsinline=0`}
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
      </Carousel>
    </>
  );
}
