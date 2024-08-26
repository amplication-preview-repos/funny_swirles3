import { DesignDevelopmentListRelationFilter } from "../designDevelopment/DesignDevelopmentListRelationFilter";
import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { OrganizationWhereUniqueInput } from "../organization/OrganizationWhereUniqueInput";

export type ClientWhereInput = {
  designDevelopments?: DesignDevelopmentListRelationFilter;
  id?: StringFilter;
  name?: StringNullableFilter;
  organization?: OrganizationWhereUniqueInput;
};
