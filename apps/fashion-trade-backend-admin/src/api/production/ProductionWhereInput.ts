import { DesignDevelopmentWhereUniqueInput } from "../designDevelopment/DesignDevelopmentWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type ProductionWhereInput = {
  designDevelopment?: DesignDevelopmentWhereUniqueInput;
  id?: StringFilter;
  name?: StringNullableFilter;
  status?: "Option1";
};
