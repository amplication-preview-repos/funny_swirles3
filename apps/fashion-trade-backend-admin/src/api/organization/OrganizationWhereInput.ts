import { ClientListRelationFilter } from "../client/ClientListRelationFilter";
import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { SupplierListRelationFilter } from "../supplier/SupplierListRelationFilter";
import { UserAccountListRelationFilter } from "../userAccount/UserAccountListRelationFilter";

export type OrganizationWhereInput = {
  clients?: ClientListRelationFilter;
  id?: StringFilter;
  name?: StringNullableFilter;
  suppliers?: SupplierListRelationFilter;
  typeField?: "Option1";
  userAccounts?: UserAccountListRelationFilter;
};
