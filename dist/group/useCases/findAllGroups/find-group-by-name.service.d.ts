import { RepositoryPrisma } from '../../repository/implementations/prisma.repository';
import { IFindGroupByNameDTO } from './Ifind-group-by-name.dto';
export declare class FindGroupByNameService {
    private repository;
    constructor(repository: RepositoryPrisma);
    execute(data: IFindGroupByNameDTO): Promise<import("../../entities/group.entitie").Group>;
}
