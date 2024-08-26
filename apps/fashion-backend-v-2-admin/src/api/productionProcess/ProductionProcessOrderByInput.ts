import { SortOrder } from "../../util/SortOrder";

export type ProductionProcessOrderByInput = {
  clientId?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  name?: SortOrder;
  stage?: SortOrder;
  supplierId?: SortOrder;
  updatedAt?: SortOrder;
};
