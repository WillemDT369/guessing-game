
const randomNumber = Math.floor(Math.random() * 22 + 1);
let numberOfGuesses = 1;

document.getElementById('submitGuess').addEventListener('click', function(){
    let userGuess = document.getElementById('userInput').value;
    if(userGuess == randomNumber){
        alert('Good job bruh' + ', ' + 'you guessed it in ' + numberOfGuesses + ' ' +'tries.');
    } else if(userGuess > randomNumber){
        numberOfGuesses++;
        alert('Lower please!');
    } else{
        numberOfGuesses++;
        alert('Higher please!');
    }
    // console.log(randomNumber);
});

