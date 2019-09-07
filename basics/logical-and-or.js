let temp = 150

// logical and operator - true if both sides are true. false otherwise
// logical or operator - true if one side side is  true. false otherwise

if(temp >= 60 && temp <= 90) {
  console.log('It is pretty nice out')
}else if (temp <= 0 || temp >= 120) {
  console.log('Do not go outside') 
} else {
  console.log('eh do what you want')
}

//challenge area
let isGuestOneVegan = false
let isGuestTwoVegan = false

//are both vegan? only offer up vegan dishes.
// at least one vegan? Make sure to offer up some vegan options
//else, offer up anything on the menu

if (isGuestOneVegan && isGuestTwoVegan) {
  console.log('Here are our Vegan Friendly Options')
} else if (isGuestOneVegan || isGuestTwoVegan){
  console.log('Here is the menu and we also offer vegan friendly dishes here')
} else {
  console.log('Here is our menu and our special for today is the italian coffee with a breadstick')
}


