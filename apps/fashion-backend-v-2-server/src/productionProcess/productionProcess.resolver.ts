import * as graphql from "@nestjs/graphql";
import { ProductionProcessResolverBase } from "./base/productionProcess.resolver.base";
import { ProductionProcess } from "./base/ProductionProcess";
import { ProductionProcessService } from "./productionProcess.service";

@graphql.Resolver(() => ProductionProcess)
export class ProductionProcessResolver extends ProductionProcessResolverBase {
  constructor(protected readonly service: ProductionProcessService) {
    super(service);
  }
}
