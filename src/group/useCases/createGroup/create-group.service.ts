import { HttpException, HttpStatus, Injectable } from '@nestjs/common';

import { Group } from '../../entities/group.entitie';
import { RepositoryPrisma } from '../../repository/implementations/prisma.repository';
import { FindGroupByNameService } from '../findGroupByName/find-group-by-name.service';
import { CreateGroupDTO } from './create-group.dto';

@Injectable()
export class CreateGroupService {
  constructor(
    private repository: RepositoryPrisma,
    private findGroupByName: FindGroupByNameService,
  ) {}
  async execute(data: CreateGroupDTO) {
    try {
      const group = new Group({
        name: data.name,
        description: data.description,
      });

      const groupIfExists = await this.findGroupByName.execute({
        name: data.name,
      });

      if (groupIfExists)
        throw new HttpException('Group exists', HttpStatus.FORBIDDEN);

      return this.repository.createGroup(group);
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }
}
