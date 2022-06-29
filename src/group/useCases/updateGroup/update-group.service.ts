import { HttpException, HttpStatus, Injectable } from '@nestjs/common';

import { RepositoryPrisma } from '../../repository/implementations/prisma.repository';
import { FindGroupByNameService } from '../findGroupByName/find-group-by-name.service';
import { UpdateGroupDTO } from './update-group.dto';

@Injectable()
export class UpdateGroupService {
  constructor(
    private repository: RepositoryPrisma,
    private findGroupByName: FindGroupByNameService,
  ) {}
  async execute(data: UpdateGroupDTO) {
    try {
      if (data.name) {
        const groupExists = await this.findGroupByName.execute({
          name: data.name,
        });

        if (groupExists) throw new Error('Group exists');
      }

      return this.repository.update(data);
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }
}
