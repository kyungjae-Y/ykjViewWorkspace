let cat = {
  kind: '고양이',
  age: 5
}
let dog = {
  kind: '개',
  age: 4
}
let rabbit = {
  kind: '토끼',
  age: 0.5
}
let hamster = {
  kind: '햄스터',
  age: 1
}

let pets = [cat, dog, rabbit, hamster, cat]
pets.forEach(obj => console.log(obj))

// 동물의 kind 가 개 인것을 찾으시오
console.log('문제 1');
let result = pets.find(obj => obj.kind === '개')
console.log(result);

// 동물의 kind 가 고양이가 아닌것만 빼서 배열로 만드시오
console.log('문제 2');
result = pets.filter(obj => obj.kind !== '고양이')
console.log(result);
// 총 동물의 평균 나이를 구하시오
console.log('문제 3');
result = pets.reduce((a, b) => a + b.age, 0) / pets.length
console.log(result);
// 동물 나이순을 내림차순 정렬
console.log('문제 4');
let copypets = [...pets]
// result = pets.map(a => a);
result = copypets.sort((a, b) => b.age - a.age)
result.sort();
result.reverse;
console.log(result);
console.log(pets);