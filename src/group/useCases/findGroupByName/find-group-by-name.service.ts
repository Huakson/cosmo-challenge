import { HttpException, HttpStatus, Injectable } from '@nestjs/common';

import { RepositoryPrisma } from '../../repository/implementations/prisma.repository';
import { FindGroupByNameDTO } from './find-group-by-name.dto';

@Injectable()
export class FindGroupByNameService {
  constructor(private repository: RepositoryPrisma) {}
  async execute(data: FindGroupByNameDTO) {
    try {
      return this.repository.findByName(data.name);
    } catch (error) {
      throw new HttpException(
        'Unable to access database',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }
}
