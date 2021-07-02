import { IsEmail, IsNumber } from "class-validator";

export class OwnerUpdateDto {

    @IsEmail()
    email: string;

    @IsNumber()
    phone: number;

}