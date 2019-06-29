var wins = 0;
var losses = 0;
var guesses = 0;
var guessesLeft = 9;
var guessArray = ["a", "s", "d", "f", "g", "h", "j", "k", "l", ";"];
var letterGuesses = [];
var computerKey = guessArray[Math.floor(Math.random()*guessArray.length)];



    document.onkeyup = function(event) {
        var userGuess = event.key;
        letterGuesses.push(userGuess);
        document.getElementById("guess").innerHTML = userGuess;
        document.getElementById("computerGuess").innerHTML = computerKey;
        //console.log(userKey);
        document.getElementById("guesses").innerHTML = letterGuesses;            

        
        

        console.log(guessesLeft);

        if(userGuess === computerKey) {
            wins++;            
            computerKey = guessArray[Math.floor(Math.random()*guessArray.length)];
            document.getElementById("wins").innerHTML = wins;
            letterGuesses = [];
            guessesLeft = 9;
            document.getElementById("guessesLeft").innerHTML = guessesLeft;

            //alert("Correct!");

        }
        else if (guessesLeft === 0){
            computerKey = guessArray[Math.floor(Math.random()*guessArray.length)];
            losses = losses + 1;        
            document.getElementById("losses").innerHTML = losses;

            //alert("you lose!");
            letterGuesses = [];
            guessesLeft = 9;
            document.getElementById("guessesLeft").innerHTML = guessesLeft;

        }
        else {
            guesses = guesses + 1;
            guessesLeft = guessesLeft - 1;        
            document.getElementById("guessesLeft").innerHTML = guessesLeft;

        }

    };
    function guessLimit() {
        if(guesses >= guessesLeft ) {
            alert("you lost!");
        }
    };
