import { RepositoryPrisma } from '../../repository/implementations/prisma.repository';
import { FindGroupByNameDTO } from './find-group-by-name.dto';
export declare class FindGroupByNameService {
    private repository;
    constructor(repository: RepositoryPrisma);
    execute(data: FindGroupByNameDTO): Promise<import("../../entities/group.entitie").Group>;
}
