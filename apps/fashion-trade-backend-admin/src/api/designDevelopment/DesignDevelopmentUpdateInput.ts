import { ClientWhereUniqueInput } from "../client/ClientWhereUniqueInput";
import { ProductionUpdateManyWithoutDesignDevelopmentsInput } from "./ProductionUpdateManyWithoutDesignDevelopmentsInput";
import { SupplierWhereUniqueInput } from "../supplier/SupplierWhereUniqueInput";

export type DesignDevelopmentUpdateInput = {
  client?: ClientWhereUniqueInput | null;
  name?: string | null;
  productions?: ProductionUpdateManyWithoutDesignDevelopmentsInput;
  status?: "Option1" | null;
  supplier?: SupplierWhereUniqueInput | null;
};
