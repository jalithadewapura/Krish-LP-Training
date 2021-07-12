import { InputType, Int, Field } from '@nestjs/graphql';
import { IsEmail, IsNotEmpty, IsNumber, IsString } from "class-validator";


@InputType()
export class CreateOwnerInput {
  @Field()
  @IsString()
  @IsNotEmpty()
  first_name: string; 

  @Field()
  @IsString()
  @IsNotEmpty()
  last_name: string;

  @Field()
  @IsEmail()
  email: string;

  @Field()
  @IsNumber()
  phone: number;
}
