import { Client } from "../client/Client";
import { Supplier } from "../supplier/Supplier";

export type Organization = {
  clients?: Array<Client>;
  createdAt: Date;
  id: string;
  name: string | null;
  suppliers?: Array<Supplier>;
  typeField?: "Option1" | null;
  updatedAt: Date;
};
