import * as graphql from "@nestjs/graphql";
import { ProductionResolverBase } from "./base/production.resolver.base";
import { Production } from "./base/Production";
import { ProductionService } from "./production.service";

@graphql.Resolver(() => Production)
export class ProductionResolver extends ProductionResolverBase {
  constructor(protected readonly service: ProductionService) {
    super(service);
  }
}
