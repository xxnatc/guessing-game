var name = prompt('Welcome! What\'s your name?');
var score = 0;

function ques1() {
  var question1 = prompt('Am I a dog person?');
  if (question1.toLowerCase() === 'no' || question1.toLowerCase() === 'n') {
    alert('You\'re off to a great start, ' + name + '! I am very much a cat person.');
    score++;
  } else {
    alert('Sorry, ' + name + '! I am actually a cat person.');
  }
}

function ques2() {
  var question2 = prompt('Have I ever lived in New York City?');
  if (question2.toLowerCase() === 'no' || question2.toLowerCase() === 'n') {
    alert('You are correct! I have lived in Hong Kong, London, Seattle, but not New York City.');
    score++;
  } else {
    alert('Looks like I tricked you! The truth is, ' + name + ', I have never set foot in New York City in my life.');
  }
}

function ques3() {
  var question3 = prompt('Do I prefer coffee over tea?');
  if (question3.toLowerCase() === 'yes' || question3.toLowerCase() === 'y') {
    alert('Well done, ' + name + '! Coffee flows in my blood.');
    score++;
  } else {
    alert('You got it wrong, ' + name + '! COFFEE FOR LIFE!!!!');
  }
}

ques1();
ques2();
ques3();

alert('You got ' + score + ' out of 3 correct, ' + name + '. Thanks for playing!');
