console.log(name);
var name = '윤경재';
console.log(name);

function sayHi() {
  console.log('hello');
}
sayHi()

sayHi()

function sayHi() {
  console.log('hi');
}

console.log(dog);
let dog = '바둑이'

// let, const VS var
// var -> 함수스코프 영역, 변수 선언전에 출력 가능 : undefined 출력
// let, const -> 블록스코프 영역, 변수 선언전에 출력 불가능 : 에러 출력

var i = 99;
for (var i = 1; i < 10; i++) {

}
console.log(i);

let i = 99;
for (let i = 1; i < 10; i++) {

}
console.log(i);