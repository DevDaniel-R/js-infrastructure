//students score, total possible score
//15/20 -> you got a C (75%!)  output
//A 90-100, B 80-90, C 70-79, D 60-69, F 0-59

const overAll = function (score, total) {
  let percent = (score / total) * 100
  let letterGrade = ''

  if (percent >= 90) {
    letterGade = 'A'
  }else if (percent >= 80){
    letterGrade = 'B'
  }else if (percent >= 70){
    letterGrade = 'C'
  }else if (percent >= 60){
    letterGrade = 'D'
  } else {
    letterGrade = 'F'
  }
  
    return `You got a ${letterGrade} ${percent}%`

}

let result = overAll(10, 20)
console.log(result)

const border = '==================================== NEXT UP'
console.log(border)




let getTip = function (total, tip = .2) {
  return total * tip
}

let tip = getTip(25)

const tipper = `Overall tip will be $${tip}`

console.log(tipper)







