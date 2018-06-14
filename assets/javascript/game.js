$(document).ready(function() {

//array, make a list of words for computer to choose from
var wordList = ["snowman", "mittens", "shovel", "icicles", "frost", "ice", "blizzard", "toboggan", "frozen", "hockey", "snowball", "snowflake", "sweater", "coat", "scarf", "ski","skating", "cold", "boots",];
console.log(wordList)
var rightWord = [];
var wrongWord = [];
var underScore = [];
var wins = 0;
var loses = 0;
const maxTries = 9;


var wrongLetter = [];
var guessesLeft = 9;


document.getElementById('guessesLeft').textContent = guessesLeft;

updateSnowmanImage();

function updateSnowmanImage() {
    var img = document.getElementById("theImage");
    img.src = "assets/images/" + (maxTries - guessesLeft) + ".png";
};


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


//user input/guesses
document.onkeyup = function(event) {
        event.preventDefault();
        if (!(event.which <= 90 && event.which >= 65)) return
        var userGuess = event.key.toLowerCase();
        console.log(userGuess);

        if(randomWord.indexOf(userGuess) > -1) {

//check if user's guess is correct

//if correct, push to right guesses array
        rightWord.push(userGuess);
        console.log(rightWord);

//put letter in place of underscore
        underScore[randomWord.indexOf(userGuess)] = userGuess;
        docUnderScore[0].innerHTML = underScore.join('');
        docRightGuess[0].innerHTML = rightWord;

        if(underScore.join('') === randomWord) {

            wins++;
            $("#result").text("YOU WIN!");
            $("#wins").text(wins);
            
            
            console.log("winner");
        }
    }
    else {

//if wrong, push to wrong guesses array
        wrongWord.push(userGuess);
        docWrongGuess[0].innerHTML = wrongWord;
        guessesLeft--;
        $('#guessesLeft').text(guessesLeft);
        updateSnowmanImage();
    }
   
    if(guessesLeft <= 0) { 
        loses++;
    $("#result").text("Try Again");
    $("#loses").text(loses);


    console.log("That's wrong");
    

};


};

});









