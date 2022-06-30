import { IsUUID } from 'class-validator';

export class DeleteUserDTO {
  @IsUUID()
  userId: string;
}
