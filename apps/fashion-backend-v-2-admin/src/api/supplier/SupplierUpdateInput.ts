import { OrganizationWhereUniqueInput } from "../organization/OrganizationWhereUniqueInput";
import { ProductionProcessUpdateManyWithoutSuppliersInput } from "./ProductionProcessUpdateManyWithoutSuppliersInput";

export type SupplierUpdateInput = {
  name?: string | null;
  organization?: OrganizationWhereUniqueInput | null;
  productionProcesses?: ProductionProcessUpdateManyWithoutSuppliersInput;
  typeField?: "Option1" | null;
};
