// this 값은 자바와 다르게 js 는 변동이 있다 -> 해결하기 위한 메서드
// this 값을 우리가 설정해 줄 수 있음
// Function 객체 안에 있는 메서드
// 각 메서드의 첫번째 인자값은 내가 설정해주고 싶은 this 값이 들어온다
// 1. apply()
// 2. call()
// 3. bind()

function printName() {
  // this 가 최상위 객체
  return this?.name || '이름이 없습니다';
}
console.log(printName());

const cat = {
  name: '나비',
}
// 원래는 최상위 객체의 주소값이지만 -> this 를 cat 의 주소값으로 변경 후 실행
console.log(printName.call(cat));
console.log(printName.apply({
  name: '윤경재'
}));

function addAll(x, y, z) {
  return `${this?.name || '이름이 없습니다'} 결과값 : ${x + y + z}`
}
console.log(addAll(1, 2, 3));
console.log(addAll.call(cat, 4, 5, 6));
console.log(addAll.apply(cat, [10, 20, 30]));

// call -> , 를 기반으로 매개 인자값을 순서대로 넘겨준다
// apply -> 배열을 기반으로 매개 인자값을 넘겨준다

// call, apply -> 함수를 즉시 실행
// bind() -> 내가 원할 때 실행 (this 만 세팅)

const dog = {
  name: '멍멍이',
}
const printdogName = printName.bind(dog);

const printaddAll = addAll.bind(dog, 10, 20, 30);
console.log(printdogName());
console.log(printaddAll());