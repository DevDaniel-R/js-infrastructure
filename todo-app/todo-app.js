
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

document.querySelector('#add-todo').addEventListener('click', function (e) {
  console.log('Add Todo!')
})

document.querySelector('#todo-input').addEventListener('input', function (e) {
  console.log(e.target.value)
})
