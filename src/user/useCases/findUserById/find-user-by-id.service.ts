import { HttpException, HttpStatus, Injectable } from '@nestjs/common';

import { RepositoryPrisma } from '../../repository/implementations/prisma.repository';
import { FindUserByIdDTO } from './find-user-by-id.dto';

@Injectable()
export class FindUserByIdService {
  constructor(private repository: RepositoryPrisma) {}
  async execute(data: FindUserByIdDTO) {
    try {
      return this.repository.findById(data.userId);
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }
}
