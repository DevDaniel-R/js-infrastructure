// let myBook = {
//   title: '1984',
//   author: 'George Orwell',
//   pageCount: 326
// }

// let otherBook = {
//   title: 'A peoples History',
//   author: 'Howard Zinn',
//   pageCount: 726
// }

// let getSummary = function (book) {
//   return {
//     summary: `${book.title} by ${book.author}`, 
//     pageCountSummary: `${book.title} is ${book.pageCount} pages long`
//   }
// }

// let bookSummary = getSummary(myBook)
// let otherBookSummary = getSummary(otherBook)

// console.log(bookSummary.pageCountSummary)

//Challenge Area
//Create function - take fahrenheight in - return object with all three

// convertFahrenheightToCelsius
//call a couple of time (32 -> 0 ) (68 -> 20)
// print the converted value
// let convertFahrenheightToCelsius = function (fahrenheight) {
//   let celsius = (fahrenheight - 32) * 5 / 9
//   return celsius 
//   }
//   let tempOne = convertFahrenheightToCelsius(32)
//   let tempTwo = convertFahrenheightToCelsius(68)
//   console.log(tempOne) 
//   console.log(tempTwo)

//   let fahrenheight = 50 // 0c - 273.15k
//  let celsius = (fahrenheight - 32) * 5/9
//  let kelvin = (fahrenheight - 459.67) * 5/9

//  let convertFahrenheight = function (fahrenheight){
//    return  {
//      fahrenheight: fahrenheight,
//      kelvin: (fahrenheight - 459.67) * (5/9),
//      celsius: (fahrenheight - 32) * (5/9)
//    }

//   }

//   let temps = convertFahrenheight(74)

//   console.log(temps)

  let temps = function (fahrenheight) {
    return {
      fahrenheight : 84,
      kelvin: (fahrenheight - 459.67) * (5/9),
      celsius: (fahrenheight - 32) * (5/9)
    }
  }

    let getMyTemp = temps(100)
    console.log(getMyTemp)