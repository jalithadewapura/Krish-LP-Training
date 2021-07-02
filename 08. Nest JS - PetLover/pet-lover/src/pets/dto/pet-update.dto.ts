import { IsInt, IsNotEmpty, IsString, Max, Min } from "class-validator";
import { Owner } from "src/owners/schema/owners.schema";

export class PetUpdateDto {
    
    @IsString()
    @IsNotEmpty()
    name: string;

    
    @IsInt()
    @Min(0)
    @Max(100)
    age: number;

    @IsString()
    owner: Owner;
}
