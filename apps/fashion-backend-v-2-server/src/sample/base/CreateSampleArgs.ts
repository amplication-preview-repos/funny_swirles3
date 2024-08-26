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
import { SampleCreateInput } from "./SampleCreateInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";

@ArgsType()
class CreateSampleArgs {
  @ApiProperty({
    required: true,
    type: () => SampleCreateInput,
  })
  @ValidateNested()
  @Type(() => SampleCreateInput)
  @Field(() => SampleCreateInput, { nullable: false })
  data!: SampleCreateInput;
}

export { CreateSampleArgs as CreateSampleArgs };
