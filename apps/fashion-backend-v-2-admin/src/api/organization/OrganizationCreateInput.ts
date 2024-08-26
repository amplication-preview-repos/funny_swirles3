import { ClientCreateNestedManyWithoutOrganizationsInput } from "./ClientCreateNestedManyWithoutOrganizationsInput";
import { SupplierCreateNestedManyWithoutOrganizationsInput } from "./SupplierCreateNestedManyWithoutOrganizationsInput";

export type OrganizationCreateInput = {
  clients?: ClientCreateNestedManyWithoutOrganizationsInput;
  name?: string | null;
  suppliers?: SupplierCreateNestedManyWithoutOrganizationsInput;
  typeField?: "Option1" | null;
};
