import { ObjectType, Field } from '@nestjs/graphql';

@ObjectType()
export class Owner {
  @Field()
  id: string;
  @Field()
  first_name: string; 
  @Field()
  last_name: string;
  @Field()
  email: string;
  @Field()
  phone: number;
}


