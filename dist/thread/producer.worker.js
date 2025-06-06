"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const worker_threads_1 = require("worker_threads");
if (!worker_threads_1.isMainThread) {
    worker_threads_1.parentPort.on("message", value => {
        console.log(`부모가 보냄: ${value}`);
        worker_threads_1.parentPort.postMessage('pong');
        worker_threads_1.parentPort.close();
    });
}
