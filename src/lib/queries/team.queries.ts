import { groq } from "next-sanity";
import { SanityClient } from "sanity";
import { Team } from "../sanity.types";

export const teamsQuery = groq`*[_type == "team"]`;

export async function getTeams(
  client: SanityClient
): Promise<Team[] | undefined> {
  return await client.fetch(teamsQuery, {});
}

export const teamQuery = groq`*[_type == "team" && slug.current == $slug][0]`;

export async function getTeam(
  client: SanityClient,
  slug: string
): Promise<Team | undefined> {
  return await client.fetch(teamQuery, {
    slug,
  });
}
