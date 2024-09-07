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
  ],
});
