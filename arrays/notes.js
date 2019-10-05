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

// // notes.pop()
// // notes.push('My new note')

// // console.log(notes.shift())
// // console.log(notes.unshift('my first note'))
// notes[2] = 'this is now the new note3'

// notes.splice(1, 4, 'this is the new item')

//challenge area
//delete the thrid item 
//add a new item onto the end
// remove the first item from the list


// notes.splice(2,3, 'added new item to array')
// notes.splice(0,1)

// notes.splice(2,1)
// notes.push('buy coffee')
// notes.shift()

// let hello = function(truth) {
//   if (greeting = true) {
//     return `good morning`
//   } else {
//     return `goodnight`
//   }
// }

// console.log(hello(true))

// notes[2] = 'this is now the new notes 3'

// notes.forEach(function (item, index) {
//   console.log(index)
//   console.log(item)
// })


const findNote = function (notes, noteTitle) {
  return notes.find(function (note, index){
    return note.title.toLowerCase() === noteTitle.toLowerCase()
  })
}

// const findNote = function (notes, noteTitle) {
//   const index = notes.findIndex(function (note, index){
//     return note.title === noteTitle
//   })
//   return notes[index]
// }

const note = findNote(notes, 'office modifications')
console.log(note)







//no need -
// console.log(notes.length)
// console.log(notes)

// const index = notes.findIndex(function (notes, index) {
//   console.log(notes)
//   return notes.title === 'Habits to work on'
// })

// console.log(index)




//arrays -note - find will find the array text 
// find index will find the array index once found itll stop going through arrays