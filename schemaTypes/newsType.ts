import { defineType } from "sanity";

export default defineType({
  name: "news",
  title: "Hírek",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Cím",
      type: "string",
      validation: (rule) => rule.required(),
    },
    {
      name: "author",
      title: "Szerző",
      type: "string",
    },
    {
      name: "visible",
      title: "Látható-e",
      type: "boolean",
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
        slugify: (input) =>
          input
            .toLowerCase()
            .replace(/\s+/g, "-")
            .replace(/[^a-zA-Z0-9-]/g, "")
            .slice(0, 100),
      },
      validation: (rule) => rule.required(),
    },
    {
      name: "thumbnail",
      title: "Thumbnail",
      type: "image",
      validation: (rule) => rule.required(),
    },
    {
      name: "excerpt",
      title: "Rövid leírás",
      type: "string",
    },

    {
      name: "content",
      title: "Tartalom",
      type: "blockContent",
    },
  ],
});
