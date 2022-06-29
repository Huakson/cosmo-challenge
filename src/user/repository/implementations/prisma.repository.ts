import { Injectable } from '@nestjs/common';

import { PrismaService } from '../../../prisma/service/prisma.service';
import { AssociateUser } from '../../entities/associateUser.entitie';
import { User } from '../../entities/user.entitie';
import { DeleteUserDTO } from '../../useCases/deleteUser/delete-user-dto';
import { UpdateUserDTO } from '../../useCases/updateUser/update-user.dto';
import { IRepository } from '../IRepository';

@Injectable()
export class RepositoryPrisma implements IRepository {
  constructor(private prisma: PrismaService) {}

  updateUser(data: UpdateUserDTO): Promise<User> {
    return this.prisma.users.update({
      where: {
        id: data.userId,
      },
      data: {
        accountId: data.accountId ? data.accountId : undefined,
        email: data.email ? data.email : undefined,
        firstName: data.firstName ? data.firstName : undefined,
        groupId: data.groupId ? data.groupId : undefined,
        lastName: data.lastName ? data.lastName : undefined,
      },
    });
  }

  associateUser(data: AssociateUser): Promise<User> {
    return this.prisma.users.update({
      where: {
        id: data.userId,
      },
      data: {
        groupId: data.groupId,
      },
    });
  }

  createUser(user: User): Promise<User> {
    return this.prisma.users.create({
      data: {
        id: user.id,
        email: user.email,
        firstName: user.firstName,
        lastName: user.lastName,
        groupId: user.groupId,
        accountId: user.accountId,
      },
    });
  }

  findAll(): Promise<User[]> {
    return this.prisma.users.findMany();
  }

  deleteUser(data: DeleteUserDTO): Promise<User> {
    return this.prisma.users.delete({
      where: {
        id: data.userId,
      },
    });
  }

  findByEmail(email: string): Promise<User> {
    return this.prisma.users.findUnique({
      where: {
        email,
      },
    });
  }

  findByGroup(groupName: string): Promise<User[]> {
    return this.prisma.users.findMany({
      where: {
        Group: {
          name: groupName,
        },
      },
    });
  }

  findById(userId: string): Promise<User> {
    return this.prisma.users.findUnique({
      where: {
        id: userId,
      },
    });
  }
}
