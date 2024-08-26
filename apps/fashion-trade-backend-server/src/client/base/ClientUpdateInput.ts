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
import { DesignDevelopmentUpdateManyWithoutClientsInput } from "./DesignDevelopmentUpdateManyWithoutClientsInput";
import {
  ValidateNested,
  IsOptional,
  IsString,
  MaxLength,
} from "class-validator";
import { Type } from "class-transformer";
import { OrganizationWhereUniqueInput } from "../../organization/base/OrganizationWhereUniqueInput";

@InputType()
class ClientUpdateInput {
  @ApiProperty({
    required: false,
    type: () => DesignDevelopmentUpdateManyWithoutClientsInput,
  })
  @ValidateNested()
  @Type(() => DesignDevelopmentUpdateManyWithoutClientsInput)
  @IsOptional()
  @Field(() => DesignDevelopmentUpdateManyWithoutClientsInput, {
    nullable: true,
  })
  designDevelopments?: DesignDevelopmentUpdateManyWithoutClientsInput;

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
    type: () => OrganizationWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => OrganizationWhereUniqueInput)
  @IsOptional()
  @Field(() => OrganizationWhereUniqueInput, {
    nullable: true,
  })
  organization?: OrganizationWhereUniqueInput | null;
}

export { ClientUpdateInput as ClientUpdateInput };
