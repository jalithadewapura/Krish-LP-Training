import { CreateOwnerInput } from './create-owner.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';
import { IsEmail, IsNumber } from 'class-validator';

@InputType()
export class UpdateOwnerInput extends PartialType(CreateOwnerInput) {
  @Field()
  @IsEmail()
  email: string;
  
  @Field()
  @IsNumber()
  phone: number;
}
