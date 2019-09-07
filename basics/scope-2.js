// Global (name)
  //local
    //local
  //local

  let name = 'daniel'

  if (true) {
    let name = 'Mike'

//Note - if  'mike' and 'daniel' were not to be there or declared under name - 'jen' could become a leaked global which will result in the last console.log to be listed as 'jen' to aviod this we put 'LET NAME = 'JEN' let will let you declare it to the local variable. 

    if (true) {
      name = 'Jen'
      console.log(name)
    }
  }

  if (true) {
    console.log(name)
  }