"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
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
// result 2 4 3 1
// nodejs의 eventloop는 async promise가 들어가는 마이크로 태스크 큐가 최상위
// 마이크로 태스크 큐는 후순위라 해당 결과가 나옴
exports.default = eventloop;
