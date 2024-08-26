/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as graphql from "@nestjs/graphql";
import { GraphQLError } from "graphql";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import { Sample } from "./Sample";
import { SampleCountArgs } from "./SampleCountArgs";
import { SampleFindManyArgs } from "./SampleFindManyArgs";
import { SampleFindUniqueArgs } from "./SampleFindUniqueArgs";
import { CreateSampleArgs } from "./CreateSampleArgs";
import { UpdateSampleArgs } from "./UpdateSampleArgs";
import { DeleteSampleArgs } from "./DeleteSampleArgs";
import { ProductionProcess } from "../../productionProcess/base/ProductionProcess";
import { SampleService } from "../sample.service";
@graphql.Resolver(() => Sample)
export class SampleResolverBase {
  constructor(protected readonly service: SampleService) {}

  async _samplesMeta(
    @graphql.Args() args: SampleCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @graphql.Query(() => [Sample])
  async samples(@graphql.Args() args: SampleFindManyArgs): Promise<Sample[]> {
    return this.service.samples(args);
  }

  @graphql.Query(() => Sample, { nullable: true })
  async sample(
    @graphql.Args() args: SampleFindUniqueArgs
  ): Promise<Sample | null> {
    const result = await this.service.sample(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => Sample)
  async createSample(@graphql.Args() args: CreateSampleArgs): Promise<Sample> {
    return await this.service.createSample({
      ...args,
      data: {
        ...args.data,

        productionProcess: args.data.productionProcess
          ? {
              connect: args.data.productionProcess,
            }
          : undefined,
      },
    });
  }

  @graphql.Mutation(() => Sample)
  async updateSample(
    @graphql.Args() args: UpdateSampleArgs
  ): Promise<Sample | null> {
    try {
      return await this.service.updateSample({
        ...args,
        data: {
          ...args.data,

          productionProcess: args.data.productionProcess
            ? {
                connect: args.data.productionProcess,
              }
            : undefined,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.Mutation(() => Sample)
  async deleteSample(
    @graphql.Args() args: DeleteSampleArgs
  ): Promise<Sample | null> {
    try {
      return await this.service.deleteSample(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.ResolveField(() => ProductionProcess, {
    nullable: true,
    name: "productionProcess",
  })
  async getProductionProcess(
    @graphql.Parent() parent: Sample
  ): Promise<ProductionProcess | null> {
    const result = await this.service.getProductionProcess(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }
}
