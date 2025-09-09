let myPromise = new Promise((resolve, reject) => {
    let success = true; // try changing to false

    if (success) {
        resolve("✅ Promise successfull!");
    } else {
        reject("❌ Promise rejected!");
    }
});

myPromise
    .then(result => console.log(result))   // when resolved
    .catch(error => console.log(error))    // when rejected
    .finally(() => console.log("🍽 Done!"));

//     let pizzaOrder = new Promise((resolve, reject) => {
//   let pizzaReady = true; // try false also

//   if (pizzaReady) {
//     resolve(" Pizza delivered!");
//   } else {
//     reject("❌ Pizza not available!");
//   }
// });

// pizzaOrder
//   .then(msg => console.log(msg))   // if success
//   .catch(err => console.log(err))  // if failed
//   .finally(() => console.log(" Done waiting!"));
