"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a, _b;
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindGroupByNameController = void 0;
const common_1 = require("@nestjs/common");
const find_group_by_name_service_1 = require("./find-group-by-name.service");
const Ifind_group_by_name_dto_1 = require("./Ifind-group-by-name.dto");
let FindGroupByNameController = class FindGroupByNameController {
    constructor(findGroupByNameService) {
        this.findGroupByNameService = findGroupByNameService;
    }
    execute(data) {
        try {
            return this.findGroupByNameService.execute(data);
        }
        catch (error) {
            throw new common_1.HttpException('Internal server error', common_1.HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
};
__decorate([
    (0, common_1.Get)('find-by-name'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_a = typeof Ifind_group_by_name_dto_1.IFindGroupByNameDTO !== "undefined" && Ifind_group_by_name_dto_1.IFindGroupByNameDTO) === "function" ? _a : Object]),
    __metadata("design:returntype", void 0)
], FindGroupByNameController.prototype, "execute", null);
FindGroupByNameController = __decorate([
    (0, common_1.Controller)('group'),
    __metadata("design:paramtypes", [typeof (_b = typeof find_group_by_name_service_1.FindGroupByNameService !== "undefined" && find_group_by_name_service_1.FindGroupByNameService) === "function" ? _b : Object])
], FindGroupByNameController);
exports.FindGroupByNameController = FindGroupByNameController;
//# sourceMappingURL=find-all-groups.js.map