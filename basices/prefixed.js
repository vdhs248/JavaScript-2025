let x = 5;
let y = ++x;  // x is incremented first, then assigned to y
console.log(x); // 6
console.log(y); // 6

let a = 5;
let b = x++;  // y gets the current value of x (5), then x is incremented
console.log(a); // 6
console.log(b); // 5

/*

console.log(2 > 1)
console.log(2 >= 1)
console.log(2 < 1)
console.log(2 == 1)
console.log(2 > 1)
console.log(2 != 1)


*/
console.log("2" > 1);
console.log("02" > 1);

console.log(null > 0);
console.log(null == 0);
console.log(null >= 0);


console.log(undefined == 0);
console.log(undefined > 0);

// ===

console.log("2" == 2);
