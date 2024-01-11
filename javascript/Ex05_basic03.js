// 비교연산자
// == != > < <= >=

// 자바랑 동일한 부분
let num = 10;
console.log(num == 10);
console.log(num != 10);
console.log(num > 10);
console.log(num < 10);
console.log(num >= 10);
console.log(num <= 10);

// js 만 있는 부분 (===)
console.log('---------------------------');
console.log(num == '10');
console.log(num === '10');
console.log(true == 'true');

let number = 10;
let result = 1;
console.log(result);

result = number++
console.log(result, number);

result = number--
console.log(result, number);

result = ++number
console.log(result, number);

result = --number
console.log(result, number);

result = number++

// 형변환
// + 인식 - 1) 산술연산자(더하기) 2) 연결연산자 3) 부호 +

number = '10'
console.log(+number);
console.log(typeof + number);

let test = 10;
console.log(test + '' + 10);
console.log(typeof (test + ""));

test = (1000).toString()
console.log(typeof test);
console.log(test + 1000);

let test2 = (true).toString()
console.log('10' !== 10);
console.log(true == test2);

// 숫자 -> 문자
let num1 = num + '';
num1 = num1.toString()

// 문자 -> 숫자
let num2 = '10';
num2 = +num2;
num2 = num2 * 1;
num2 = parseInt('100');