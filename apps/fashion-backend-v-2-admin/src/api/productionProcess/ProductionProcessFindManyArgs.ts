import { ProductionProcessWhereInput } from "./ProductionProcessWhereInput";
import { ProductionProcessOrderByInput } from "./ProductionProcessOrderByInput";

export type ProductionProcessFindManyArgs = {
  where?: ProductionProcessWhereInput;
  orderBy?: Array<ProductionProcessOrderByInput>;
  skip?: number;
  take?: number;
};
