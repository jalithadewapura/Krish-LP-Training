import { IsInt, IsNotEmpty, IsString, Max, Min } from "class-validator";

export class PetUpdateDto {
    
    @IsString()
    @IsNotEmpty()
    name: string;

    
    @IsInt()
    @Min(0)
    @Max(100)
    age: number;

    @IsString()
    owner: string;
}
