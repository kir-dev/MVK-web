import { type SchemaTypeDefinition } from "sanity";
import { teamType } from "../schemaTypes/teamType";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [teamType],
};
