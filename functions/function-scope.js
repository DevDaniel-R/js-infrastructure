//scope tree

//Global Scope (convertfahrenheighttocelcius, tempOne, tempTwo)
  //local scope (fahrenheight, celsius)
    //local scope (isFreezing)


let convertFahrenheightToCelsius = function (fahrenheight) {
  let celsius = (fahrenheight - 32) * 5 / 9

  if (celsius <= 8) {
    let isFreezing = true
  }

  return celsius 
  }
  
  let tempOne = convertFahrenheightToCelsius(32)
  let tempTwo = convertFahrenheightToCelsius(68)
  
  console.log(tempOne) 
  console.log(tempTwo)
  