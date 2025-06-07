import { parentPort, isMainThread } from "worker_threads";
import { badBank } from "./badBank";
import SharedBankV1 from "./sharedBankV1";
import SharedBankV2 from "./sharedBankV2";

// if (!isMainThread) {
//   parentPort!.on("message", value => {
//     console.log(`부모가 보냄: ${value}`);
//     parentPort!.postMessage('pong');
//     parentPort!.close();
//   });
// }

if (!isMainThread) {
  parentPort!.on("message", (buffer: SharedArrayBuffer) => {
    for (let i = 0; i < 500; i++) {
      // badBank.withdraw(1000);
      // const sharedBank = new SharedBankV1(buffer);
      const sharedBank = new SharedBankV2(buffer);
      sharedBank.withdraw(1000);
    }
    parentPort!.close();
  });
}
