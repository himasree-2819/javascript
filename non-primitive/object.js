// object is a collection of key-value pairs

// used to multiple values in a single variable & the values

const person ={
    name:'hima',
    age:21,
    isStudent: true
}

console.log(person.name);
console.log(person["age"]);

// add or modify datas

person.city = "kannur";
person.age = 22;

delete person.city;
console.log(person);


