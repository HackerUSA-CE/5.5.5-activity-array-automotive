# Activity Automative

- In this lesson students work on creating a vehicle and factory class
- the learning objective is applying the concepts of classes to solve a real-world problem of modeling a vehicle manufacturing factory

## Instructions
- create a `Vehicle` class in the vehicle.js file that adheres to the provided class diagram
- a vehicle should by default have an `undefined` paint, since all metal starts unpainted
- when the `.paint("blue")` method is called on a vehicle it should paint it blue
- when the `.drive()` method is called on a vehicle `new Vehicle("Ford", "F-150", 2015, 19000, "1234")` it should print out this `2015 Ford F-150 drives`
- create a `Factory` class in the factory.js file that adheres to the provided class diagram
- when the `.createVehicle(vehicle)` is called with a valid vehicle it creates a vehicle in the factory
- when the `.listVehicles()` is called it returns all vehicles in factory
- when `.paintVehicle(vin, paintColor)` it paints the matching vehicle the specified color

## Acceptance criteria
- The vehicle class passes all tests
- The vehicle class definition matches the class diagram
- The factory class passes all tests
- The factory class definition matches the class diagram


