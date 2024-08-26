import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { DesignDevelopmentService } from "./designDevelopment.service";
import { DesignDevelopmentControllerBase } from "./base/designDevelopment.controller.base";

@swagger.ApiTags("designDevelopments")
@common.Controller("designDevelopments")
export class DesignDevelopmentController extends DesignDevelopmentControllerBase {
  constructor(protected readonly service: DesignDevelopmentService) {
    super(service);
  }
}
