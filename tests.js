let vehicleClassTestElement = document.querySelector("#vehicle-class-test")
let factoryClassTestElement = document.querySelector("#factory-class-test")

vehicleClassTestElement.style.color = "red"
factoryClassTestElement.style.color = "red"

//wrap everything in try catch since they won't have classes to begin with
try {
    //Base Class tests basically just say they didn't break anything
    let v = new Vehicle("Jord", "J-051", 2015, 50000, "12312")
    v.paint("blue")
    console.log("Test case 1 vehicle: ", v)
    console.log("Test conditions", 
        v.make === "Jord" ,
        v.model === "J-051",
        v.year === 2015 ,
        v.price === 50000 ,
        v.vin === "12312" ,
        v.color === "blue" ,
        v.drive() === "2015 Jord J-051 drives"
    )
    if(
        v.make === "Jord" &&
        v.model === "J-051" && 
        v.year === 2015 &&
        v.price === 50000 &&
        v.vin === "12312" &&
        v.color === "blue" &&
        v.drive() === "2015 Jord J-051 drives"
    ){
        vehicleClassTestElement.textContent = "Passed"
        vehicleClassTestElement.style.color = "green"
    }
} catch (error) {
    
    console.log("some vehicle class tests have failed error:", error)
}

try {
    //factory Class tests 
    let f = new Factory("Germany", "Elon Tusk")
    f.createVehicle(new Vehicle("Ford", "F-150",2018, 19823,"123123"))
    f.paintVehicle("123123", "green")
    f.createVehicle(new Vehicle("Chevy", "Silverado",2019, 11234,"98081"))
    f.paintVehicle("98081", "red")
    console.log("Test case 2 factory: ", f)
    console.log("Test conditions", 
        f.location === "Germany" ,
        f.owner === "Elon Tusk",
        f.vehicles.length === 2 ,
        f.vehicles.find(v => v.vin === "123123").color === 'green',
        f.vehicles.find(v => v.vin === "98081").color === 'red' ,
        f.listVehicles() === f.vehicles
    )
    if(
        f.location === "Germany" &&
        f.owner === "Elon Tusk"&&
        f.vehicles.length === 2 &&
        f.vehicles.find(v => v.vin === "123123").color === 'green'&&
        f.vehicles.find(v => v.vin === "98081").color === 'red' &&
        f.listVehicles() === f.vehicles
    ){
        factoryClassTestElement.textContent = "Passed"
        factoryClassTestElement.style.color = "green"
    }
} catch (error) {
    
    console.log("some factory class tests have failed error:", error)
}