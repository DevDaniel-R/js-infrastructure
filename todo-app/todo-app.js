//removed item that contains 'the'

var p = document.querySelectorAll('p')

 p.forEach(function(p) {
  if (p.textContent.includes('the')){
     p.remove()
   }
 })

