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
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateGroupController = void 0;
const common_1 = require("@nestjs/common");
const update_group_dto_1 = require("./update-group.dto");
const update_group_service_1 = require("./update-group.service");
let UpdateGroupController = class UpdateGroupController {
    constructor(updateGroupService) {
        this.updateGroupService = updateGroupService;
    }
    execute(data) {
        try {
            return this.updateGroupService.execute(data);
        }
        catch (error) {
            throw new common_1.HttpException('Internal server error', common_1.HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
};
__decorate([
    (0, common_1.Put)('update'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [update_group_dto_1.UpdateGroupDTO]),
    __metadata("design:returntype", void 0)
], UpdateGroupController.prototype, "execute", null);
UpdateGroupController = __decorate([
    (0, common_1.Controller)('group'),
    __metadata("design:paramtypes", [update_group_service_1.UpdateGroupService])
], UpdateGroupController);
exports.UpdateGroupController = UpdateGroupController;
//# sourceMappingURL=update-group.controller.js.map