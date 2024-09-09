import { groq, SanityClient } from "next-sanity";
import { SlideshowVideoData } from "../sanity.types";

const videoQuery = groq`*[_type == "video"]`;

export async function getVideos(
  client: SanityClient
): Promise<SlideshowVideoData[] | undefined> {
  return await client.fetch(videoQuery, {});
}
