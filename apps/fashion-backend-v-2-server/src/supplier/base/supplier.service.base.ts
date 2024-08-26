/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";

import {
  Prisma,
  Supplier as PrismaSupplier,
  ProductionProcess as PrismaProductionProcess,
  Organization as PrismaOrganization,
} from "@prisma/client";

export class SupplierServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(args: Omit<Prisma.SupplierCountArgs, "select">): Promise<number> {
    return this.prisma.supplier.count(args);
  }

  async suppliers(
    args: Prisma.SupplierFindManyArgs
  ): Promise<PrismaSupplier[]> {
    return this.prisma.supplier.findMany(args);
  }
  async supplier(
    args: Prisma.SupplierFindUniqueArgs
  ): Promise<PrismaSupplier | null> {
    return this.prisma.supplier.findUnique(args);
  }
  async createSupplier(
    args: Prisma.SupplierCreateArgs
  ): Promise<PrismaSupplier> {
    return this.prisma.supplier.create(args);
  }
  async updateSupplier(
    args: Prisma.SupplierUpdateArgs
  ): Promise<PrismaSupplier> {
    return this.prisma.supplier.update(args);
  }
  async deleteSupplier(
    args: Prisma.SupplierDeleteArgs
  ): Promise<PrismaSupplier> {
    return this.prisma.supplier.delete(args);
  }

  async findProductionProcesses(
    parentId: string,
    args: Prisma.ProductionProcessFindManyArgs
  ): Promise<PrismaProductionProcess[]> {
    return this.prisma.supplier
      .findUniqueOrThrow({
        where: { id: parentId },
      })
      .productionProcesses(args);
  }

  async getOrganization(parentId: string): Promise<PrismaOrganization | null> {
    return this.prisma.supplier
      .findUnique({
        where: { id: parentId },
      })
      .organization();
  }
}
