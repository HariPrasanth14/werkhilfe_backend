import { IsEnum, IsOptional, IsString, isEmail } from "class-validator";

export class authBaseDto {
    @IsString()
    email: string

    @IsOptional()
    @IsString()
    name: string

    @IsString()
    password: string

}