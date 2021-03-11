//Variables ......
const qwerty = document.getElementById('qwerty');
const phrase = document.getElementById('phrase');

const buttonReset = document.querySelector('.btn__reset');
const overlay = document.getElementById('overlay');

let missedGuesses = 0;

// Phrases Array ......

const phrases = [
  "when nothing is going right go left",
  "dont look back youre not going that way",
  "love conquers all",
  "better late than never",
  "i licked it so its mine"
];

 //Button funcion .....

 buttonReset.addEventListener("click", () => {
  overlay.style.display = "none";
});

//Function for selecting a random phrase from the array...
function getRandomPhraseAsArray(arr) {
  let randomNum = Math.floor(Math.random() * arr.length);     //Create random number between index...
  const randomPhrase = arr[randomNum];                 //Asign random number to function parameter...
  const chars = randomPhrase.split('');                       //Split phrase to letters.
  return chars;                                                //return letters of the phrase.
}


//Splitting the strings into letters.....
// const chars = str.split('');
// console.log(chars[i]);
// expected output: "letter"
