import { DesignDevelopmentCreateNestedManyWithoutClientsInput } from "./DesignDevelopmentCreateNestedManyWithoutClientsInput";
import { OrganizationWhereUniqueInput } from "../organization/OrganizationWhereUniqueInput";

export type ClientCreateInput = {
  designDevelopments?: DesignDevelopmentCreateNestedManyWithoutClientsInput;
  name?: string | null;
  organization?: OrganizationWhereUniqueInput | null;
};
