//Inheritance is an Object-Oriented Programming (OOP)
// concept where a class (called child class or subclass) can reuse properties and methods of another class (called parent class or superclass).
//one class can inherit properties and methods from another class

//base//
class Animal {
    constructor(name) {
        this.name = name; //initialize
    }

    speak(){
        console.log(`${this.name} makes a sound.`);
        
    }
}

// Child class inherits from Animal
// class Dog extends Animal {
//   speak() {
//     console.log(`${this.name} barks.`);
//   }
// }

// let dog1 = new Dog("jacky");
// dog1.speak();
 
// Child class inherits from Animal

 class Dog extends Animal {
    constructor (name,breed){
        super(name); //call the parent class constructor
        this.breed = breed;
    }
    speak(){
        console.log(`${this.name} ${this.breed} barks`);
        
    }
 }

 const dog = new Dog("Jacky","pomeranian");
 dog.speak();