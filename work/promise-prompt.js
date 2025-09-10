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
