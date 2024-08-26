import { Production as TProduction } from "../api/production/Production";

export const PRODUCTION_TITLE_FIELD = "name";

export const ProductionTitle = (record: TProduction): string => {
  return record.name?.toString() || String(record.id);
};
