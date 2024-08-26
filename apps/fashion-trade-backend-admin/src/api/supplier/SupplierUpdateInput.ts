import { DesignDevelopmentUpdateManyWithoutSuppliersInput } from "./DesignDevelopmentUpdateManyWithoutSuppliersInput";
import { OrganizationWhereUniqueInput } from "../organization/OrganizationWhereUniqueInput";

export type SupplierUpdateInput = {
  designDevelopments?: DesignDevelopmentUpdateManyWithoutSuppliersInput;
  name?: string | null;
  organization?: OrganizationWhereUniqueInput | null;
};
