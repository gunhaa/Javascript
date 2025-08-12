"use strict";

const testObj = {};

// defineProperty로 속성 생성시 기본값 false
Object.defineProperty(testObj, "name", {
  value: "gunha",

  // 수정 불가/ 속성 변경은 strict모드에서는 에러를 throw
  // 수정 불가
  writable: false,
  // 속성 변경, 삭제 불가 처리
//   configurable: false,
  enumerable: true,
});

testObj.name = "test1";

console.log(testObj.name);
console.log(testObj);

const testObj2 = {};
// 기본 생성시 속성값은 true
testObj2.name = "test2";
console.log(testObj2.name);
console.log(testObj2);
