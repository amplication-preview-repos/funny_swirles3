import { ClientWhereUniqueInput } from "../client/ClientWhereUniqueInput";
import { ProductionCreateNestedManyWithoutDesignDevelopmentsInput } from "./ProductionCreateNestedManyWithoutDesignDevelopmentsInput";
import { SupplierWhereUniqueInput } from "../supplier/SupplierWhereUniqueInput";

export type DesignDevelopmentCreateInput = {
  client?: ClientWhereUniqueInput | null;
  name?: string | null;
  productions?: ProductionCreateNestedManyWithoutDesignDevelopmentsInput;
  status?: "Option1" | null;
  supplier?: SupplierWhereUniqueInput | null;
};
