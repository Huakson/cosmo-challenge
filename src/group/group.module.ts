import { Module } from '@nestjs/common';
import { PrismaModule } from 'src/prisma/prisma.module';

import { RepositoryPrisma } from './repository/implementations/prisma.repository';
import { CreateGroupController } from './useCases/createGroup/create-group.controller';
import { CreateGroupService } from './useCases/createGroup/create-group.service';
import { FindAllGroupsController } from './useCases/findAllGroups/find-all-groups.controller';
import { FindAllGroupsService } from './useCases/findAllGroups/find-all-groups.service';
import { FindGroupByIdController } from './useCases/findGroupById/find-group-by-id.controller';
import { FindGroupByIdService } from './useCases/findGroupById/find-group-by-id.service';
import { FindGroupByNameController } from './useCases/findGroupByName/find-group-by-name.controller';
import { FindGroupByNameService } from './useCases/findGroupByName/find-group-by-name.service';
import { UpdateGroupController } from './useCases/updateGroup/update-group.controller';
import { UpdateGroupService } from './useCases/updateGroup/update-group.service';

@Module({
  controllers: [
    CreateGroupController,
    FindGroupByNameController,
    UpdateGroupController,
    FindAllGroupsController,
    FindGroupByIdController,
  ],
  providers: [
    CreateGroupService,
    FindGroupByNameService,
    UpdateGroupService,
    FindAllGroupsService,
    FindGroupByIdService,
    RepositoryPrisma,
  ],
  imports: [PrismaModule],
})
export class GroupModule {}
