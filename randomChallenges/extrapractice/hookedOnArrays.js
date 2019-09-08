// Good resource for array methods is w3shcools.

//to select within an array of an array

const list = [
  ["tiger", "cat", "bear", "bird"]
];

console.log(list[0][2])

//method concat creates a new list and other methods pop, shift, push add or take away from array
var newList = list.concat(["monkey"])
console.log(newList)