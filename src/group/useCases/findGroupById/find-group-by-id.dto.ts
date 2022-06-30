import { IsString } from 'class-validator';

export class FindGroupByIdDTO {
  @IsString()
  groupId: string;
}
