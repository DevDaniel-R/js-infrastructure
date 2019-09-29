
const todos = [{
  text: 'Order Cat Food',
  completed: 'true'
}, {
  text: 'Clean Kitchen',
  completed: 'false'
}, {
  text: 'Buy food',
  completed: 'false'
}, {
  text: 'Do work',
  completed: 'false'
}, {
  text: 'Excercise',
  completed: 'true'
},]

// var p = document.querySelectorAll('p')

//  p.forEach(function(p) {
//   if (p.textContent.includes('the')){
//      p.remove()
//    }
//  })

const incompleteTodos = todos.filter(function (todo) {
  return !todos.completed
})

const summary = document.createElement('h2')
summary.textContent = `You have ${incompleteTodos.length} todos left`
document.querySelector('body').appendChild(summary)

todos.forEach(function (todo) {
  const p = document.createElement('p')
  p.textContent = todo.text
  document.querySelector('body').appendChild(p)
})

// print message letting us know how many todos you have left
//print a p for each todo above
