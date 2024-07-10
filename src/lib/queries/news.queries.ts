import { groq } from "next-sanity";
import { SanityClient } from "sanity";
import { News, Team } from "../sanity.types";

const newsQuery = groq`*[_type == "news"]`;

export async function getNews(
  client: SanityClient
): Promise<News[] | undefined> {
  return await client.fetch(newsQuery, {});
}

const firstFewsQuery = groq`*[_type == "news"] | order(_createdAt desc) [0...$limit]`;
export async function getFirstFewNews(
  client: SanityClient,
  limit: number
): Promise<News[] | undefined> {
  return await client.fetch(firstFewsQuery, {
    limit,
  });
}
