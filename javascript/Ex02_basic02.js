console.log(10 + 3);
console.log(10 - 3);
console.log(10 * 3);
// 자바는 3만 나오지만 js 는 3.3333333333...
console.log(10 / 3);
console.log(10 % 3);
console.log(Math.pow(10, 3));
console.log(10 ** 3);

console.log(2 - "test");
console.log(10 / 0);
console.log(0 / 10);

// String 종류 - ""(더블 쿼테이션), ''(싱글 쿼테이션), ``(백틱)
let intro = '윤경재\n입니다\\';
console.log(intro);
intro = "'윤경재' 입니다";
console.log(intro);
intro = '"윤경재" 입니다';
console.log(intro);

// `` 스트링 템플릿을 만들 수 있다
const name = "윤경재";
const job = "백수";
intro = `저는 ${name}입니다 직업은 ${job}입니다`;
console.log(intro);

// boolean 타입은 동일하다
let isDead = true;
console.log(isDead);
console.log(!isDead);
console.log(!!isDead);
console.log(!!0);

// falsy value
console.log(!!0);
console.log(!!"");
console.log(!!null);
console.log(!!undefined);
console.log(!!NaN);

// truly value
console.log(!!10);
console.log(!!-10.123);
console.log(!!"test");
console.log(!![]);
console.log(!!{});
console.log(!!Infinity);

// symbol 타입 - 유일무이한 값
const num1 = '1';
const num2 = '1';
console.log(num1 == num2);
const symbol1 = Symbol('1');
console.log(symbol1);
const symbol2 = Symbol('1');
console.log(symbol2);
console.log(symbol1 == symbol2);

// object 타입 - java 의 Map : key value 로 이루어져 있다
const cat = {
  name: "고양이",
  age: 4,
  isOwner: true
}
console.log(cat);

// object 값 접근 방법 2가지
console.log(cat.name);
console.log(cat['name']);

function getKeyValue(object, key) {
  console.log(object[key]);
}
getKeyValue(cat, 'age');
getKeyValue(cat, 'isOwner');
getKeyValue(cat, 'name');

// 객체 값 추가
cat['ownerName'] = "제임스";
console.log(cat);
cat.ownerAge = 10;
console.log(cat);
delete cat.ownerAge;
console.log(cat);
delete cat['ownerName'];
console.log(cat);