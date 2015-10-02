var one = document.getElementById('one');
var two = document.getElementById('two');
var three = document.getElementById('three');

var name = prompt('Welcome! What\'s your name?');
var score = 0;

var questions = ['Am I a dog person?', 'Have I ever lived in New York City?', 'Do I prefer coffee over tea?'];
var answers = ['yes', 'y', 'no', 'n'];

function ques1() {
  var question1 = prompt(questions[0]);
  if (question1.toLowerCase() === answers[2] || question1.toLowerCase() === answers[3]) {
    one.className = 'correct';
    one.innerHTML = 'You\'re off to a great start, ' + name + '! I am very much a cat person.' + '<br /><img src="images/cat.jpg" height="200" width="200" />';
    score++;
  } else {
    one.className = 'incorrect';
    one.innerHTML = 'Sorry, ' + name + '! I am actually a cat person.';
  }
}

function ques2() {
  var question2 = prompt(questions[1]);
  if (question2.toLowerCase() === answers[2] || question2.toLowerCase() === answers[3]) {
    two.className = 'correct';
    two.innerHTML = 'You are correct! I have lived in Hong Kong, London, Seattle, but not New York City.' + '<br /><img src="images/seattle.jpg" height="200" width="200" />';
    score++;
  } else {
    two.className = 'incorrect';
    two.innerHTML = 'Looks like I tricked you! The truth is, ' + name + ', I have never set foot in New York City in my life.';
  }
}

function ques3() {
  var question3 = prompt(questions[2]);
  if (question3.toLowerCase() === answers[0] || question3.toLowerCase() === answers[1]) {
    three.className = 'correct';
    three.innerHTML = 'Well done, ' + name + '! Coffee flows in my blood.' + '<br /><img src="images/coffee.jpg" height="200" width="200" />';
    score++;
  } else {
    three.className = 'incorrect';
    three.innerHTML = 'You got it wrong, ' + name + '! COFFEE FOR LIFE!!!!';
  }
}

ques1();
ques2();
ques3();

alert('You got ' + score + ' out of 3 correct, ' + name + '. Thanks for playing!');

// some edits by Mike
