import { Client } from "../client/Client";
import { Production } from "../production/Production";
import { Supplier } from "../supplier/Supplier";

export type DesignDevelopment = {
  client?: Client | null;
  createdAt: Date;
  id: string;
  name: string | null;
  productions?: Array<Production>;
  status?: "Option1" | null;
  supplier?: Supplier | null;
  updatedAt: Date;
};
