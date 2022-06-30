import { HttpException, HttpStatus, Injectable } from '@nestjs/common';

import { RepositoryPrisma } from '../../repository/implementations/prisma.repository';
import { FindUserByGroupDTO } from './find-user-by-group.dto';

@Injectable()
export class FindUserByGroupService {
  constructor(private repository: RepositoryPrisma) {}
  async execute(data: FindUserByGroupDTO) {
    try {
      return this.repository.findByGroup(data.groupName);
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }
}
