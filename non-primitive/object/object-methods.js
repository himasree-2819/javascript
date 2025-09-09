//you can store fuctions inside object these are called objectmethods
const car = {
    brand: "Toyota",
    start: function(){
        console.log("car started");
        
    }
}

car.start();
//"this-keyword - its refers the object itself .( used to access properties)"

const person ={
    name: "reshma",
    age:23,
    greet: function(){
        console.log(`Hello,my name is ${this.name}`);
        
    }
}

person.greet();