import { IsEmail, IsOptional, IsString, IsUUID } from 'class-validator';

export class CreateUserDTO {
  @IsString()
  firstName: string;

  @IsString()
  lastName: string;

  @IsEmail()
  email: string;

  @IsString()
  @IsUUID()
  @IsOptional()
  accountId: string;

  @IsString()
  @IsUUID()
  @IsOptional()
  groupId: string;
}
