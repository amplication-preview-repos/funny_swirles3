/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ProductionProcessWhereUniqueInput } from "../../productionProcess/base/ProductionProcessWhereUniqueInput";
import { ApiProperty } from "@nestjs/swagger";

@InputType()
class ProductionProcessCreateNestedManyWithoutSuppliersInput {
  @Field(() => [ProductionProcessWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [ProductionProcessWhereUniqueInput],
  })
  connect?: Array<ProductionProcessWhereUniqueInput>;
}

export { ProductionProcessCreateNestedManyWithoutSuppliersInput as ProductionProcessCreateNestedManyWithoutSuppliersInput };
