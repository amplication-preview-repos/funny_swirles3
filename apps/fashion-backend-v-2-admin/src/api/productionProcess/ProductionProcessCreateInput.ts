import { ClientWhereUniqueInput } from "../client/ClientWhereUniqueInput";
import { SampleCreateNestedManyWithoutProductionProcessesInput } from "./SampleCreateNestedManyWithoutProductionProcessesInput";
import { SupplierWhereUniqueInput } from "../supplier/SupplierWhereUniqueInput";

export type ProductionProcessCreateInput = {
  client?: ClientWhereUniqueInput | null;
  name?: string | null;
  samples?: SampleCreateNestedManyWithoutProductionProcessesInput;
  stage?: "Option1" | null;
  supplier?: SupplierWhereUniqueInput | null;
};
