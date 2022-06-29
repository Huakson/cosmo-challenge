import { UpdateGroupDTO } from './update-group.dto';
import { UpdateGroupService } from './update-group.service';
export declare class UpdateGroupController {
    private updateGroupService;
    constructor(updateGroupService: UpdateGroupService);
    execute(data: UpdateGroupDTO): Promise<import("../../entities/group.entitie").Group>;
}
