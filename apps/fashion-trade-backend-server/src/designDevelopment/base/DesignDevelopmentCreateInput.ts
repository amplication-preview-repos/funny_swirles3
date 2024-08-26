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
import { ClientWhereUniqueInput } from "../../client/base/ClientWhereUniqueInput";
import {
  ValidateNested,
  IsOptional,
  IsString,
  MaxLength,
  IsEnum,
} from "class-validator";
import { Type } from "class-transformer";
import { ProductionCreateNestedManyWithoutDesignDevelopmentsInput } from "./ProductionCreateNestedManyWithoutDesignDevelopmentsInput";
import { EnumDesignDevelopmentStatus } from "./EnumDesignDevelopmentStatus";
import { SupplierWhereUniqueInput } from "../../supplier/base/SupplierWhereUniqueInput";

@InputType()
class DesignDevelopmentCreateInput {
  @ApiProperty({
    required: false,
    type: () => ClientWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => ClientWhereUniqueInput)
  @IsOptional()
  @Field(() => ClientWhereUniqueInput, {
    nullable: true,
  })
  client?: ClientWhereUniqueInput | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @MaxLength(1000)
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  name?: string | null;

  @ApiProperty({
    required: false,
    type: () => ProductionCreateNestedManyWithoutDesignDevelopmentsInput,
  })
  @ValidateNested()
  @Type(() => ProductionCreateNestedManyWithoutDesignDevelopmentsInput)
  @IsOptional()
  @Field(() => ProductionCreateNestedManyWithoutDesignDevelopmentsInput, {
    nullable: true,
  })
  productions?: ProductionCreateNestedManyWithoutDesignDevelopmentsInput;

  @ApiProperty({
    required: false,
    enum: EnumDesignDevelopmentStatus,
  })
  @IsEnum(EnumDesignDevelopmentStatus)
  @IsOptional()
  @Field(() => EnumDesignDevelopmentStatus, {
    nullable: true,
  })
  status?: "Option1" | null;

  @ApiProperty({
    required: false,
    type: () => SupplierWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => SupplierWhereUniqueInput)
  @IsOptional()
  @Field(() => SupplierWhereUniqueInput, {
    nullable: true,
  })
  supplier?: SupplierWhereUniqueInput | null;
}

export { DesignDevelopmentCreateInput as DesignDevelopmentCreateInput };
