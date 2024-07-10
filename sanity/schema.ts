import { type SchemaTypeDefinition } from "sanity";
import { teamType } from "../schemaTypes/teamType";
import newsType from "../schemaTypes/newsType";
import blockContent from "../schemaTypes/blockContent";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [teamType, newsType, blockContent],
};
