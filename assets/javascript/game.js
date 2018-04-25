
$(document).ready(function() {

var alphabet;         //array of letters to chose from

var previuosGuesses;  //stored guesses
var currentWord;      //the selected word
var remainingGuessCount;//number guesses remaining
var wins;               // number of times the word is solved

//array, make a list of words for computer to choose from
var wordList = ["back in black", "kasmhir", "stairway to heaven",
"sweet emotion", "comfortably numb", "baba o'riley",
"crazy  train", "hotel california", "imagine", "more than a feeling",
"smoke on the water", "rocket man", "barracuda", "cocaine",
"tom sawyer", "black dog", "free fallin", "free bird", "paranoid",
"we will rock you", "enter sandman", "time", "money"];
console.log(wordList)

//array, make a list of letters for computer to choose from
var alphabet = [ "a", "b", "c", "d", "e", "f", "g", "h", "i", "j","k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z",];
var main = $("body");
var buttons = main.find("#buttons");

// create the alphabet buttons
//var buttons = function () {
 // letterButton = document.getElementById('buttons');
 // letters = document.createElement('ul');
//1. create for-loop to iterate through alphabet array 
for (var i=0; i<alphabet.length; i++) {
    //inside loop
//2. create a variable named "letterButton" equal to $(",button>")
var letterButton = $("<button>");
//3. then give "letterButton" classes
letterButton.addClass(".alphabet li")
//4. give "letterButton" attributes
letterButton.attr("data-letter", alphabet[i]);
//5.give each "letterButton" a text
letterButton.text(alphabet[i]);
//6 append to #buttons div
buttons.append(letterButton);

  }
 

// Create geusses 
var result = function() {
  wordHolder = document.getElementById('currentWord');
  correct = document.createElement('ul');
// create for-loop to determine result of guesses
  for (var i = 0; i < currentWord.length; i++) {
    correct.setAttribute('id', 'currrentWord');
    guess = document.createElement('li');
    guess.setAttribute('class', 'guess');
    if (currentWord[i] === "-") {
      guess.innerHTML = "-";
      space = 1;
    } else {
      guess.innerHTML = "_";
    }
  }
    geusses.push(guess);
    wordHolder.appendChild(correct);
    correct.appendChild(guess);
}

// Show remaining guesses
  var showRemainingGuesses = document.getElementById("remainingGuesses")
  var comments = function() {
  showRemainingGuesses.innerHTML = "You have " + guesses + " guesses remaing";
  if (guesses < 1) {
    showRemainingGuesses.innerHTML = "Game Over";
  }
  for (var i = 0; i < guesses.length; i++) {
    if (counter + space === guesses.length) {
      showRemainingGuesses.innerHTML = "You Win!";
    }
  }
}
  // Play
  var play = function() {
   
    generateRandomWord = wordList[Math.floor(Math.random() * wordList.length)];
    currentWord = generateRandomWord[Math.floor(Math.random() * generateRandomWord.length)];
    currentWord = currentWord.replace("-");
    console.log(currentword);
    buttons();

    guesses = [];
    remainingGuesses = 8;
    counter = 0;
    space = 0;
    result();
    comments();
  }


    // Reset button

    document.getElementById('reset').onclick = function() {
     correct.parentNode.removeChild(correct);
     letters.parentNode.removeChild(letters);
     
     context.clearRect(0, 0, 400, 400);
     play();
   }

    //$("#reset").on("click", function() {
     // $("#currentWord").empty();
    //}

  });
