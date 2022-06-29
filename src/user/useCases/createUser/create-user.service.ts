import { HttpException, HttpStatus, Injectable } from '@nestjs/common';

import { User } from '../../entities/user.entitie';
import { RepositoryPrisma } from '../../repository/implementations/prisma.repository';
import { FindUserByEmailService } from '../findUserByEmail/find-user-by-email.service';
import { CreateUserDTO } from './create-user.dto';

@Injectable()
export class CreateUserService {
  constructor(
    private repository: RepositoryPrisma,
    private findUserByEmail: FindUserByEmailService,
  ) {}
  async execute(data: CreateUserDTO) {
    try {
      const user: User = new User({
        email: data.email,
        firstName: data.firstName,
        lastName: data.lastName,
        accountId: data.accountId ? data.accountId : undefined,
        groupId: data.groupId ? data.groupId : undefined,
      });

      const userExists = await this.findUserByEmail.execute({
        userEmail: data.email,
      });

      if (userExists)
        throw new HttpException('User already exists', HttpStatus.CONFLICT);

      return this.repository.createUser(user);
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }
}
