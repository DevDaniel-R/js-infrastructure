// Function - input (argument), code, output (return value)

let greetUser = function () {
console.log('Hello User')
}

greetUser()

let square = function (num) {
  let result = num * num
  return result
}


let value = square(3)
let otherValue = square(10)
console.log(value)
console.log(otherValue)

// convertFahrenheightToCelsius
//call a couple of time (32 -> 0 ) (68 -> 20)
// print the converted value


let convertFahrenheightToCelsius = function (fahrenheight) {
let celsius = (fahrenheight - 32) * 5 / 9
return celsius 
}

let tempOne = convertFahrenheightToCelsius(32)
let tempTwo = convertFahrenheightToCelsius(68)

console.log(tempOne) 
console.log(tempTwo)



