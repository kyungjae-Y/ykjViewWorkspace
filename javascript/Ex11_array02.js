for (let i = 1; i <= 5; i++) {
  console.log(i);
}

for (let i = 6; i <= 15; i++) {
  console.log(i);
}

function printArray(a, b) {
  if (isNaN(a) || isNaN(b)) return '숫자값을 넣어주세요'
  if (b < a) {
    temp = a;
    a = b;
    b = temp;
  }
  let result = '';
  for (let i = a; i <= b; i++) {
    result += i + " ";
  }
  return result
}
console.log(printArray(1, 5));
console.log(printArray(6, 15));
console.log(printArray(15, 4));
console.log(printArray(1, 'test'));