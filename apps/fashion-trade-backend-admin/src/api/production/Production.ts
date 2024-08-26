import { DesignDevelopment } from "../designDevelopment/DesignDevelopment";

export type Production = {
  createdAt: Date;
  designDevelopment?: DesignDevelopment | null;
  id: string;
  name: string | null;
  status?: "Option1" | null;
  updatedAt: Date;
};
