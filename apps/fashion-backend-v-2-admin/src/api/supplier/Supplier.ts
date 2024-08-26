import { Organization } from "../organization/Organization";
import { ProductionProcess } from "../productionProcess/ProductionProcess";

export type Supplier = {
  createdAt: Date;
  id: string;
  name: string | null;
  organization?: Organization | null;
  productionProcesses?: Array<ProductionProcess>;
  typeField?: "Option1" | null;
  updatedAt: Date;
};
