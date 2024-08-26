import * as graphql from "@nestjs/graphql";
import { DesignDevelopmentResolverBase } from "./base/designDevelopment.resolver.base";
import { DesignDevelopment } from "./base/DesignDevelopment";
import { DesignDevelopmentService } from "./designDevelopment.service";

@graphql.Resolver(() => DesignDevelopment)
export class DesignDevelopmentResolver extends DesignDevelopmentResolverBase {
  constructor(protected readonly service: DesignDevelopmentService) {
    super(service);
  }
}
