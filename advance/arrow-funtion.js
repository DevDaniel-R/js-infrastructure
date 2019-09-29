// const square = (num) => {
//   return num * num
// }


const square = (num) => num * num


console.log(square(5));

const people = [{
  name: 'dan',
  age: 25
}, {
  name: 'Ann',
  age: 40
}, {
  name: 'Jake',
  age: 70
}
]

// const under30 = people.filter(function (person) {
// //   return person.age < 30
// // })

// short hand
// const under30 = people.filter((person) => person.age < 30)

// console.log(under30)

// challenge 1. find the person with age 22
// 2. Print that person name

const person = people.find((person) => person.age === 22)
console.log(person.name)