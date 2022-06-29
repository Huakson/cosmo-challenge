import { CreateGroupDTO } from './create-group.dto';
import { CreateGroupService } from './create-group.service';
export declare class CreateGroupController {
    private createGroupService;
    constructor(createGroupService: CreateGroupService);
    execute(data: CreateGroupDTO): Promise<import("../../entities/group.entitie").Group>;
}
