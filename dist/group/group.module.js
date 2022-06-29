"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GroupModule = void 0;
const common_1 = require("@nestjs/common");
const prisma_module_1 = require("../prisma/prisma.module");
const prisma_repository_1 = require("./repository/implementations/prisma.repository");
const create_group_controller_1 = require("./useCases/createGroup/create-group.controller");
const create_group_service_1 = require("./useCases/createGroup/create-group.service");
const find_all_groups_controller_1 = require("./useCases/findAllGroups/find-all-groups.controller");
const find_all_groups_service_1 = require("./useCases/findAllGroups/find-all-groups.service");
const find_group_by_name_controller_1 = require("./useCases/findGroupByName/find-group-by-name.controller");
const find_group_by_name_service_1 = require("./useCases/findGroupByName/find-group-by-name.service");
const update_group_controller_1 = require("./useCases/updateGroup/update-group.controller");
const update_group_service_1 = require("./useCases/updateGroup/update-group.service");
let GroupModule = class GroupModule {
};
GroupModule = __decorate([
    (0, common_1.Module)({
        controllers: [
            create_group_controller_1.CreateGroupController,
            find_group_by_name_controller_1.FindGroupByNameController,
            update_group_controller_1.UpdateGroupController,
            find_all_groups_controller_1.FindAllGroupsController,
        ],
        providers: [
            create_group_service_1.CreateGroupService,
            find_group_by_name_service_1.FindGroupByNameService,
            update_group_service_1.UpdateGroupService,
            find_all_groups_service_1.FindAllGroupsService,
            prisma_repository_1.RepositoryPrisma,
        ],
        imports: [prisma_module_1.PrismaModule],
    })
], GroupModule);
exports.GroupModule = GroupModule;
//# sourceMappingURL=group.module.js.map