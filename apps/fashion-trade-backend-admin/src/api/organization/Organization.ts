import { Client } from "../client/Client";
import { Supplier } from "../supplier/Supplier";
import { UserAccount } from "../userAccount/UserAccount";

export type Organization = {
  clients?: Array<Client>;
  createdAt: Date;
  id: string;
  name: string | null;
  suppliers?: Array<Supplier>;
  typeField?: "Option1" | null;
  updatedAt: Date;
  userAccounts?: Array<UserAccount>;
};
