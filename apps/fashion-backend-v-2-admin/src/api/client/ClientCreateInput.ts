import { OrganizationWhereUniqueInput } from "../organization/OrganizationWhereUniqueInput";
import { ProductionProcessCreateNestedManyWithoutClientsInput } from "./ProductionProcessCreateNestedManyWithoutClientsInput";

export type ClientCreateInput = {
  name?: string | null;
  organization?: OrganizationWhereUniqueInput | null;
  productionProcesses?: ProductionProcessCreateNestedManyWithoutClientsInput;
};
