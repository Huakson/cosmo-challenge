import { HttpException, HttpStatus, Injectable } from '@nestjs/common';

import { RepositoryPrisma } from '../../repository/implementations/prisma.repository';
import { FindUserByIdService } from '../findUserById/find-user-by-id.service';
import { UpdateUserDTO } from './update-user.dto';

@Injectable()
export class UpdateUserService {
  constructor(
    private repository: RepositoryPrisma,
    private findUserById: FindUserByIdService,
  ) {}
  async execute(data: UpdateUserDTO) {
    try {
      const userExists = await this.findUserById.execute({
        userId: data.userId,
      });

      if (!userExists)
        throw new HttpException("User doesn't exist", HttpStatus.NOT_FOUND);

      return this.repository.updateUser(data);
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }
}
