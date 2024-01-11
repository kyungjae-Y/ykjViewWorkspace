// callback() : 나중에 부른다 - 함수를 호출하는 주체를 다른 함수에게 나를 호출할 권한 준다
function sayHi(name) {
  console.log('hello', name, 'nice meet you');
}

function introduce(lastName, firstName, callback) {
  let fullName = lastName + firstName;
  callback(fullName)
}
introduce('윤', '경재', sayHi)

let array = [3, 5, 8, 6, 7, 11, 15, 14, 22]
let printAll = function (n) {
  console.log(n);
}
array.forEach(printAll)