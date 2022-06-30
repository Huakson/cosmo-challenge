import { IsString } from 'class-validator';

export class CreateGroupDTO {
  @IsString()
  name: string;

  @IsString()
  description: string;
}
