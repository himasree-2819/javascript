//Extract properties from objects.

const person = {name: "hima", age:22,country:"india"}

//basic destructuring

const { name, age } = person;
console.log(name); // Hima
console.log(age);  // 22

//rename variables 

const {country:nation} = person;
console.log("nation", nation);

//default value

const {gender ='female'} = person;
console.log("gender:", gender);
console.log("person..",person);



