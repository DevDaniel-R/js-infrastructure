//breaking the binding - instead of manipulating we can assign something new to account  ex  account = {}
// inside the function  you will get an empty object and the original. 
// WHEN WE PASS AN OBJECT INTO A FUNCITON WE CAN MANIPULATE ITS PROPERTIES. IF WE MANIPULATE ITS PROPERTIES WE ARE ALSO CHANGING THE PROPERTIES OF THE OBJECT WE ORIGINALLY PASSED IN (myAccount). HOWEVER IF WE ASSIGN A NEW VALUE TO THAT ARGUEMENT WE BREAK THE THIS BINDING COMPLETELY NOW IT DOESNT POINT TO MYACCOUNT
//note when 

//  LET OTHERACCOUNT = MYACCOUT  ANYTHING CHANGED WITHIN EACH WILL BE BINDED MEANING ITLL MIRROR THE OTHER


let myAccount = {
  name: 'Daniel',
  expenses: 0,
  income: 0
}

let addExpense = function (account, amount) {
 account.expenses = account.expenses + amount
}

let addIncome = function (account, income) {
  account.income = account.income + income
}

let resetAccount = function (account) {
  account.expenses = 0
  account.income = 0
}

let getAccountSummary = function (account) {
  let balance = account.income - account.expenses
  return `Account for ${account.name} has ${balance}. $${account.income} in income ${account.expenses} in expenses.`
}

addExpense(myAccount, 2000)
addExpense(myAccount, 2.50)
addExpense(myAccount, 100)
console.log(getAccountSummary(myAccount))
resetAccount(myAccount)
console.log(getAccountSummary(myAccount))
//addIncome
//resetAccount
//getAccountSummary

//Account for Daniel has 900. 100 in income  100 in expenses.

//addincome
//add expense
//addexpense
//getaccountsummary
//resetaccount
//getaccountsummary

addExpense(myAccount, 2.50)
console.log(myAccount)

