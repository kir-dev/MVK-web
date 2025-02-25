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
export default function Gallery({ team }: { team: Team }) {
  const [openGallery, setOpenGallery] = useState(false);
  console.log(team);
  return (
    <>
      <button
        className="flex flex-col cursor-pointer justify-center items-center gap-4 absolute top-4 z-40 right-4 h-36 aspect-square border rounded-md"
        onClick={() => setOpenGallery(true)}
      >
        <h1 className="text-3xl">Galéria</h1>
        <Images />
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
