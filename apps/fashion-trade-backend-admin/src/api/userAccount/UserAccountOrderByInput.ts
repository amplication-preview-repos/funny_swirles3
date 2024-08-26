import { SortOrder } from "../../util/SortOrder";

export type UserAccountOrderByInput = {
  createdAt?: SortOrder;
  email?: SortOrder;
  id?: SortOrder;
  organizationId?: SortOrder;
  role?: SortOrder;
  updatedAt?: SortOrder;
  username?: SortOrder;
};
