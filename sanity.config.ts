"use client";
import { googleMapsInput } from "@sanity/google-maps-input";
/**
 * This configuration is used to for the Sanity Studio that’s mounted on the `\src\app\studio\[[...tool]]\page.tsx` route
 */

import { visionTool } from "@sanity/vision";

import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";

// Go to https://www.sanity.io/docs/api-versioning to learn how API versioning works
import { apiVersion, dataset, projectId } from "./sanity/env";
import { schema } from "./sanity/schema";

const singletonActions = new Set(["publish", "discardChanges", "restore"]);
const singletonTypes = new Set(["settings"]);

export default defineConfig({
  name: "default",
  title: "MVK",
  basePath: "/studio",
  projectId,
  dataset,
  // Add and edit the content schema in the './sanity/schema' folder
  schema,
  plugins: [
    structureTool({
      structure: (S) =>
        S.list()
          .title("Content")
          .items([
            // Our singleton type has a list item with a custom child
            S.listItem().title("Settings").id("settings").child(
              // Instead of rendering a list of documents, we render a single
              // document, specifying the `documentId` manually to ensure
              // that we're editing the single instance of the document
              S.document().schemaType("settings").documentId("settings")
            ),
            ...S.documentTypeListItems().filter(
              (listItem) => !["settings"].includes(listItem.getId() ?? "")
            ),
          ]),
    }),
    // Vision is a tool that lets you query your content with GROQ in the studio
    // https://www.sanity.io/docs/the-vision-plugin
    visionTool({ defaultApiVersion: apiVersion }),
    googleMapsInput({
      apiKey: process.env.NEXT_PUBLIC_MAPS_API_KEY || "",
    }),
  ],
});
