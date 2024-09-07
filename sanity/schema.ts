import { type SchemaTypeDefinition } from "sanity";
import { teamType } from "../schemaTypes/teamType";
import newsType from "../schemaTypes/newsType";
import blockContent from "../schemaTypes/blockContent";
import { raceType } from "../schemaTypes/raceType";
import { raceResultType } from "../schemaTypes/raceResultType";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [teamType, newsType, blockContent, raceType, raceResultType],
};
