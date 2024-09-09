import { defineType } from "sanity";

export const videoType = defineType({
  name: "video",
  title: "Slideshow Videó",
  type: "document",
  fields: [
    {
      title: "Cím",
      name: "title",
      type: "string",
    },
    {
      title: "Videó id",
      name: "videoId",
      type: "string",
    },
  ],
});
