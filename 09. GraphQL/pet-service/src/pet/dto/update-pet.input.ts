import { CreatePetInput } from './create-pet.input';
import { IsIn, IsInt, IsNotEmpty, IsString, Max, Min } from "class-validator";
import { InputType, Field, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdatePetInput extends PartialType(CreatePetInput) {

    @Field()
    @IsString()
    @IsNotEmpty()
    name: string;

    @Field()
    @IsInt()
    @Min(0)
    @Max(100)
    age: number;

    @Field()
    @IsString()
    ownerId: string;
}
