import { createClient, type SanityClient } from "next-sanity";

import { apiVersion, dataset, projectId, useCdn } from "./sanity.api";

export function getClient(): SanityClient {
  const client = createClient({
    projectId,
    dataset,
    apiVersion,
    useCdn,
  });
  return client;
}
