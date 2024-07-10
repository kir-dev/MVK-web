import { defineType } from "sanity";

export const teamType = defineType({
  name: "team",
  title: "Csapat",
  type: "document",
  fields: [
    {
      name: "name",
      title: "Név",
      type: "string",
      validation: (rule) => rule.required(),
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "name",
        slugify: (input) =>
          input.toLowerCase().replace(/\s+/g, "-").slice(0, 30),
      },
      description: "Ez lesz a csapat oldal URL-je.",
    },
    {
      name: "thumbnail",
      title: "Thumbnail",
      type: "image",
      description:
        "Ez fog megjelenni a főoldalon, a megfelelő megjelenítés érdekében a 9:16-os képarány ajánlott.",
      validation: (rule) => rule.required(),
    },
    {
      name: "description",
      title: "Leírás",
      type: "text",
      description: "Ez a leírás fog megjelenni a csapat oldalon.",
    },
  ],
});
