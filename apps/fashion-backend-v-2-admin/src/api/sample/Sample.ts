import { ProductionProcess } from "../productionProcess/ProductionProcess";

export type Sample = {
  createdAt: Date;
  id: string;
  name: string | null;
  productionProcess?: ProductionProcess | null;
  status?: "Option1" | null;
  updatedAt: Date;
};
