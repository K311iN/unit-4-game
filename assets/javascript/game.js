var wordChoices = [red, purple, green, yellow, blue];
var wordGuess = " "
var lettersInWords = [];
var blanks = 0;  
var BlanksAndSuccesses = [];
var WrongGuesses = [];




var wins = 0;
var losses = 0;
var numGuess = 10;

function startGame() {

    numGuesses = 10

    wordGuess = wordChoices[Math.floor(Math.Random() * wordChoices.length)];

    lettersInWord = wordChoices.split(" ")

    numBlanks = lettersInWords.length;

    console.log(wordGuess)

    BlanksAndSuccesses = [];

    wordGuesses = [];

    for (var i 0; i < blanks; i++ ) {

        blanksAndSuccesses.push(" ") 
    }

}