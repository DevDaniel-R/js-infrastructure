
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


const filters = {
  searchText: '',
  hideCompleted: false
}

const renderTodos = function (todos, filters) {
  const filteredTodos = todos.filter(function (todo) {
    const searchTextMatch =todo.text.toLowerCase().includes(filters.searchText.toLowerCase())
    const hideCompletedMatch =  !filters.hideCompleted || !todo.completed





    return searchTextMatch && hideCompletedMatch
  })

    // if (filters.hideCompleted) {
    //   return !todo.completed
    // } else {
    //   return true
    // }

  
const incompleteTodos = filteredTodos.filter(function (todo) {
  return !todo.completed
})

const completedTodos = todos.filter(function (todoos){
  return todoos.completed
})

document.querySelector('#todos').innerHTML = ''

const summary = document.createElement('h2')
summary.textContent = `You have ${incompleteTodos.length} todos left and you have completed ${completedTodos.length}`
document.querySelector('#todos').appendChild(summary)

filteredTodos.forEach(function (todo) {
  const p = document.createElement('p')
  p.textContent = todo.text
  document.querySelector('#todos').appendChild(p)
})
}

renderTodos(todos, filters)

document.querySelector("#search-text").addEventListener('input', function (e) {
  filters.searchText = e.target.value
  renderTodos(todos, filters)
})


document.querySelector('#new-todo').addEventListener('submit', function (e) {
  e.preventDefault()
  todos.push({
    text: e.target.elements.text.value,
    completed: false
  })

renderTodos(todos, filters)
e.target.elements.text.value = ''
})

document.querySelector('#hide-completed').addEventListener('change', function (e) {
  filters.hideCompleted = e.target.checked
  renderTodos(todos, filters)
})