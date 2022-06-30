import { IsUUID } from 'class-validator';

export class AssociateUserDTO {
  @IsUUID()
  groupId: string;

  @IsUUID()
  userId: string;
}
