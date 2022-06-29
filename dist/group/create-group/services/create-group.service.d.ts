import { CreateGroupDTO } from '../DTOs/create-group.dto';
import { RepositoryPrisma } from '../repository/implementations/prisma.repository';
export declare class CreateGroupService {
    private repository;
    constructor(repository: RepositoryPrisma);
    execute(data: CreateGroupDTO): Promise<import(".prisma/client").Group>;
}
