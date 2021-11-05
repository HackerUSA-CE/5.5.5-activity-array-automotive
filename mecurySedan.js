//this will import the Vehicle class from the vehicleBaseClass.js file
import Vehicle from "./vehicleBaseClass.js";

//Create a Car class that extends the Vehicle class (located in the vehicleBaseClass.js)
//Note that your import statement won't work until you call the Vehicle class below 



//This will help you test out your code! 
let v = new Car("Mecury", "Sedan", "1965", "color", mileage);
console.log(v.make)