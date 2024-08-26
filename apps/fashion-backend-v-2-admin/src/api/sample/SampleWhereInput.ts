import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { ProductionProcessWhereUniqueInput } from "../productionProcess/ProductionProcessWhereUniqueInput";

export type SampleWhereInput = {
  id?: StringFilter;
  name?: StringNullableFilter;
  productionProcess?: ProductionProcessWhereUniqueInput;
  status?: "Option1";
};
