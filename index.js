const userInput = document.getElementById("user-input")
const inputBtn = document.getElementById("input-btn")
const length = document.getElementById("length")
const volume = document.getElementById("volume")
const mass = document.getElementById("mass")

inputBtn.addEventListener("click", function(){ 
    let toFeet = (userInput.value * 3.2821).toFixed(3)
    let toGallons = (userInput.value * 0.264).toFixed(3)
    let toPounds = (userInput.value * 2.204).toFixed(3)
    let toMeters = (userInput.value * 0.3048).toFixed(3)
    let toLiters = (userInput.value * 3.785).toFixed(3)
    let toKilos = (userInput.value * 0.454).toFixed(3)
    length.textContent = `${userInput.value} meters = ${toFeet} feet | ${userInput.value} feet = ${toMeters} meters`
    volume.textContent = `${userInput.value} liters = ${toGallons} gallons | ${userInput.value} gallons = ${toLiters} liters`
    mass.textContent = `${userInput.value} kilos = ${toPounds} pounds | ${userInput.value} pounds = ${toKilos} kilos`
})

// take input
//
/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/