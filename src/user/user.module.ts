import { Module } from '@nestjs/common';

import { GroupModule } from '../group/group.module';
import { PrismaModule } from '../prisma/prisma.module';
import { RepositoryPrisma } from './repository/implementations/prisma.repository';
import { AssociateUserController } from './useCases/associateUser/associate-user.controller';
import { AssociateUserService } from './useCases/associateUser/associate-user.service';
import { CreateUserController } from './useCases/createUser/create-user.controller';
import { CreateUserService } from './useCases/createUser/create-user.service';
import { DeleteUserController } from './useCases/deleteUser/delete-user.controller';
import { DeleteUserService } from './useCases/deleteUser/delete-user.service';
import { FindAllUsersController } from './useCases/findAllUsers/find-all-users.controller';
import { FindAllUsersService } from './useCases/findAllUsers/find-all-users.service';
import { FindUserByEmailController } from './useCases/findUserByEmail/find-user-by-email.controller';
import { FindUserByEmailService } from './useCases/findUserByEmail/find-user-by-email.service';
import { FindUserByGroupController } from './useCases/findUserByGroup/find-user-by-group.controller';
import { FindUserByGroupService } from './useCases/findUserByGroup/find-user-by-group.service';
import { FindUserByIdController } from './useCases/findUserById/find-user-by-id.controller';
import { FindUserByIdService } from './useCases/findUserById/find-user-by-id.service';
import { UpdateUserController } from './useCases/updateUser/update-user.controller';
import { UpdateUserService } from './useCases/updateUser/update-user.service';

@Module({
  controllers: [
    AssociateUserController,
    CreateUserController,
    DeleteUserController,
    FindAllUsersController,
    FindUserByEmailController,
    FindUserByGroupController,
    UpdateUserController,
    FindUserByIdController,
  ],
  providers: [
    AssociateUserService,
    CreateUserService,
    DeleteUserService,
    FindAllUsersService,
    FindUserByEmailService,
    FindUserByGroupService,
    UpdateUserService,
    FindUserByIdService,
    RepositoryPrisma,
  ],
  imports: [PrismaModule, GroupModule],
})
export class UserModule {}
