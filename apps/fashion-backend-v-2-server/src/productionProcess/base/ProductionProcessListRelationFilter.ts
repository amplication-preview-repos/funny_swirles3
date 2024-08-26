/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { ProductionProcessWhereInput } from "./ProductionProcessWhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class ProductionProcessListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => ProductionProcessWhereInput,
  })
  @ValidateNested()
  @Type(() => ProductionProcessWhereInput)
  @IsOptional()
  @Field(() => ProductionProcessWhereInput, {
    nullable: true,
  })
  every?: ProductionProcessWhereInput;

  @ApiProperty({
    required: false,
    type: () => ProductionProcessWhereInput,
  })
  @ValidateNested()
  @Type(() => ProductionProcessWhereInput)
  @IsOptional()
  @Field(() => ProductionProcessWhereInput, {
    nullable: true,
  })
  some?: ProductionProcessWhereInput;

  @ApiProperty({
    required: false,
    type: () => ProductionProcessWhereInput,
  })
  @ValidateNested()
  @Type(() => ProductionProcessWhereInput)
  @IsOptional()
  @Field(() => ProductionProcessWhereInput, {
    nullable: true,
  })
  none?: ProductionProcessWhereInput;
}
export { ProductionProcessListRelationFilter as ProductionProcessListRelationFilter };