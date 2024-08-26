/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { DesignDevelopmentWhereInput } from "./DesignDevelopmentWhereInput";
import { IsOptional, ValidateNested, IsInt } from "class-validator";
import { Type } from "class-transformer";
import { DesignDevelopmentOrderByInput } from "./DesignDevelopmentOrderByInput";

@ArgsType()
class DesignDevelopmentFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => DesignDevelopmentWhereInput,
  })
  @IsOptional()
  @ValidateNested()
  @Field(() => DesignDevelopmentWhereInput, { nullable: true })
  @Type(() => DesignDevelopmentWhereInput)
  where?: DesignDevelopmentWhereInput;

  @ApiProperty({
    required: false,
    type: [DesignDevelopmentOrderByInput],
  })
  @IsOptional()
  @ValidateNested({ each: true })
  @Field(() => [DesignDevelopmentOrderByInput], { nullable: true })
  @Type(() => DesignDevelopmentOrderByInput)
  orderBy?: Array<DesignDevelopmentOrderByInput>;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  skip?: number;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  take?: number;
}

export { DesignDevelopmentFindManyArgs as DesignDevelopmentFindManyArgs };
