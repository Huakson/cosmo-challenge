import { RepositoryPrisma } from '../../repository/implementations/prisma.repository';
export declare class FindAllGroupsService {
    private repository;
    constructor(repository: RepositoryPrisma);
    execute(): Promise<import("../../entities/group.entitie").Group[]>;
}
