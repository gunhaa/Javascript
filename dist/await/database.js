"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Database {
    constructor() {
        this.findSomething = () => new Promise(resolve => setTimeout(() => resolve('db working fin'), 1000));
    }
}
exports.default = Database;
;
