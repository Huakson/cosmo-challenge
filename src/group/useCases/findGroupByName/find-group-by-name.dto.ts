import { IsString } from 'class-validator';

export class FindGroupByNameDTO {
  @IsString()
  name: string;
}
