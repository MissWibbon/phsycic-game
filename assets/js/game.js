var wins = 0;
var losses = 0;
var guesses = 0;
var guess;
var guessesLeft = 0;
var guessArray = ["a", "s", "d", "f", "g", "h", "j", "k", "l", ";"];
var guessLimit = 10;

document.addEventListener("keydown", function guess() {
    const userKey = event.key;
    document.getElementById("#guess").innerHTML = userKey;
    const computerKey = guessArray[Math.floor(Math.random()*guessArray.length)];
    console.log(userKey);
    if(userKey === computerKey) {
        wins = wins + 1;
    }
});
