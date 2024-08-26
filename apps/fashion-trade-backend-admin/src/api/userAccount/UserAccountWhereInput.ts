import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { OrganizationWhereUniqueInput } from "../organization/OrganizationWhereUniqueInput";

export type UserAccountWhereInput = {
  email?: StringNullableFilter;
  id?: StringFilter;
  organization?: OrganizationWhereUniqueInput;
  role?: "Option1";
  username?: StringNullableFilter;
};
