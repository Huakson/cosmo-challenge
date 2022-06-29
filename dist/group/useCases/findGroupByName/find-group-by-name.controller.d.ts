import { FindGroupByNameDTO } from './find-group-by-name.dto';
import { FindGroupByNameService } from './find-group-by-name.service';
export declare class FindGroupByNameController {
    private findGroupByNameService;
    constructor(findGroupByNameService: FindGroupByNameService);
    execute(data: FindGroupByNameDTO): Promise<import("../../entities/group.entitie").Group>;
}
