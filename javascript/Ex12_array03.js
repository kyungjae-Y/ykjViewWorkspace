// 함수의 표현식 - 무명함수랑 세트
let callName = function printName(name) {
  console.log('이름 : ', name);
}
callName('윤경재')

let callAge = function (age) {
  console.log('나이 : ', age);
}
callAge('2*')

// new Function()
function addNumber(x, y = 10) {

  // 인자값들을 배열처럼 넣어주는 애 -> 배열은 아님
  console.log(arguments);
  console.log((arguments instanceof Array)); // false 

  console.log(arguments.length);
  console.log('test = ', arguments[0]);
  arguments[0] = 100;
  console.log('test2 = ', arguments[0]);
  // let x = x;
  // let y = 10;
  return x + y;
}
console.log(arguments);
console.log('------------------');
console.log(addNumber(10, 20)); // 30
// console.log(addNumber(1)); // 11
// console.log(addNumber(1, 2, 3, 4, 5));
// console.log([1234] instanceof Array);

// 화살표 함수는  function() 키워드가 생략 -> 생성자함수로 사용을 못한다 : 가볍다 
// 화살표 함수도 무명함수 
let minus = (a, b) => {
  // console.log(arguments) -> 생성자 함수에서만 있다
  return a - b
};
let multifly = (a, b) => a * b;

minus(10, 20);

// 자바스크립트에서 함수는 값으로 사용할 수 있다
let addAll = x => y => z => `x:${x} y: ${y} z: ${z}`;
console.log(addAll(1)(2)(3));

let addTest = function (x) {
  return function (y) {
    return function (z) {
      return `x:${x} y: ${y} z: ${z}`;
    }
  }
}
console.log(minus instanceof Object);

// 즉시 실행함수 
(function (x, y) {
  console.log(x + y);
})(10, 20);

let testFunc = function (x, y) {
  console.log(x + y);
}

// (testFunc(10, 20));