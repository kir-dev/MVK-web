"use client";

import "yet-another-react-lightbox/styles.css";
import "yet-another-react-lightbox/plugins/captions.css";

import { urlForImage } from "@/lib/sanity.image";
import { Team } from "@/lib/sanity.types";
import Lightbox from "yet-another-react-lightbox";
import { useState } from "react";
import { Images } from "lucide-react";
import NextJsImage from "../next-js-image";
import { Button } from "../ui/button";
import Image from "next/image";
export default function Gallery({ team }: { team: Team }) {
  const [openGallery, setOpenGallery] = useState(false);
  if (!team.images || team.images.length === 0) return null;
  return (
    <>
      <button
        className="flex flex-col cursor-pointer justify-center items-center gap-4 float-end rounded-md relative mt-auto"
        onClick={() => setOpenGallery(true)}
      >
        <Image
          src={urlForImage(team.images[0])?.url() || ""}
          alt="Gallery"
          width={500}
          height={500}
          className="rounded-md"
        />
        <h3 className="absolute top-2 left-2 bold bg-[#263238] p-4 text-white rounded-md">
          Galéria
        </h3>
      </button>
      <Lightbox
        open={openGallery}
        close={() => setOpenGallery(false)}
        slides={team.images.map((i) => ({
          src: urlForImage(i)?.url() || "",
        }))}
        render={{ slide: NextJsImage }}
      />
    </>
  );
}
