let baseClassTestElement = document.querySelector("#base-class-test")
let derivedClassTestElement = document.querySelector("#derived-class-test")
let appliedClassTest1Element = document.querySelector("#applied-class-test-1")
let appliedClassTest2Element = document.querySelector("#applied-class-test-2")
baseClassTestElement.style.color = "red"
derivedClassTestElement.style.color = "red"
appliedClassTest1Element.style.color = "red"
appliedClassTest2Element.style.color = "red"
//wrap everything in try catch since they won't have classes to begin with
try {
    //Base Class tests basically just say they didn't break anything
    let v = new Vehicle("Jord J-051")
    if(v.model === "Jord J-051" && v.drive() === "Jord J-051 drives"){
        baseClassTestElement.textContent = "Passed"
        baseClassTestElement.style.color = "green"
    }
} catch (error) {
    
    console.log("some base class tests have failed error:", error)
}