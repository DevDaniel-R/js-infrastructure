const notes = ['note 1', 'note 2', 'note 3']

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

notes.splice(2,1)
notes.push('buy coffee')
notes.shift()

// let hello = function(truth) {
//   if (greeting = true) {
//     return `good morning`
//   } else {
//     return `goodnight`
//   }
// }

// console.log(hello(true))

console.log(notes.length)
console.log(notes)