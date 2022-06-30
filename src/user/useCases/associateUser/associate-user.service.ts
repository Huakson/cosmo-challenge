import { HttpException, HttpStatus, Injectable } from '@nestjs/common';

import { FindGroupByIdService } from '../../../group/useCases/findGroupById/find-group-by-id.service';
import { RepositoryPrisma } from '../../repository/implementations/prisma.repository';
import { FindUserByIdService } from '../findUserById/find-user-by-id.service';
import { AssociateUserDTO } from './associate-user.dto';

@Injectable()
export class AssociateUserService {
  constructor(
    private repository: RepositoryPrisma,
    private findUserById: FindUserByIdService,
    private findGroupById: FindGroupByIdService,
  ) {}
  async execute(data: AssociateUserDTO) {
    try {
      const userExists = await this.findUserById.execute({
        userId: data.userId,
      });

      const groupExists = await this.findGroupById.execute({
        groupId: data.groupId,
      });

      if (!userExists)
        throw new HttpException("User doesn't exist", HttpStatus.NOT_FOUND);

      if (!groupExists)
        throw new HttpException("Group doesn't exist", HttpStatus.NOT_FOUND);

      return this.repository.associateUser(data);
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }
}
