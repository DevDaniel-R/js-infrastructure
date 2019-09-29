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

//delete element from static html
//Query and remove
// const p = document.querySelector('heading-1')
// p.remove()

//Query all and remove
// const ps = document.querySelectorAll('p')

//  ps.forEach(function (p) {
//   p.remove()
// })

//console log write
// const ps = document.querySelectorAll('p')

//   ps.forEach(function(p) {
//     console.log(p.textContent)
//   })

// change text for all
const ps = document.querySelectorAll('p')

  ps.forEach(function(p) {
    p.textContent = '***********'
  })

  //add a new element 

  const newParagraph = document.createElement('p')
  newParagraph.textContent = 'This is a new element using javascript'
  document.querySelector('body').appendChild(newParagraph)