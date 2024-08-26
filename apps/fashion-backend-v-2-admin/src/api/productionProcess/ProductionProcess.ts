import { Client } from "../client/Client";
import { Sample } from "../sample/Sample";
import { Supplier } from "../supplier/Supplier";

export type ProductionProcess = {
  client?: Client | null;
  createdAt: Date;
  id: string;
  name: string | null;
  samples?: Array<Sample>;
  stage?: "Option1" | null;
  supplier?: Supplier | null;
  updatedAt: Date;
};
