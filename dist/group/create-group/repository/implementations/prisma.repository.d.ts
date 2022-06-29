import { PrismaService } from 'src/prisma/service/prisma.service';
import { CreateGroupDTO } from '../../DTOs/create-group.dto';
import { IRepository } from '../IRepository';
export declare class RepositoryPrisma implements IRepository {
    private prisma;
    constructor(prisma: PrismaService);
    createGroup(data: CreateGroupDTO): Promise<import(".prisma/client").Group>;
}
