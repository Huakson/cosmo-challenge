import { HttpException, HttpStatus, Injectable } from '@nestjs/common';

import { RepositoryPrisma } from '../../repository/implementations/prisma.repository';

@Injectable()
export class FindAllGroupsService {
  constructor(private repository: RepositoryPrisma) {}
  async execute() {
    try {
      return this.repository.findAll();
    } catch (error) {
      throw new HttpException(
        'Unable to access database',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }
}
