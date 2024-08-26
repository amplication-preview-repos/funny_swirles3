import { Module } from "@nestjs/common";
import { DesignDevelopmentModuleBase } from "./base/designDevelopment.module.base";
import { DesignDevelopmentService } from "./designDevelopment.service";
import { DesignDevelopmentController } from "./designDevelopment.controller";
import { DesignDevelopmentResolver } from "./designDevelopment.resolver";

@Module({
  imports: [DesignDevelopmentModuleBase],
  controllers: [DesignDevelopmentController],
  providers: [DesignDevelopmentService, DesignDevelopmentResolver],
  exports: [DesignDevelopmentService],
})
export class DesignDevelopmentModule {}
