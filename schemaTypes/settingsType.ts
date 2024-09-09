import { defineType } from "sanity";

export const settingsType = defineType({
  name: "settings",
  title: "Beállítások",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Cím",
      type: "string",
      readOnly: true,
    },
    {
      name: "intro",
      title: "Bevezető",
      type: "text",
    },
  ],
});
