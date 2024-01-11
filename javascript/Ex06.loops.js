// while, for, do while

let i = 1;
while (i <= 10) {
  console.log(i);
  i++
}

i = 100;
do {
  if (i == 99) {
    i--
    continue
  }
  console.log(i);
  if (i == 95) {
    break;
  }
  i--;
} while (i > 90)


let array = [10, 20, 30, 40, 50, 60]
// for - in (방 번호가 나옴) : key 출력하는 for 문 - 배열에는 key 는 index, 객체 key 는 key
for (let i in array) {
  console.log(i);
}

// for - of (값이 나옴) : iterable 객체만 사용할 수 있다 - looping 할 수 있는 타입만 가능하다
for (let i of array) {
  console.log(i);
}

let dog = {
  name: '바둑이',
  age: 5,
  owner: {
    name: "윤경재"
  }
}

for (let key in dog) {
  console.log('key = ', key, ', value = ', dog[key]);
  console.log(`key = ${key}, value = ${dog[key]}`);
}
for (let key of dog) {
  console.log(key);
}