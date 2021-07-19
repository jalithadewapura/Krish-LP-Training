import { ObjectType, Field, Directive, ID } from '@nestjs/graphql';
import { Owner } from './owner.entity';

@ObjectType()
@Directive('@key(fields: "id")')
export class Pet {
  @Field((type) => ID)
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

  @Field(() => Owner)
  owner: Owner;
}

export enum Gender {
  MALE = 'MALE',
  FEMALE = 'FEMALE'
}