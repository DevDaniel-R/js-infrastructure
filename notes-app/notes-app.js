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

const filters = {
  searchText: ''
}

const renderNotes = function(notes, filters) {
    const filteredNotes = notes.filter(function (note) {
      return note.title.toLowerCase().includes(filters.searchText.toLowerCase())
    })

    document.querySelector('#notes').innerHTML = ''
    
    filteredNotes.forEach(function (note) {
      const noteEl = document.createElement('p')
      noteEl.textContent = note.title
      document.querySelector('#notes').appendChild(noteEl)
    })
}

renderNotes(notes, filters)

document.querySelector('#create-note').addEventListener('click', function () {
  console.log('did this work')
})

document.querySelector('#search-text').addEventListener('input', function (e) {
    filters.searchText = e.target.value
    renderNotes(notes, filters)
})

document.querySelector('#for-fun').addEventListener('change', function (e) {
  console.log(e.target.checked)
})