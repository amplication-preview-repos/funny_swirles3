import { DesignDevelopment as TDesignDevelopment } from "../api/designDevelopment/DesignDevelopment";

export const DESIGNDEVELOPMENT_TITLE_FIELD = "name";

export const DesignDevelopmentTitle = (record: TDesignDevelopment): string => {
  return record.name?.toString() || String(record.id);
};
