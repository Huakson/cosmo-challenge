import { FindAllGroupsService } from './find-all-groups.service';
export declare class FindAllGroupsController {
    private findAllGroupsService;
    constructor(findAllGroupsService: FindAllGroupsService);
    execute(): Promise<import("../../entities/group.entitie").Group[]>;
}
