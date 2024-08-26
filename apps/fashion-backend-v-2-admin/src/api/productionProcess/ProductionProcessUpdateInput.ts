import { ClientWhereUniqueInput } from "../client/ClientWhereUniqueInput";
import { SampleUpdateManyWithoutProductionProcessesInput } from "./SampleUpdateManyWithoutProductionProcessesInput";
import { SupplierWhereUniqueInput } from "../supplier/SupplierWhereUniqueInput";

export type ProductionProcessUpdateInput = {
  client?: ClientWhereUniqueInput | null;
  name?: string | null;
  samples?: SampleUpdateManyWithoutProductionProcessesInput;
  stage?: "Option1" | null;
  supplier?: SupplierWhereUniqueInput | null;
};
