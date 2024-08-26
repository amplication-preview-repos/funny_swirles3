import { ProductionWhereInput } from "./ProductionWhereInput";
import { ProductionOrderByInput } from "./ProductionOrderByInput";

export type ProductionFindManyArgs = {
  where?: ProductionWhereInput;
  orderBy?: Array<ProductionOrderByInput>;
  skip?: number;
  take?: number;
};
