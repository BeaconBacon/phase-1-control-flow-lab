
function scuberGreetingForFeet(number){
  let quote
  if (number <= 400) {
    quote = 'This one is on me!';
  }
  else if (number <= 2000) {
    quote = 'That will be twenty bucks.'
  }
  else if (number < 2500) {
    quote = 'I will gladly take your thirty bucks.'
  }
  else {
    quote = 'No can do.'
  }
  return quote
  // Write your code here!
}

function ternaryCheckCity(city){
  if (city == "NYC") {
    return "Ok, sounds good."
  }
  else {
    return "No go."
  }
  // Write your code here!
}

function switchOnCharmFromTip(gratuity){
  if (gratuity == "generous") {
    return "Thank you so much."
  }
  else if (gratuity == "not as generous") {
    return "Thank you."
  }
  else {
    return "Bye."
  }

  // Write your code here!
}