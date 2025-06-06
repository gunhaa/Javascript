import { parentPort, isMainThread } from "worker_threads";

if (!isMainThread) {
  parentPort!.on("message", value => {
    console.log(`부모가 보냄: ${value}`);
    parentPort!.postMessage('pong');
    parentPort!.close();
  });
}
