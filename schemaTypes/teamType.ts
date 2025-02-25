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
      name: "images",
      title: "Képek",
      type: "array",
      of: [{ type: "image" }],
    },
    {
      name: "color",
      title: "Szín",
      type: "color",
      description:
        "A térképen ilyen színnel fognak megjelenni a csapat versenyei",
      options: {
        disableAlpha: true,
      },
    },
    {
      name: "logo",
      title: "Logo",
      type: "image",
      description:
        "Ez fog megjelenni a csapat oldalon, a megfelelő megjelenítés érdekében a 1:1-es képarány ajánlott.",
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
      type: "blockContent",
      description: "Ez a leírás fog megjelenni a csapat oldalon.",
    },
    {
      title: "Versenyek",
      name: "races",
      type: "array",
      of: [{ type: "raceResult" }],
    },
    {
      name: "Links",
      title: "Linkek",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            {
              name: "title",
              title: "Cím",
              type: "string",
              validation: (rule) => rule.required(),
            },
            {
              name: "url",
              title: "URL",
              type: "url",
              validation: (rule) => rule.required(),
            },
          ],
        },
      ],
    },
  ],
});
