const eventloop = () => {
  setTimeout(() => {
    console.log(1);
  }, 0);
  console.log(2);
  new Promise((resolve, reject) => {
    resolve(3);
  }).then((result) => {
    console.log(result);
  });
  console.log(4);
  process.nextTick(() => console.log(5));
};

// result 2 4 5 3 1
// process.nextTick()은 microtask queue보다 우선순위가 높은 특별한 queue이며, 가장 먼저 들어온다
// process.nextTick() 큐 ← 가장 빠름 (nextTick queue)
// Microtask Queue (Promise.then, queueMicrotask)
// Macrotask Queue (타이머, I/O, setImmediate 등) 
export default eventloop