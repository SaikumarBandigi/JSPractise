class Car {
    constructor(make, model) {
        this.make = make;
        this.model = model;
    }

    displayInfo() {
        console.log(`This is a ${this.make} ${this.model}.`);
    }
}

const myCar = new Car("Toyota", "Camry");
myCar.displayInfo();
