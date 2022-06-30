import { HttpException, HttpStatus, Injectable } from '@nestjs/common';

import { RepositoryPrisma } from '../../repository/implementations/prisma.repository';
import { FindGroupByIdDTO } from './find-group-by-id.dto';

@Injectable()
export class FindGroupByIdService {
  constructor(private repository: RepositoryPrisma) {}
  async execute(data: FindGroupByIdDTO) {
    try {
      return this.repository.findById(data.groupId);
    } catch (error) {
      throw new HttpException(
        'Unable to access database',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }
}
