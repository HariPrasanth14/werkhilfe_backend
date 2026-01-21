import { IsEmail, IsNotEmpty, IsOptional, IsString } from "class-validator"
import { userBaseDto } from "./user_base_dto"
export class CreateUserDto extends userBaseDto {
    @IsOptional()
    @IsString()
    name: string

    @IsString()
    role: string
}