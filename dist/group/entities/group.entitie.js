"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Group = void 0;
const uuid_1 = require("uuid");
class Group {
    constructor(props, id) {
        Object.assign(this, props);
        if (!id) {
            this.id = (0, uuid_1.v4)();
        }
    }
}
exports.Group = Group;
//# sourceMappingURL=group.entitie.js.map