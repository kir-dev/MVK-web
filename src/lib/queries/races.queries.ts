import { groq } from "next-sanity";
import { SanityClient } from "sanity";
import { Race, Team } from "../sanity.types";

export const racesQuery = groq`*[_type == "race"]`;

export async function getRaces(
  client: SanityClient
): Promise<Race[] | undefined> {
  return await client.fetch(racesQuery, {});
}
