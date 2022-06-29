import { IsOptional, IsString, IsUUID } from 'class-validator';

export class UpdateGroupDTO {
  @IsUUID()
  id: string;

  @IsString()
  @IsOptional()
  name?: string;

  @IsString()
  @IsOptional()
  description?: string;
}
