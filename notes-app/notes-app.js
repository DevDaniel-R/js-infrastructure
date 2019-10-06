// DOM document object model

const notes = [{
  title: 'My next Trip',
  body: 'I would like to go to spain'
}, {
  title: 'Habits to work on',
  body: 'Excercise. Eating a bit better'
}, {
  title: 'Office modifications',
  body: 'Get a new seat'
}] 

document.querySelector('#create-note').addEventListener('click', function () {
  console.log('did this work')
})

document.querySelector('#remove-all').addEventListener('click', function () {
  document.querySelectorAll('.note').forEach(function (note) {
    note.remove()
  })
})

document.querySelector('#search-text').addEventListener('input', function (e) {
  console.log(e.target.value)
})

