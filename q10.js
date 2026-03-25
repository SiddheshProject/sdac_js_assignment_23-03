const arr0 = ["A", "B", "C", "D", "E"]
const arr1 = ["P", "Q", "R", "S", "T"]
console.log(`[${arr0[0]} ${arr1[0]}]`);
console.log(arr0[0] + " " + arr1[0]);

const combined = [...arr0, ...arr1];

console.log(combined);

console.log(...arr0, ...arr1);












// console.log(arr0);

// console.log(...arr0+...arr1);