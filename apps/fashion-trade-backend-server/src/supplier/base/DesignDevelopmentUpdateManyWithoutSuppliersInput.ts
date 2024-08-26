/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { DesignDevelopmentWhereUniqueInput } from "../../designDevelopment/base/DesignDevelopmentWhereUniqueInput";
import { ApiProperty } from "@nestjs/swagger";

@InputType()
class DesignDevelopmentUpdateManyWithoutSuppliersInput {
  @Field(() => [DesignDevelopmentWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [DesignDevelopmentWhereUniqueInput],
  })
  connect?: Array<DesignDevelopmentWhereUniqueInput>;

  @Field(() => [DesignDevelopmentWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [DesignDevelopmentWhereUniqueInput],
  })
  disconnect?: Array<DesignDevelopmentWhereUniqueInput>;

  @Field(() => [DesignDevelopmentWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [DesignDevelopmentWhereUniqueInput],
  })
  set?: Array<DesignDevelopmentWhereUniqueInput>;
}

export { DesignDevelopmentUpdateManyWithoutSuppliersInput as DesignDevelopmentUpdateManyWithoutSuppliersInput };