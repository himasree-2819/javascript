// The function will always return a Promise.
// You can use await inside it to wait for asynchronous work.
const getData = async () => {
  return "✅ Message Delivered !";
};

getData().then(msg => console.log(msg));
