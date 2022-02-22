// scuberGreetingForFeet() — Use if and else if statements to return the correct 
// greeting based on the distance the passenger desires to travel.

function scuberGreetingForFeet(num) {
  if (num <= 400)
    return 'This one is on me!'
  else if (num >= 2000 && num <= 2499)
    return 'I will gladly take your thirty bucks.'
  else (num >= 2500)
    return 'No can do.'
}

// ternaryCheckCity() — Use a ternary operator to return the correct response 
// based on the desired destination of the passenger.

function ternaryCheckCity(input) {
  const city = input;
  const cityMessage = city === 'NYC' ? 'Ok, sounds good.' : 'No go.';
  return cityMessage
}

// switchOnCharmFromTip() — Use a switch statement to return a different 
// response based on the generosity of the passenger's tip.

function switchOnCharmFromTip(input) {
  switch(input) {
    case 'generous':
      return 'Thank you so much.';
      break;
    case 'not as generous':
      return 'Thank you.';
      break;
    default:
      return 'Bye.'
  }
}