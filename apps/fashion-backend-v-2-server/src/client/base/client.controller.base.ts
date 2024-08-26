/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import { ClientService } from "../client.service";
import { ClientCreateInput } from "./ClientCreateInput";
import { Client } from "./Client";
import { ClientFindManyArgs } from "./ClientFindManyArgs";
import { ClientWhereUniqueInput } from "./ClientWhereUniqueInput";
import { ClientUpdateInput } from "./ClientUpdateInput";
import { ProductionProcessFindManyArgs } from "../../productionProcess/base/ProductionProcessFindManyArgs";
import { ProductionProcess } from "../../productionProcess/base/ProductionProcess";
import { ProductionProcessWhereUniqueInput } from "../../productionProcess/base/ProductionProcessWhereUniqueInput";

export class ClientControllerBase {
  constructor(protected readonly service: ClientService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: Client })
  async createClient(@common.Body() data: ClientCreateInput): Promise<Client> {
    return await this.service.createClient({
      data: {
        ...data,

        organization: data.organization
          ? {
              connect: data.organization,
            }
          : undefined,
      },
      select: {
        createdAt: true,
        id: true,
        name: true,

        organization: {
          select: {
            id: true,
          },
        },

        updatedAt: true,
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [Client] })
  @ApiNestedQuery(ClientFindManyArgs)
  async clients(@common.Req() request: Request): Promise<Client[]> {
    const args = plainToClass(ClientFindManyArgs, request.query);
    return this.service.clients({
      ...args,
      select: {
        createdAt: true,
        id: true,
        name: true,

        organization: {
          select: {
            id: true,
          },
        },

        updatedAt: true,
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: Client })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async client(
    @common.Param() params: ClientWhereUniqueInput
  ): Promise<Client | null> {
    const result = await this.service.client({
      where: params,
      select: {
        createdAt: true,
        id: true,
        name: true,

        organization: {
          select: {
            id: true,
          },
        },

        updatedAt: true,
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: Client })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async updateClient(
    @common.Param() params: ClientWhereUniqueInput,
    @common.Body() data: ClientUpdateInput
  ): Promise<Client | null> {
    try {
      return await this.service.updateClient({
        where: params,
        data: {
          ...data,

          organization: data.organization
            ? {
                connect: data.organization,
              }
            : undefined,
        },
        select: {
          createdAt: true,
          id: true,
          name: true,

          organization: {
            select: {
              id: true,
            },
          },

          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Delete("/:id")
  @swagger.ApiOkResponse({ type: Client })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async deleteClient(
    @common.Param() params: ClientWhereUniqueInput
  ): Promise<Client | null> {
    try {
      return await this.service.deleteClient({
        where: params,
        select: {
          createdAt: true,
          id: true,
          name: true,

          organization: {
            select: {
              id: true,
            },
          },

          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Get("/:id/productionProcesses")
  @ApiNestedQuery(ProductionProcessFindManyArgs)
  async findProductionProcesses(
    @common.Req() request: Request,
    @common.Param() params: ClientWhereUniqueInput
  ): Promise<ProductionProcess[]> {
    const query = plainToClass(ProductionProcessFindManyArgs, request.query);
    const results = await this.service.findProductionProcesses(params.id, {
      ...query,
      select: {
        client: {
          select: {
            id: true,
          },
        },

        createdAt: true,
        id: true,
        name: true,
        stage: true,

        supplier: {
          select: {
            id: true,
          },
        },

        updatedAt: true,
      },
    });
    if (results === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return results;
  }

  @common.Post("/:id/productionProcesses")
  async connectProductionProcesses(
    @common.Param() params: ClientWhereUniqueInput,
    @common.Body() body: ProductionProcessWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      productionProcesses: {
        connect: body,
      },
    };
    await this.service.updateClient({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/productionProcesses")
  async updateProductionProcesses(
    @common.Param() params: ClientWhereUniqueInput,
    @common.Body() body: ProductionProcessWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      productionProcesses: {
        set: body,
      },
    };
    await this.service.updateClient({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/productionProcesses")
  async disconnectProductionProcesses(
    @common.Param() params: ClientWhereUniqueInput,
    @common.Body() body: ProductionProcessWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      productionProcesses: {
        disconnect: body,
      },
    };
    await this.service.updateClient({
      where: params,
      data,
      select: { id: true },
    });
  }
}