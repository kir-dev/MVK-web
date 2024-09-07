import { defineType } from "sanity";

export const raceResultType = defineType({
  name: "raceResult",
  title: "Verseny",
  type: "object",
  fields: [
    {
      title: "Cím",
      name: "title",
      type: "string",
    },
    {
      title: "Logo",
      name: "logo",
      type: "image",
    },
    {
      title: "Leírás",
      name: "description",
      type: "text",
    },
    {
      title: "Dátum",
      name: "date",
      type: "date",
    },
    {
      title: "Kép",
      name: "image",
      type: "image",
    },
  ],
});
