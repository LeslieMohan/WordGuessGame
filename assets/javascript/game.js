$(document).ready(function() {

//array, make a list of words for computer to choose from
var wordList = ["snowman", "mittens", "shovel", "icicles", "frost", "ice", "blizzard", "toboggan", "frozen", "hockey", "snowball", "snowflake", "sweater", "coat", "scarf", "ski","skating", "cold", "boots",];
console.log(wordList)
var rightWord = [];
var wrongWord = [];
var underScore = [];
var wins = 0;
var loses = 0;

var wrongLetter = [];
var guessesLeft = 9;

document.getElementById('guessesLeft').textContent = guessesLeft;



//select word randomly at beginning of game
var randomWord = wordList[Math.floor(Math.random() * wordList.length)];

var docUnderScore = document.getElementsByClassName('underScore');
var docRightGuess = document.getElementsByClassName('rightGuess');
var docWrongGuess =  document.getElementsByClassName('wrongGuess');


console.log(randomWord)
//make underscores match selected word
var makeUnderscores = () => {
    for (var i = 0; i < randomWord.length; i++) {
        underScore.push('_   ');
    }
    //displayon screen
    document.getElementById('currentWord').textContent = underScore.join(' ');
    return underScore;

}
console.log(makeUnderscores());

function winLose() {
    
    if (winCounter === randomWord.length)
{
        alert("You Win!")
}
    else if (guessesLeft === 0)
{            
    alert("You Lost!")
}
}
//user input/guesses
document.onkeyup = function(event) {
    event.preventDefault();
    
    var userGuess = event.key;
    console.log(userGuess);

    if(randomWord.indexOf(userGuess) > -1) {

//check if user's guess is correct
//if correct, push to right array
        rightWord.push(userGuess);
        console.log(rightWord);
//put letter in place of underscore
        underScore[randomWord.indexOf(userGuess)] = userGuess;
        docUnderScore[0].innerHTML = underScore.join('');
        docRightGuess[0].innerHTML = rightWord;
        if(underScore.join('') == randomWord) {
            alert('You Win!');
            winCounter++;
            winLose();
        }
    }
    else {

//if wrong, push to wrong array
        wrongWord.push(userGuess);
        docWrongGuess[0].innerHTML = wrongWord;
        console.log(wrongWord);
    }


};


});









