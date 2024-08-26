import { DesignDevelopmentWhereUniqueInput } from "../designDevelopment/DesignDevelopmentWhereUniqueInput";

export type ProductionCreateInput = {
  designDevelopment?: DesignDevelopmentWhereUniqueInput | null;
  name?: string | null;
  status?: "Option1" | null;
};
