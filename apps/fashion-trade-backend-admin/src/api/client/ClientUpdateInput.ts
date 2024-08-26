import { DesignDevelopmentUpdateManyWithoutClientsInput } from "./DesignDevelopmentUpdateManyWithoutClientsInput";
import { OrganizationWhereUniqueInput } from "../organization/OrganizationWhereUniqueInput";

export type ClientUpdateInput = {
  designDevelopments?: DesignDevelopmentUpdateManyWithoutClientsInput;
  name?: string | null;
  organization?: OrganizationWhereUniqueInput | null;
};
