let array = [];
array[3] = 100;
console.log(array);

array = [1,
  '2',
  true, NaN, {}, [100, 203, 12, 123], [], 12.1233123
]
console.log(array);

for (let i = 0; i < array.length; i++) {
  console.log(`index ${i} = ${array[i]}`);
}
array[-1] = "test";
console.log(array[-1]);

let arr = new Array();
arr = new Array(3);
console.log(arr);