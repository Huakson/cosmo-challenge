import { Injectable } from '@nestjs/common';

import { PrismaService } from '../../../prisma/service/prisma.service';
import { GroupUpdate } from '../../entities/group-update';
import { Group } from '../../entities/group.entitie';
import { IRepository } from '../IRepository';

@Injectable()
export class RepositoryPrisma implements IRepository {
  constructor(private prisma: PrismaService) {}

  async createGroup(data: Group): Promise<Group> {
    return this.prisma.group.upsert({
      where: {
        name: data.name,
      },
      update: {
        description: data.description,
      },
      create: {
        id: data.id,
        name: data.name,
        description: data.description,
      },
    });
  }

  async findByName(name: string): Promise<Group> {
    return this.prisma.group.findUnique({
      where: {
        name,
      },
    });
  }

  async update(data: GroupUpdate): Promise<Group> {
    return this.prisma.group.update({
      where: {
        id: data.id,
      },
      data: {
        name: data.name ? data.name : undefined,
        description: data.description ? data.description : undefined,
      },
    });
  }

  async findAll(): Promise<Group[]> {
    return this.prisma.group.findMany();
  }
}
