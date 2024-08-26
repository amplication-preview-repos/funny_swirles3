import { ClientUpdateManyWithoutOrganizationsInput } from "./ClientUpdateManyWithoutOrganizationsInput";
import { SupplierUpdateManyWithoutOrganizationsInput } from "./SupplierUpdateManyWithoutOrganizationsInput";

export type OrganizationUpdateInput = {
  clients?: ClientUpdateManyWithoutOrganizationsInput;
  name?: string | null;
  suppliers?: SupplierUpdateManyWithoutOrganizationsInput;
  typeField?: "Option1" | null;
};
