import { Sample as TSample } from "../api/sample/Sample";

export const SAMPLE_TITLE_FIELD = "name";

export const SampleTitle = (record: TSample): string => {
  return record.name?.toString() || String(record.id);
};
