import { OrganizationWhereUniqueInput } from "../organization/OrganizationWhereUniqueInput";
import { ProductionProcessCreateNestedManyWithoutSuppliersInput } from "./ProductionProcessCreateNestedManyWithoutSuppliersInput";

export type SupplierCreateInput = {
  name?: string | null;
  organization?: OrganizationWhereUniqueInput | null;
  productionProcesses?: ProductionProcessCreateNestedManyWithoutSuppliersInput;
  typeField?: "Option1" | null;
};
