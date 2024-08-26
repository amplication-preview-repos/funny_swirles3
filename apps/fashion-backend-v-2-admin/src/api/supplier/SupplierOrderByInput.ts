import { SortOrder } from "../../util/SortOrder";

export type SupplierOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  name?: SortOrder;
  organizationId?: SortOrder;
  typeField?: SortOrder;
  updatedAt?: SortOrder;
};
