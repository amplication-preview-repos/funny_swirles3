import { OrganizationWhereUniqueInput } from "../organization/OrganizationWhereUniqueInput";

export type UserAccountCreateInput = {
  email?: string | null;
  organization?: OrganizationWhereUniqueInput | null;
  role?: "Option1" | null;
  username?: string | null;
};
