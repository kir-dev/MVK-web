import { groq, SanityClient } from "next-sanity";
import { Settings } from "../sanity.types";

const settingsQuery = groq`*[_type == "settings"][0]`;

export async function getSettings(
  client: SanityClient
): Promise<Settings | undefined> {
  return await client.fetch(settingsQuery, {});
}
