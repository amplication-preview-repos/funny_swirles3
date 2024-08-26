import { Module } from "@nestjs/common";
import { RoleService } from "./role.service";
import { RoleController } from "./role.controller";
import { RoleResolver } from "./role.resolver";

@Module({
  controllers: [RoleController],
  providers: [RoleService, RoleResolver],
  exports: [RoleService],
})
export class RoleModule {}
