// A promise: food will be ready after 2 seconds
function orderFood() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("🍔 Your food is ready!");
    }, 2000);
  });
}

//async-await
async function studentCanteen() {
  console.log("🧑 I ordered food...");
  
  let food = await orderFood();  
  console.log(food);

  console.log(" Now I can eat!");
}

studentCanteen();
