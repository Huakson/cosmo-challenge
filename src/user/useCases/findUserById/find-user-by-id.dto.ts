import { IsUUID } from 'class-validator';

export class FindUserByIdDTO {
  @IsUUID()
  userId: string;
}
