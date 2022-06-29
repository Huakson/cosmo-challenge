import { CreateGroupDTO } from '../DTOs/create-group.dto';
import { CreateGroupService } from '../services/create-group.service';
export declare class CreateGroupController {
    private createGroupService;
    constructor(createGroupService: CreateGroupService);
    execute(data: CreateGroupDTO): Promise<import(".prisma/client").Group>;
}
