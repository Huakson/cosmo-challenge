import { RepositoryPrisma } from '../../repository/implementations/prisma.repository';
import { FindGroupByNameService } from '../findGroupByName/find-group-by-name.service';
import { UpdateGroupDTO } from './update-group.dto';
export declare class UpdateGroupService {
    private repository;
    private findGroupByName;
    constructor(repository: RepositoryPrisma, findGroupByName: FindGroupByNameService);
    execute(data: UpdateGroupDTO): Promise<import("../../entities/group.entitie").Group>;
}
