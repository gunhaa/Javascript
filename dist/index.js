"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const worker_threads_1 = require("worker_threads");
// eventloop();
// dataLoader();
// const main = async () => {
//   const result = await ioBound();
// const result = cpuBound(1);
//   const result = await cpuBound(1);
//   const result = cpuBound(500);
//   const result = cpuBound(2000);
// console.log(result);
// };
// main();
const workerThread = new worker_threads_1.Worker("./dist/thread/producer.worker.js");
workerThread.on("message", (value) => {
    console.log(`자식이 보냄: ${value}`);
});
workerThread.on("exit", (_) => {
    console.log("자식 스레드 parentPort.close() 호출, 자식 스레드 종료");
});
workerThread.postMessage("ping");
