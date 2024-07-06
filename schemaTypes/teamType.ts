import { defineType } from "sanity";

export const teamType = defineType({
  name: "csapat",
  title: "Csapat",
  type: "document",
  fields: [
    {
      name: "nev",
      title: "Név",
      type: "string",
    },
    {
      name: "logo",
      title: "Logo",
      type: "image",
    },
    {
      name: "leiras",
      title: "Leírás",
      type: "text",
    },
  ],
});
