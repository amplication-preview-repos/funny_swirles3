import * as graphql from "@nestjs/graphql";
import { RoleService } from "./role.service";

export class RoleResolver {
  constructor(protected readonly service: RoleService) {}
}
