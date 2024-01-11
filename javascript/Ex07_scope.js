// 스코프
let x = 100; {
  let y = 10;
  console.log(x, " ", y);
}

function test() {
  let z = 100
  console.log('x = ', x);
  console.log('z = ', z);
  if (z == 300) {
    let a = z - 100
    console.log('a = ', a);
  }
  // console.log('a = ', a);
}
test();

console.log('x', x);
console.log('y', y);

// let, const -> 블록스코프 : java 랑 동일
// var -> 함수스코프 가지고 있다

function printTest() {
  var test = 100
}
console.log(test);