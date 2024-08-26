import { ProductionProcessWhereUniqueInput } from "../productionProcess/ProductionProcessWhereUniqueInput";

export type SampleCreateInput = {
  name?: string | null;
  productionProcess?: ProductionProcessWhereUniqueInput | null;
  status?: "Option1" | null;
};
