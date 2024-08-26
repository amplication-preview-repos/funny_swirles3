import { Organization } from "../organization/Organization";

export type UserAccount = {
  createdAt: Date;
  email: string | null;
  id: string;
  organization?: Organization | null;
  role?: "Option1" | null;
  updatedAt: Date;
  username: string | null;
};
