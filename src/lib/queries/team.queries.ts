import { groq } from "next-sanity";
import { SanityClient } from "sanity";
import { Team } from "../sanity.types";

export const teamQuery = groq`*[_type == "team"]`;

export async function getTeams(
  client: SanityClient
): Promise<Team[] | undefined> {
  return await client.fetch(teamQuery, {});
}
