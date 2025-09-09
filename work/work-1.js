//  question-1 (Create an object representing a person with name, age, and city)
let person = {
  name: "Hima",
  age: 22,
  city: "Kannur"
};
//  question-2 (Add a new property to an object)
console.log(person);

// question-3 (Remove a property from an object)
person.country = "INDIA";   // Adding new property
console.log(person);

// question-4(if Statement - Check if a person is an adult)
if (person.age >= 18) {
  console.log("The person is an adult.");
}

// question-5 (if...else Statement - Find the largest of two numbers)

let a = 15, b = 50;

if (a > b) {
  console.log(a + " is larger");
} else {
  console.log(b + " is larger");
}

// question-6 (switch Statement - Check month name from number)
let month = 11;
let monthName;

switch (month) {
  case 1: monthName = "January"; break;
  case 2: monthName = "February"; break;
  case 3: monthName = "March"; break;
  case 4: monthName = "April"; break;
  case 5: monthName = "May"; break;
  case 6: monthName = "June"; break;
  case 7: monthName = "July"; break;
  case 8: monthName = "August"; break;
  case 9: monthName = "September"; break;
  case 10: monthName = "October"; break;
  case 11: monthName = "November"; break;
  case 12: monthName = "December"; break;
  default: monthName = "Invalid month";
}

console.log(monthName);

//question-7(if...else - Check if a number is divisible by both 3 and 5)

let num = 30;

if (num % 3 === 0 && num % 5 === 0) {
  console.log(num + " is divisible by both 3 and 5");
} else {
  console.log(num + " is NOT divisible by both 3 and 5");
}

//question-8(Ternary Operator - Find the minimum of two numbers)
let x = 12, y = 8;

let min = (x < y) ? x : y;
console.log("Minimum number is " + min);



