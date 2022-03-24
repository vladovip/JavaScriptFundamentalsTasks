class Vehicle {

    constructor (type,model,parts,fuel){
        this.type = type;  // string
        this.model = model; // string
        this.parts = parts; // object
        this.fuel= fuel; // number
        this.parts.quality =  this.parts.engine * this.parts.power; // number
    }

    drive (fuelLoss){
        this.fuel -= fuelLoss;  // number
    }

}

let parts = { engine: 6, power: 100 };
let vehicle = new Vehicle('a', 'b', parts, 200);
vehicle.drive(100);
console.log(vehicle.fuel);
console.log(vehicle.parts.quality);

