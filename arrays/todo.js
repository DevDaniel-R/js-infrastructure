//create an array with 5 things to do
//print a message of what you have to do 
//print the first and second to last items -> todo: walk the dog
// const todo = ['something 1', 'something 2', 'something 3', 'something 4', 'something 5']

// console.log(`you have ${todo.length} todos`)
// console.log(`you have ${todo[todo.length - 1]} to do`)
// console.log(`you have ${todo[todo.length - 2]} to do`)


//todo for loop

const todos = ['Order Cat Food', 'Clean Kitchen', 'Buy food', 'Do work', 'Exercise']

//  todos.splice(2,3)
// todos.push('Buy coffee')
// todos.shift()


console.log(`You have ${todos.length} todos`)

// todos.forEach (function (todos, index) {
//   const num = index + 1
//   console.log(`${num}- ${todos}`)
// })

//challenge
//1.order cat food
//2. clean kitchen


//simple -4 to get first 2 of array
// for (count = 0; count <= todos.length -4; count++) {
//   console.log(todos[count])
// }

//better for () loop to get only fist 2
for (count = 0; count < todos.length; count++) {
  let num = count + 1
  let todo = todos[count]
  console.log(`${num}. ${todo}.`)
}











