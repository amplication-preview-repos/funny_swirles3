/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { SupplierWhereUniqueInput } from "../../supplier/base/SupplierWhereUniqueInput";
import { ApiProperty } from "@nestjs/swagger";

@InputType()
class SupplierCreateNestedManyWithoutOrganizationsInput {
  @Field(() => [SupplierWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [SupplierWhereUniqueInput],
  })
  connect?: Array<SupplierWhereUniqueInput>;
}

export { SupplierCreateNestedManyWithoutOrganizationsInput as SupplierCreateNestedManyWithoutOrganizationsInput };
