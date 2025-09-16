//Extract values from an array into variables.
const numbers = [10,20,30,40];

//basic destructuring
const [a,b] = numbers;
console.log(a);
console.log(b);
// console.log(c);
// console.log(d);

//skipping values//

const[, , c] = numbers;
console.log(c);

//using rest operator//

const [x,...rest] = numbers;
console.log("x is :",x);






