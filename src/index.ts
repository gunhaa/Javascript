import eventloop from "./event/eventloop";
import dataLoader from "./event/dataLoader";
import { cpuBound, ioBound } from "./await/await";

// eventloop();
// dataLoader();
const main = async () => {
  //   const result = await ioBound();
  const result = await cpuBound(1);
//   const result = await cpuBound(1);
//   const result = cpuBound(500);
//   const result = cpuBound(2000);

  console.log(result);
};

main();
