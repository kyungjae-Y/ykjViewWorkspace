// js 에서 랜덤으로 값을 가져오기
// console.log(Math.random());
// console.log(Math.random() * 10);
// console.log(Math.random() * 100);

// console.log(Math.random() * 10 + 1);

// 1. 1 ~ 100 사이의 숫자를 랜덤으로 저장하고 그 수가 짝수인지 홀수인지 출력하는 checkNum 함수를 만든 후 호출
console.log('문제 1');

function checknum(num) {
  console.log(parseInt(Math.random() * 100 + 1));
  if (parseInt(Math.random() * 100 + 1) % 2 == 0) {
    console.log('짝수입니다');
  } else {
    console.log('홀수입니다');
  }
}
checknum()

// 2. 배열에 랜덤으로 (-100 ~ 100) 사이의 숫자를 4개 저장 후 전부 홀수인지 검사하는 isAllOddNum 함수를 만드시오
console.log('문제 2');

function isAllOddNum(num) {
  let arr = [];
  let cnt = 0;
  for (let i = 0; i < 4; i++) {
    let num = parseInt(Math.random() * 201 - 100);
    if (num % 2 == 0) {
      cnt += 1;
    }
    arr.push(num);
  }
  console.log(arr);
  cnt == 0 ? console.log('홀수입니다') : console.log('아닙니다');
}
isAllOddNum()