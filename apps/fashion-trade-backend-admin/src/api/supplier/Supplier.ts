import { DesignDevelopment } from "../designDevelopment/DesignDevelopment";
import { Organization } from "../organization/Organization";

export type Supplier = {
  createdAt: Date;
  designDevelopments?: Array<DesignDevelopment>;
  id: string;
  name: string | null;
  organization?: Organization | null;
  updatedAt: Date;
};
