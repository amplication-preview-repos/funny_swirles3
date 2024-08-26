import { OrganizationWhereUniqueInput } from "../organization/OrganizationWhereUniqueInput";
import { ProductionProcessUpdateManyWithoutClientsInput } from "./ProductionProcessUpdateManyWithoutClientsInput";

export type ClientUpdateInput = {
  name?: string | null;
  organization?: OrganizationWhereUniqueInput | null;
  productionProcesses?: ProductionProcessUpdateManyWithoutClientsInput;
};
