// let name = 'Daniel'

// //length Property
// console.log(name.length)

// //convert to upper case
// console.log(name.toUpperCase())

// //convert to lower case

// console.log(name.toLowerCase())

// //includes method
// let password = 'abc123pasghjord098'
// console.log(password.includes('password'))

// //Trim methods removes white spaces
// console.log(name.trim())



// let isValidPassword = function (password) {
//   return password.length > 8 && !password.includes('password')

// }
//challenge
//isValidPassword
//only return true if 8 char or more and it doesnt contain pass words 
let isValidPassword = function (password) {
  return password.length > 8 && !password.includes('password') 
}

console.log(isValidPassword('gdsvrh'))
console.log(isValidPassword('gyfdtkfugyuuttftf'))
console.log(isValidPassword('sdojgfuhpasswordjk'))



