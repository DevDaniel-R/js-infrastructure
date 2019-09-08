//FUNCTION DECLARATION
function sayHello() {
  console.log('Hello')
}
sayHello()

//FUNCTION EXPRESSION //Anonymous Function - this function has no name just function() - assigned function to farwell, as a reference, but otherwise you cant access this function
var farwell = function() {
  console.log('GoodBye')
}
farwell()

//USING ARGUMENTS IN FUNCTIONS - arguements allow us to not repeat ourselves. and make our functions more extensible. can be customized
  function sing(song) {
    console.log(song)
  }
  sing('lalalllallall')
  sing('deeeeee daaaa dooo')  
  sing('laaaaaaaaaaaaaaaa')

 //we have to return or console.log in function so we dont get a value of undefined  note - as soon as it returns value itll exit function
 function multiply(a, b) {
   return a * b
 }

 console.log(multiply(5, 6))






