import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as errors from "../errors";
import { RoleService } from "./role.service";

@swagger.ApiTags("roles")
@common.Controller("roles")
export class RoleController {
  constructor(protected readonly service: RoleService) {}
}
