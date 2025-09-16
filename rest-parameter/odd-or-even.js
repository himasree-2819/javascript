function checkOddEven(...numbers) {
  numbers.forEach(num => {
    if (num % 2 === 0) {
      console.log(`${num} is Even`);
    } else {
      console.log(`${num} is Odd`);
    }
  });
}

checkOddEven(3, 4, 9, 8, 10, 13);
