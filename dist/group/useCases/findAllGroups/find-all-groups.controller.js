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
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindAllGroupsController = void 0;
const common_1 = require("@nestjs/common");
const find_all_groups_service_1 = require("./find-all-groups.service");
let FindAllGroupsController = class FindAllGroupsController {
    constructor(findAllGroupsService) {
        this.findAllGroupsService = findAllGroupsService;
    }
    execute() {
        try {
            return this.findAllGroupsService.execute();
        }
        catch (error) {
            throw new common_1.HttpException('Internal server error', common_1.HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
};
__decorate([
    (0, common_1.Get)('find-all'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], FindAllGroupsController.prototype, "execute", null);
FindAllGroupsController = __decorate([
    (0, common_1.Controller)('group'),
    __metadata("design:paramtypes", [find_all_groups_service_1.FindAllGroupsService])
], FindAllGroupsController);
exports.FindAllGroupsController = FindAllGroupsController;
//# sourceMappingURL=find-all-groups.controller.js.map