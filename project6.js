//Variables ......
const qwerty = document.getElementById('qwerty');
const phrase = document.getElementById('phrase');

const buttonReset = document.querySelector('.btn__reset');
const overlay = document.getElementById('overlay');
const ul = document.querySelector('ul');

let missed = 0;

//Button EventListener/funcion .....
buttonReset.addEventListener("click", () => {
 overlay.style.display = "none";
});

// Phrases Array ......

const phrases = [
  "when nothing is going right go left",
  "dont look back youre not going that way",
  "love conquers all",
  "better late than never",
  "i licked it so its mine"
];

  //Function for selecting a random phrase from the array...
function getRandomPhraseAsArray(arr) {
  const randomPhrase = arr[Math.floor(Math.random() * arr.length)];
  return randomPhrase.split('');
}

const gamePhrase = getRandomPhraseAsArray(phrases);

function addPhraseToDisplay(arr) {
  for (let i = 0; i < arr.length; i++) {
    const li = document.createElement('LI');
    const letter = document.createTextNode(`${arr[i]}`);
    if (arr[i] === " ") {
      li.className = "space";
    } else {
      li.className = "letter";
    }
    li.appendChild(letter);
    ul.appendChild(li);
  }
}

addPhraseToDisplay(gamePhrase);
//Call funcion to generate a phrase from array..

function checkLetter(button) {
  let  = document.querySelectorAll('.class');
  let match = 0;

  for (let i =0; i < liElements.length; i++) {
    if (button.textContent.toLowerCase() === liElements.textContent.toLowerCase()) {
      liElements.className = 'show';
      match += 1;
    }
}
}
