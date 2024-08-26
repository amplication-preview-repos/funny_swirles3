import { ProductionProcess as TProductionProcess } from "../api/productionProcess/ProductionProcess";

export const PRODUCTIONPROCESS_TITLE_FIELD = "name";

export const ProductionProcessTitle = (record: TProductionProcess): string => {
  return record.name?.toString() || String(record.id);
};
