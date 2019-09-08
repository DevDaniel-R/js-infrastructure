// DOM document object model

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