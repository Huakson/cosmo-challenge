import { IsEmail, IsOptional, IsString, IsUUID } from 'class-validator';

export class UpdateUserDTO {
  @IsString()
  userId: string;

  @IsUUID()
  @IsOptional()
  accountId: string;

  @IsString()
  @IsOptional()
  firstName: string;

  @IsString()
  @IsOptional()
  lastName: string;

  @IsEmail()
  @IsOptional()
  email: string;

  @IsUUID()
  @IsOptional()
  groupId: string;
}
