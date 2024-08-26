import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { ProductionProcessService } from "./productionProcess.service";
import { ProductionProcessControllerBase } from "./base/productionProcess.controller.base";

@swagger.ApiTags("productionProcesses")
@common.Controller("productionProcesses")
export class ProductionProcessController extends ProductionProcessControllerBase {
  constructor(protected readonly service: ProductionProcessService) {
    super(service);
  }
}
