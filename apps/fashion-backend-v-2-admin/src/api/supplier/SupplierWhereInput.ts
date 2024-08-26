import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { OrganizationWhereUniqueInput } from "../organization/OrganizationWhereUniqueInput";
import { ProductionProcessListRelationFilter } from "../productionProcess/ProductionProcessListRelationFilter";

export type SupplierWhereInput = {
  id?: StringFilter;
  name?: StringNullableFilter;
  organization?: OrganizationWhereUniqueInput;
  productionProcesses?: ProductionProcessListRelationFilter;
  typeField?: "Option1";
};