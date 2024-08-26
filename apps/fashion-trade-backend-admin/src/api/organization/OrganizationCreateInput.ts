import { ClientCreateNestedManyWithoutOrganizationsInput } from "./ClientCreateNestedManyWithoutOrganizationsInput";
import { SupplierCreateNestedManyWithoutOrganizationsInput } from "./SupplierCreateNestedManyWithoutOrganizationsInput";
import { UserAccountCreateNestedManyWithoutOrganizationsInput } from "./UserAccountCreateNestedManyWithoutOrganizationsInput";

export type OrganizationCreateInput = {
  clients?: ClientCreateNestedManyWithoutOrganizationsInput;
  name?: string | null;
  suppliers?: SupplierCreateNestedManyWithoutOrganizationsInput;
  typeField?: "Option1" | null;
  userAccounts?: UserAccountCreateNestedManyWithoutOrganizationsInput;
};
