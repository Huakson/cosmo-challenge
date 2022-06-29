import { GroupUpdate } from 'src/group/entities/group-update';
import { Group } from 'src/group/entities/group.entitie';
import { PrismaService } from 'src/prisma/service/prisma.service';
import { IRepository } from '../IRepository';
export declare class RepositoryPrisma implements IRepository {
    private prisma;
    constructor(prisma: PrismaService);
    createGroup(data: Group): Promise<Group>;
    findByName(name: string): Promise<Group>;
    update(data: GroupUpdate): Promise<Group>;
    findAll(): Promise<Group[]>;
}
