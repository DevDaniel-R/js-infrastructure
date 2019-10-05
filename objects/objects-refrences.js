//breaking the binding - instead of manipulating we can assign something new to account  ex  account = {}
// inside the function  you will get an empty object and the original. 
// WHEN WE PASS AN OBJECT INTO A FUNCITON WE CAN MANIPULATE ITS PROPERTIES. IF WE MANIPULATE ITS PROPERTIES WE ARE ALSO CHANGING THE PROPERTIES OF THE OBJECT WE ORIGINALLY PASSED IN (myAccount). HOWEVER IF WE ASSIGN A NEW VALUE TO THAT ARGUEMENT WE BREAK THE THIS BINDING COMPLETELY NOW IT DOESNT POINT TO MYACCOUNT



let myAccount = {
  name: 'Daniel',
  expenses: 0,
  income : 0,
  savings : 0
}

let addExpense = function (account, amount) {
  account.expenses = account.expenses + amount
}

let addIncome = function (account, income) {
  account.income = account.income + income
}

let addSavings = function (account, savings) {
  account.savings = account.savings + savings
}

let resetAccount = function (account) {
  account.expenses = 0
  account.income = 0
}

let getAccountSummary = function (account) {
  let balance = account.income - account.expenses
  return `Account for ${account.name} has an overall balance of $${balance}. week of $${account.income} in income. $${account.expenses} in expenses. Also a savings of $${account.savings}`
}

let getPositiveSummary = function (account) {
  let balance = account.income - account.expenses
  let positiveBalance = (account.income - account.expenses) + account.savings
  return `After all expenses deducted, ${account.name} has a balance of $${balance} and a savings of $${account.savings}. Over positive of a whooping $${positiveBalance}`
}

addIncome(myAccount, 2000)
addExpense(myAccount, 2.50)
addExpense(myAccount, 160)
addSavings(myAccount, 5000)

console.log(getAccountSummary(myAccount))


// resetAccount(myAccount)

console.log(getPositiveSummary(myAccount))



