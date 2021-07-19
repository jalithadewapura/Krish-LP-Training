import { ObjectType, Field, Directive, ID } from '@nestjs/graphql';

@ObjectType()
@Directive('@key(fields: "id")')
export class Owner {
  @Field((type) => ID)
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


