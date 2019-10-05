const todos = ['thing1', 'thing2', 'thing3', 'thing4', 'thing5']


// todos.splice(2,1)
// todos.push('Buy coffee')
// todos.shift()

// console.log(`you have ${todos.length} todos!`)

//  todos.forEach(function (item, index) {
//   console.log(index)
//   console.log(item)
// })

// console.log(todos.length)
// console.log(todos)

//challenge area
//loop through array

// for (let count = 0; count <= 2; count++) {
//   console.log(count)
// }

for (let count = 5; count >= 0; count--) {
  console.log(count)
}

for (let count = 0; count < todos.length; count++) {
  console.log(todos[count])
}

for (let count = todos.length -1; count >= 0; count--) {
  console.log(todos[count])
}