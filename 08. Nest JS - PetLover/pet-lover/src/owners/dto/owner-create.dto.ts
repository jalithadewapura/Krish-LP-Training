import { IsEmail, IsNotEmpty, IsNumber, IsString } from "class-validator";

export class OwnerCreateDto {
    
    @IsString()
    @IsNotEmpty()
    first_name: string; 

    @IsString()
    @IsNotEmpty()
    last_name: string;

    @IsEmail()
    email: string;

    @IsNumber()
    phone: number;
}