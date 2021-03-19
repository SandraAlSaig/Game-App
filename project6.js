//Variables ......
const qwerty = document.getElementById('qwerty');
const phrase = document.getElementById('phrase');

const buttonReset = document.querySelector('.btn__reset');
const overlay = document.getElementById('overlay');
const ul = document.querySelector('ul');
let scoreboard = document.querySelectorAll('#scoreboard');
let lives = document.querySelectorAll('.tries');
let missed = 0;

//Button EventListener/funcion .....
buttonReset.addEventListener("click", () => {
  if(buttonReset.textContent == 'Start Game') {
    overlay.style.display = "none";
  }
  if(buttonReset.textContent == 'Replay Game') {
    overlay.style.display = "none";
    let chosen = document.querySelectorAll('.chosen');
    for( let i=0; i < chosen.length; i++) {
            chosen[i].disabled = false;
            chosen[i].classList.remove('chosen');

        }
  }
  if(buttonReset.textContent == 'Try Again') {
    overlay.style.display = "none";
  }



// Phrases Array ......

const phrases = [
  "When nothing is going right go left",
  "Dont look back youre not going that way",
  "Love conquers all",
  "Better late than never",
  "I licked it so its mine"
];

  //Function for selecting a random phrase from the array and splitting it to letters...
function getRandomPhraseAsArray(arr) {
  const randomPhrase = arr[Math.floor(Math.random() * arr.length)];
  return randomPhrase.split('');
}

//Calling the getRandomPhraseAsArray function....
const gamePhrase = getRandomPhraseAsArray(phrases);

//Displaying the array onto the browser...
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
//Call funcion to generate a phrase from array onto the browser/display..
addPhraseToDisplay(gamePhrase);

//Check if chosen letter matches letters in the phrase...
function checkLetter(button) {
  let letterCheck = document.querySelectorAll('li');
  let match = null;

  for (let i =0; i < letterCheck.length; i++) {
    if (button.textContent.toLowerCase() === letterCheck[i].textContent.toLowerCase()) {
      letterCheck[i].classList.add('show');
      match = letterCheck[i].textContent;
    }
}
return match;
}
//Adding EventListener for missed guesses...
qwerty.addEventListener('click', (event) => {
  if (event.target.tagName === 'BUTTON') {
    event.target.classList.add('chosen');
    event.target.disabled = true;
    let pressedLetter = checkLetter(event.target);
    if(pressedLetter ===  null) {
      lives[missed].src="images/lostHeart.png";
      missed++;
      // scoreboard.parentNode.removeChild('li');
    }
    checkWin();
  }
});

//Function to check if player wins or loses...
function checkWin () {
  let letters = document.querySelectorAll('.letter');
  let show = document.querySelectorAll('.show')

  if (letters.length === show.length) {
      overlay.className = 'win';
      overlay.firstChild.textContent = 'You Won!';
      overlay.style.display = 'flex';
      buttonReset.textContent = 'Replay Game';
  } else if (missed >= 5) {
      overlay.className = 'lose';
      overlay.firstChild.textContent = 'You Lost!';
      buttonReset.textContent = 'Try Again';
      overlay.style.display = 'flex';
  }
}
})
