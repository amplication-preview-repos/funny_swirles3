import { ClientWhereUniqueInput } from "../client/ClientWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { ProductionListRelationFilter } from "../production/ProductionListRelationFilter";
import { SupplierWhereUniqueInput } from "../supplier/SupplierWhereUniqueInput";

export type DesignDevelopmentWhereInput = {
  client?: ClientWhereUniqueInput;
  id?: StringFilter;
  name?: StringNullableFilter;
  productions?: ProductionListRelationFilter;
  status?: "Option1";
  supplier?: SupplierWhereUniqueInput;
};
