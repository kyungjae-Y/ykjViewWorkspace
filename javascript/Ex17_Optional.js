// 옵셔널 체이닝 -> ES11 (ECMA 2020)

// null, undefined 차이

console.log(!!null);
console.log(!!undefined);

let item = {
  price: 1
}
console.log(typeof item);
console.log(item.price);

// 객체를 동적으로 접근하기
let cat = {
  name: '나비',
  age: 2
}

// 객체를 동적으로 가져오기
function getValue(obj, key) {
  if (obj[key] == undefined) {
    return '키값이 없습니다';
  }
  return obj[key]
}

// 객체를 동적으로 추가하기
function addKey(obj, key, value) {
  if (!!obj[key]) {
    return '키값이 있습니다';
  }
  obj[key] = value;
  return obj;
}

// 객체를 동적으로 삭제하기
function removeKey(obj, key) {
  if (!obj[key]) {
    return '키값이 없습니다';
  }
  delete obj[key]
  return obj;
}

console.log(getValue(cat, 'test'));
console.log(addKey(cat, 'age'));
console.log(removeKey(cat, 'test'));

// console.log(getValue(cat, 'name'));
// console.log(addKey(cat, 'owner', {
//   name: '윤경재'
// }));

// console.log(addKey(cat, 'age', 10));
// console.log(removeKey(cat, 'age'));

// nullish coalescing operator - 널리쉬 콜리싱 오퍼레이터
// ull, undefined 만 false 로 인식
// null 체크
// 0은 자동으로 false 값으로 인식

let num = 0;
console.log(num || -1);
console.log(num && -1);

console.log(null || '1');