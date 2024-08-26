import { OrganizationWhereUniqueInput } from "../organization/OrganizationWhereUniqueInput";

export type UserAccountUpdateInput = {
  email?: string | null;
  organization?: OrganizationWhereUniqueInput | null;
  role?: "Option1" | null;
  username?: string | null;
};
