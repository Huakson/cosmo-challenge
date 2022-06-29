import { Group } from 'src/group/entities/group.entitie';
import { RepositoryPrisma } from '../../repository/implementations/prisma.repository';
import { FindGroupByNameService } from '../findGroupByName/find-group-by-name.service';
import { CreateGroupDTO } from './create-group.dto';
export declare class CreateGroupService {
    private repository;
    private findGroupByName;
    constructor(repository: RepositoryPrisma, findGroupByName: FindGroupByNameService);
    execute(data: CreateGroupDTO): Promise<Group>;
}
