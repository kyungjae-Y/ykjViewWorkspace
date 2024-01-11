// js : 객체, 함수
function sayHi() {
  console.log("hello");
}
sayHi()

let dog = {
  name: '바둑이',
  age: 4,
  owner: {
    name: '윤경재'
  },
  toys: ['뼈다귀', '공'],
  callOwner: function () {
    console.log(`${this.owner.name}님 놀자`);
  }
}
let cat = {
  name: '야옹이',
  age: 4,
  owner: {
    name: '제임스'
  },
  toys: ['츄르', '낚시줄'],
  callOwner: function () {
    console.log(`${this.owner.name}님 놀자`);
  }
}
console.log(dog);
console.log(dog.owner.name);
console.log(dog.toys[1]);
dog.callOwner()

cat.callOwner()

let nameKey = 'name'
let nameValue = '흰둥이'
let ageKey = 'age'
let ageValue = 3

const dog2 = {
  [nameKey]: nameValue,
  [ageKey]: ageValue
}
console.log(dog2);

// 객체 안에 있는 모든 키값 가져오기
console.log(Object.keys(cat));
// 모든 키값 가져오기
console.log(Object.values(cat));

// 외부에서 선언된 변수이름과 값을 둘 다 그대로 사용하고 싶으면 그냥 넣으면 가능
const name = '토끼'
const age = 2;
const toys = ['당근', '당근', '당근']
// const rabbit = {
//   name: name,
// }
const rabbit = {
  name,
  age,
  toys
}
console.log(rabbit);