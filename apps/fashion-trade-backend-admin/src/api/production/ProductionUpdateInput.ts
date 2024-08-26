import { DesignDevelopmentWhereUniqueInput } from "../designDevelopment/DesignDevelopmentWhereUniqueInput";

export type ProductionUpdateInput = {
  designDevelopment?: DesignDevelopmentWhereUniqueInput | null;
  name?: string | null;
  status?: "Option1" | null;
};
