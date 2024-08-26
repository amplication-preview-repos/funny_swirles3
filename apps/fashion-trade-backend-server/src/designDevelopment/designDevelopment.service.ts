import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { DesignDevelopmentServiceBase } from "./base/designDevelopment.service.base";

@Injectable()
export class DesignDevelopmentService extends DesignDevelopmentServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
