//Variables ......
const qwerty = document.getElementById('qwerty');
const phrase = document.getElementById('phrase');

const buttonReset = document.querySelector('.btn__reset');
const overlay = document.getElementById('overlay');

let ul = document.querySelector('#phrase');

let missedGuesses = 0;

// Phrases Array ......

const phrases = [
  "when nothing is going right go left",
  "dont look back youre not going that way",
  "love conquers all",
  "better late than never",
  "i licked it so its mine"
];

 //Button EventListener/funcion .....
 buttonReset.addEventListener("click", () => {
  overlay.style.display = "none";
});

function getRandomPhraseAsArray(arr) {
  //Function for selecting a random phrase from the array...
  let randomNum = Math.floor(Math.random() * arr.length); //Create random number between index...
  return arr[randomNum];              //Return string of the phrase.
}

function addPhraseToDisplay(arr) {
  for (let i = 0; i < arr.length; i += 1) {
    const li = document.createElement('li');

    li.textContent = arr[i];

    if (li.textContent !== "") {
      li.className = "letter";
    } else {
      li.className = "space";
    }
    ul.appendChild(li);
  }
}

const randomPhrase = getRandomPhraseAsArray(phrases).split("");
addPhraseToDisplay(randomPhrase);
//Call funcion to generate a phrase from array..
