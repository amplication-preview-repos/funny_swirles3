import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { ProductionProcessServiceBase } from "./base/productionProcess.service.base";

@Injectable()
export class ProductionProcessService extends ProductionProcessServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
