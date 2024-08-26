import { ClientWhereUniqueInput } from "../client/ClientWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { SampleListRelationFilter } from "../sample/SampleListRelationFilter";
import { SupplierWhereUniqueInput } from "../supplier/SupplierWhereUniqueInput";

export type ProductionProcessWhereInput = {
  client?: ClientWhereUniqueInput;
  id?: StringFilter;
  name?: StringNullableFilter;
  samples?: SampleListRelationFilter;
  stage?: "Option1";
  supplier?: SupplierWhereUniqueInput;
};
