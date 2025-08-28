// same as reduce,but start from the end of the Array

let nums = [10,20];
let result =nums.reduceRight((acc,curr) => acc - curr,10);
console.log(result);
