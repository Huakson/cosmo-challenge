import { HttpException, HttpStatus, Injectable } from '@nestjs/common';

import { RepositoryPrisma } from '../../repository/implementations/prisma.repository';
import { FindUserByEmailDTO } from './find-user-by-email.dto';

@Injectable()
export class FindUserByEmailService {
  constructor(private repository: RepositoryPrisma) {}
  async execute(data: FindUserByEmailDTO) {
    try {
      return this.repository.findByEmail(data.userEmail);
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }
}
