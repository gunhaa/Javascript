"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const worker_threads_1 = require("worker_threads");
const sharedBankV2_1 = __importDefault(require("./sharedBankV2"));
// if (!isMainThread) {
//   parentPort!.on("message", value => {
//     console.log(`부모가 보냄: ${value}`);
//     parentPort!.postMessage('pong');
//     parentPort!.close();
//   });
// }
if (!worker_threads_1.isMainThread) {
    worker_threads_1.parentPort.on("message", (buffer) => {
        for (let i = 0; i < 500; i++) {
            // badBank.withdraw(1000);
            // const sharedBank = new SharedBankV1(buffer);
            const sharedBank = new sharedBankV2_1.default(buffer);
            sharedBank.withdraw(1000);
        }
        worker_threads_1.parentPort.close();
    });
}
