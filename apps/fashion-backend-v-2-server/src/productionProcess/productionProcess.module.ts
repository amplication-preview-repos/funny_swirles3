import { Module } from "@nestjs/common";
import { ProductionProcessModuleBase } from "./base/productionProcess.module.base";
import { ProductionProcessService } from "./productionProcess.service";
import { ProductionProcessController } from "./productionProcess.controller";
import { ProductionProcessResolver } from "./productionProcess.resolver";

@Module({
  imports: [ProductionProcessModuleBase],
  controllers: [ProductionProcessController],
  providers: [ProductionProcessService, ProductionProcessResolver],
  exports: [ProductionProcessService],
})
export class ProductionProcessModule {}
