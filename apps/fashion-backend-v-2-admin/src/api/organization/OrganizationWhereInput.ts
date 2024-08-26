import { ClientListRelationFilter } from "../client/ClientListRelationFilter";
import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { SupplierListRelationFilter } from "../supplier/SupplierListRelationFilter";

export type OrganizationWhereInput = {
  clients?: ClientListRelationFilter;
  id?: StringFilter;
  name?: StringNullableFilter;
  suppliers?: SupplierListRelationFilter;
  typeField?: "Option1";
};
