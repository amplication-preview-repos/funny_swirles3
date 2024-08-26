import { ProductionProcessWhereUniqueInput } from "../productionProcess/ProductionProcessWhereUniqueInput";

export type SampleUpdateInput = {
  name?: string | null;
  productionProcess?: ProductionProcessWhereUniqueInput | null;
  status?: "Option1" | null;
};
