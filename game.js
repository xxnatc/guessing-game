var question1 = prompt('Am I a dog person?');
if (question1.toLowerCase() === 'no' || question1.toLowerCase() === 'n') {
  alert('You\'re off to a great start! I am very much a cat person.');
} else {
  alert('Sorry! I am actually a cat person.');
}

var question2 = prompt('Have I ever lived in New York City?');
if (question2.toLowerCase() === 'no' || question2.toLowerCase() === 'n') {
  alert('You are correct! I have lived in Hong Kong, London, Seattle, but not New York City.');
} else {
  alert('Looks like I tricked you! Truth is, I have never set foot in New York City in my life.');
}

var question3 = prompt('Do I prefer coffee over tea?');
if (question3.toLowerCase() === 'yes' || question3.toLowerCase() === 'y') {
  alert('That\'s right! Coffee flows in my blood.');
} else {
  alert('You got it wrong! COFFEE FOR LIFE!!!!');
}
