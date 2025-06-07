import eventloop from "./event/eventloop";
import dataLoader from "./event/dataLoader";
import { cpuBound, ioBound } from "./await/await";
import { isMainThread, Worker } from "worker_threads";
import { badBank } from "./thread/badBank";
import SharedBankV1 from "./thread/sharedBankV1";

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

// console.log(`isMainThread? : ${isMainThread}`);

// const workerThread = new Worker("./dist/thread/producer.worker.js");

// workerThread.on("message", (value) => {
//   console.log(`자식이 보냄: ${value}`);
// });

// workerThread.on("exit", (_) => {
//   console.log("자식 스레드 parentPort.close() 호출, 자식 스레드 종료");
// });

// workerThread.postMessage("ping");

// try {
//   badBank.withdraw(12000);
// } catch (e) {
//   console.log(`에러가 발생함: ${e}`);
// }

const workerThread1 = new Worker("./dist/thread/producer.worker.js");
const workerThread2 = new Worker("./dist/thread/producer.worker.js");

const buffer = new SharedArrayBuffer(4);

const sharedBank = new SharedBankV1(buffer, 10000);

workerThread1.postMessage(buffer);
workerThread2.postMessage(buffer);

setTimeout(() => {
  console.log(
    `워커 스레드의 결과는 0이여야 한다, 하지만 결과는 ${sharedBank.getBalance()}`
  );
}, 2000);
