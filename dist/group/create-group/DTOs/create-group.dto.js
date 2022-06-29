"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateGroupDTO = void 0;
const uuid_1 = require("uuid");
class CreateGroupDTO {
    constructor() {
        if (!this.id) {
            this.id = (0, uuid_1.v4)();
        }
    }
}
exports.CreateGroupDTO = CreateGroupDTO;
//# sourceMappingURL=create-group.dto.js.map