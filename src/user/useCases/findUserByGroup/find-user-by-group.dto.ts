import { IsString } from 'class-validator';

export class FindUserByGroupDTO {
  @IsString()
  groupName: string;
}
