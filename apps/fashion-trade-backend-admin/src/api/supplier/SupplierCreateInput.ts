import { DesignDevelopmentCreateNestedManyWithoutSuppliersInput } from "./DesignDevelopmentCreateNestedManyWithoutSuppliersInput";
import { OrganizationWhereUniqueInput } from "../organization/OrganizationWhereUniqueInput";

export type SupplierCreateInput = {
  designDevelopments?: DesignDevelopmentCreateNestedManyWithoutSuppliersInput;
  name?: string | null;
  organization?: OrganizationWhereUniqueInput | null;
};
