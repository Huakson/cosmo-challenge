import { GroupUpdate } from '../entities/group-update';
import { Group } from '../entities/group.entitie';
export interface IRepository {
    createGroup(data: Group): Promise<Group>;
    findByName(name: string): Promise<Group>;
    update(data: GroupUpdate): Promise<Group>;
    findAll(): Promise<Group[]>;
}
