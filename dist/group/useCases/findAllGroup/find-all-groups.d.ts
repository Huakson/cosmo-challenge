import { FindGroupByNameService } from './find-group-by-name.service';
import { IFindGroupByNameDTO } from './Ifind-group-by-name.dto';
export declare class FindGroupByNameController {
    private findGroupByNameService;
    constructor(findGroupByNameService: FindGroupByNameService);
    execute(data: IFindGroupByNameDTO): any;
}
