//multiple arguments
// let add = function (a, b, c) {
//   return a + b + c
// }

// let result = add(10, 1, 5)
// console.log(result)

// Default arguments

// let getScoreText = function (name = 'Anonymous', score = 0) { 
// return 'Name: ' + name + ' - Score: ' + score
// }

// let scoreText = getScoreText(undefined, 100)
// console.log(scoreText)

//challenge area
//total, topPercent - 2arguments   .2 tip

// let getTip = function (total, tip = .2) {
//   return total * tip
// }


let name = 'Daniel'
let lastName = 'Rodriguez'

console.log(`Hello mister ${name} ${lastName}. What can I do for you sir?`)












// let tip = getTip(100)

// console.log(tip)

let getTip = function (total, tip = .2) {
  return total * tip
}

const tip = getTip(100)

console.log(tip)


let cashBack = function (total, interest = .15) {
  return total * interest
}

let interest = cashBack(100)
console.log(interest)



