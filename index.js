/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/
let myConversions = []
const meter = 3.281
const liter = 0.264
const kilogram = 2.204
const button = document.querySelector(".button")
const inputBox = document.querySelector(".input-box")
const outputText1 = document.querySelector(".output-text1");
const outputText2 = document.querySelector(".output-text2");
const outputText3 = document.querySelector(".output-text3");

 
button.addEventListener("click", function(){
    myConversions.push(inputBox.value);
    length()
    volume()
    mass()
})

function length() {
  let lengthResults = `${myConversions[0]} meter = ${myConversions[0] * meter} feet | ${myConversions[0]} feet = ${(myConversions[0] / meter).toFixed(3)} meter`
  outputText1.innerHTML = lengthResults
}

function volume() {
  let volumeResults = `${myConversions[0]} liters = ${myConversions[0] * liter} gallons | ${myConversions[0]} gallons = ${(myConversions[0] * liter).toFixed(3)} liters `
  outputText2.innerHTML = volumeResults
}

function mass() {
  let massResults = `${myConversions[0]} kilo = ${(myConversions[0] * kilogram).toFixed(3)} pounds | ${myConversions[0]} pounds = ${(myConversions[0] / kilogram).toFixed(3)} kilo `
  outputText3.innerHTML = massResults
}

