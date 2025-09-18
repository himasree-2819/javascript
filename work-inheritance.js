class Vehicle {
  constructor(brand, model) {
    this.brand = brand;
    this.model = model;
  }

  displayInfo() {
    console.log(`This is a ${this.brand} ${this.model}.`);
  }
}

class Car extends Vehicle {
  drive() {
    console.log(`${this.brand} ${this.model} is driving on the road.`);
  }
}

class Bike extends Vehicle {
  ride() {
    console.log(`${this.brand} ${this.model} is being ridden.`);
  }
}

class Truck extends Vehicle {
  load() {
    console.log(`${this.brand} ${this.model} is carrying goods.`);
  }
}

const car1 = new Car("Toyota", "Corolla");
car1.displayInfo();  
car1.drive();        

const bike1 = new Bike("Yamaha", "R15");
bike1.displayInfo(); 
bike1.ride();        

const truck1 = new Truck("Tata", "LPT ");
truck1.displayInfo(); 
truck1.load();        
