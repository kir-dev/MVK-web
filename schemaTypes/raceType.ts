import { defineType } from "sanity";

export const raceType = defineType({
  name: "race",
  title: "Verseny",
  type: "document",
  fields: [
    {
      title: "Cím",
      name: "title",
      type: "string",
    },
    {
      title: "Link",
      name: "url",
      type: "url",
    },
    {
      title: "Földrajzi szélesség",
      name: "lat",
      type: "number",
      description:
        "Északi szélesség. Amennyiben délen helyezkedik el, negatív számot adj meg.",
    },
    {
      title: "Földrajzi hosszúság",
      name: "lng",
      type: "number",
      description:
        "Keleti hosszúság. Amennyiben nyugaton helyezkedik el, negatív számot adj meg.",
    },
  ],
});
