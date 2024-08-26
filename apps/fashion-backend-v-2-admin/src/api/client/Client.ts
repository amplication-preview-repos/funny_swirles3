import { Organization } from "../organization/Organization";
import { ProductionProcess } from "../productionProcess/ProductionProcess";

export type Client = {
  createdAt: Date;
  id: string;
  name: string | null;
  organization?: Organization | null;
  productionProcesses?: Array<ProductionProcess>;
  updatedAt: Date;
};
