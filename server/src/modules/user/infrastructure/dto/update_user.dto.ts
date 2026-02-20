import {
    IsBoolean,
    IsOptional,
    IsNumber,
    IsString
} from "class-validator";

export class CreateProviderDto {

    @IsString()
    email: string

    @IsOptional()
    @IsString()
    name: string

    @IsOptional()
    @IsString()
    service_type: string;

    @IsOptional()
    @IsNumber()
    experience_years: number;

    @IsOptional()
    @IsNumber()
    price_per_hour: number;

    @IsOptional()
    @IsBoolean()
    is_available: boolean;

    @IsOptional()
    @IsString()
    state: string;

    @IsOptional()
    @IsString()
    district: string;

    @IsOptional()
    @IsString()
    city: string;
}
