import { CreatePetInput } from './create-pet.input';
import { IsIn, IsInt, IsNotEmpty, IsString, Max, Min } from "class-validator";
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';
import { Gender } from '../entities/pet.entity';

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
    type: string;

    @Field()
    @IsIn(Object.values(Gender))
    gender: Gender;

    @Field()
    @IsString()
    ownerId: string;
}
