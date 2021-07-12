import { ObjectType, Field } from '@nestjs/graphql';

@ObjectType()
export class Pet {
  @Field()
  id: string;
  @Field()
  name: string;
  @Field()
  age: number;
  @Field()
  type: string;
  @Field()
  gender: Gender;
  @Field()
  ownerId: string;
}

export enum Gender {
  MALE = 'MALE',
  FEMALE = 'FEMALE'
}