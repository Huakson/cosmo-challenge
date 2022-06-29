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
exports.UpdateGroupService = void 0;
const common_1 = require("@nestjs/common");
const prisma_repository_1 = require("../../repository/implementations/prisma.repository");
const find_group_by_name_service_1 = require("../findGroupByName/find-group-by-name.service");
let UpdateGroupService = class UpdateGroupService {
    constructor(repository, findGroupByName) {
        this.repository = repository;
        this.findGroupByName = findGroupByName;
    }
    async execute(data) {
        try {
            if (data.name) {
                const groupExists = await this.findGroupByName.execute({
                    name: data.name,
                });
                if (groupExists)
                    throw new Error('Group exists');
            }
            return this.repository.update(data);
        }
        catch (error) {
            throw new common_1.HttpException(error.message, common_1.HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
};
UpdateGroupService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_repository_1.RepositoryPrisma,
        find_group_by_name_service_1.FindGroupByNameService])
], UpdateGroupService);
exports.UpdateGroupService = UpdateGroupService;
//# sourceMappingURL=update-group.service.js.map