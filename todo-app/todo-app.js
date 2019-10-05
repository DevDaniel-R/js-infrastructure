
const todos = [{
  text: 'Order Cat Food',
  completed: false
}, {
  text: 'Clean Kitchen',
  completed: false
}, {
  text: 'Buy food',
  completed: true
}, {
  text: 'Do work',
  completed: false
}, {
  text: 'Excercise',
  completed: true
}]

const incompleteTodos = todos.filter(function (todo) {
  return !todo.completed
})

const completedTodos = todos.filter(function (todoos){
  return todoos.completed
})

const summary = document.createElement('h2')
summary.textContent = `You have ${incompleteTodos.length} todos left and you have completed ${completedTodos.length}`
document.querySelector('body').appendChild(summary)

todos.forEach(function (todo) {
  const p = document.createElement('p')
  p.textContent = todo.text
  document.querySelector('body').appendChild(p)
})

// print message letting us know how many todos you have left
//print a p for each todo above
