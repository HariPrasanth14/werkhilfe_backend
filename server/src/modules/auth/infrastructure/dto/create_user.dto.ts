import {
    IsBoolean,
    IsOptional,
    IsNumber,
    IsString
  } from "class-validator";
import { authBaseDto } from "./auth_base_dto";
  
  export class CreateProviderDto extends authBaseDto{
  
    @IsOptional()
    @IsString()
    service_type: string;
  
    @IsOptional()
    @IsNumber()
    service_id: number;

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
  