// The specific letters that the user typed.
var computerChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

// Set to zero
var wins = 0;
var losses = 0;
var guessesLeft = 9;
var letterGuess = [];



// This sets the computerGuess variable equal to a random choice from the computerChoice array.
var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
console.log("computers guess: ", computerGuess);

function calculatGuesses() {
  document.getElementById("guessesLeft").innerHTML = "Guesses Left: " + guessesLeft;
  document.getElementById("letter").innerHTML = "Your Guesses so far: " + letterGuess.join(', ');
}


calculatGuesses();

var restart = function() {
	guessesLeft = 9;
	letterGuess = [];
	computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
}

// When the user presses any key, it will run the following function will happen...
document.onkeyup = function(event) {
	guessesLeft--;

	var userGuess = String.fromCharCode(event.keyCode).toLowerCase();
  console.log("current guess: ",  userGuess);
	letterGuess.push(userGuess);
	calculatGuesses();

	if (userGuess === computerGuess){
		wins++;
		document.getElementById("wins").innerHTML = "Wins: " + wins;
		restart();
	} 
	else if (guessesLeft === 0) {
		losses++;
		document.getElementById("lose").innerHTML = "Loses: " + losses;
		restart();
	}
  };
