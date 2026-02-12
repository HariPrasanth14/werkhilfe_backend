import { IsBoolean, IsOptional, IsString, IsNotEmpty } from 'class-validator';

export class create_service_dto {

  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  @IsNotEmpty()
  icon_url?: string;

  @IsBoolean()
  @IsNotEmpty()
  is_active?: boolean;
}
