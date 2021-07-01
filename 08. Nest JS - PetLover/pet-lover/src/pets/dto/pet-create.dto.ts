import { IsIn, IsInt, IsNotEmpty, IsString, Max, Min } from "class-validator";
import { Gender } from "../pet.enum";

export class PetCreateDto {
    @IsString()
    @IsNotEmpty()
    name: string;

    @IsInt()
    @Min(0)
    @Max(100)
    age: number;

    @IsString()
    type: string;

    @IsIn(Object.values(Gender))
    gender: Gender;

    @IsString()
    owner: string;
}