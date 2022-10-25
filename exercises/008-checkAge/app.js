function checkAge(name, age) {
  // your code here
  let messageOK = "Welcome, " + name +"!"
  let messageBad = "Go home, " + name +"!"
  if (age>20) {
    return messageOK
  } 
  else{
    return messageBad
  }
}