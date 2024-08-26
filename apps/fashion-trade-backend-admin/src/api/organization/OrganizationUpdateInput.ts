import { ClientUpdateManyWithoutOrganizationsInput } from "./ClientUpdateManyWithoutOrganizationsInput";
import { SupplierUpdateManyWithoutOrganizationsInput } from "./SupplierUpdateManyWithoutOrganizationsInput";
import { UserAccountUpdateManyWithoutOrganizationsInput } from "./UserAccountUpdateManyWithoutOrganizationsInput";

export type OrganizationUpdateInput = {
  clients?: ClientUpdateManyWithoutOrganizationsInput;
  name?: string | null;
  suppliers?: SupplierUpdateManyWithoutOrganizationsInput;
  typeField?: "Option1" | null;
  userAccounts?: UserAccountUpdateManyWithoutOrganizationsInput;
};
