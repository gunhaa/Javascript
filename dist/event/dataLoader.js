"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const dataLoader = () => {
    const tempbBatching = [];
    console.log("start tick...");
    tempbBatching.push(1);
    tempbBatching.push(2);
    Promise.resolve().then(() => {
        console.log("next tick start...");
        console.log(tempbBatching);
    });
    tempbBatching.push(8);
    console.log("end tick...");
};
exports.default = dataLoader;
